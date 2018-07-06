import React from "react";
import {Alert, ScrollView, StyleSheet} from "react-native";
import AnswerContainer from "../../components/AnswerContainer";
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import BlanksQuestionContainer from "../BlanksQuestionContainer/BlanksQuestionContainer";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";
import QuestionService from "../../services/QuestionService";
import FormLabel from "react-native-elements/src/form/FormLabel";
import BlanksUtil from "../BlanksQuestionContainer/BlanksUtil";

const styles = StyleSheet.create({

});


const questionService = QuestionService.instance;
export default class FillInTheBlanksQuestionWidget extends React.Component{
    static navigationOptions={
        title : "Fill in the blanks"
    }

    constructor(props){
        super(props)



        console.warn("Fill in the blanks question nav params")
        console.warn(this.props.navigation.state.params)



        this.state={
            editMode :true,

            question : {
                title : "",
                points : "0",
                description :"",
                textWithBrackets: "",
                variablesList:[],
                variables:"testone=1"
            }
        }

    }

    componentDidMount(){
        console.log("FillInTheBlanksQuestionWidget : Mounted");

        const selectedQuestion = this.props.navigation.getParam("question", false);
        if (selectedQuestion)
        {
            this.setState({question : {...selectedQuestion} })
        }
    }
    componentWillUnmount(){
        console.log("FillInTheBlanksQuestionWidget : Unmounted");
    }

    handleQuestionHeaderChange=(data)=>{
        console.log("Question :   onChangeQuestionText "  );
        const newQuestionData =  {...this.state.question,...data}

        console.log("Question data after header change : ")
        this.setState({
            question : newQuestionData
        },()=>console.log(this.state))


    }



    handleOnUpdateSelected=()=>{
        const questionId = this.props.navigation.getParam("questionId",  -1000);
        const examId =  this.props.navigation.getParam("examId", -10000);

        console.log("On uodate select.....")
        const question = this.state.question

        if(!!question["id"])
        {
            console.log(" question : exists")
            console.log(question)


            questionService.deleteQuestion(question.id).
            then(res=>{
                console.log("question deleted by ID : " + question.id)


                delete question.id
                questionService.createFillInTheBlanksExamQuestion(examId,question).then(res=>{
                    console.log("question created! ")
                    this.setState(
                        {
                            question: res
                        }
                    )
                    Alert.alert(" Updated question! ")
                    this.props.navigation
                        .navigate('ExamQuestionsList',{
                            examId : examId
                        })
                })
            })


        }

        else
        {

            questionService.createFillInTheBlanksExamQuestion(examId,  this.state.question)
                .then(res=>{
                    console.log("Saved essay question successfully")
                    console.log(res);

                    Alert.alert("Saved successfully!")


                    this.props.navigation
                        .navigate('ExamQuestionsList',{
                            examId : examId
                        })
                })

        }



    }

    handleOnCancelSelected=()=>{

        const examId =  this.props.navigation.getParam("examId", -10000);

        Alert.alert(
            'Confirm Exit',
            'Exit to Exam Questions List without saving changes?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK',
                    onPress:() => this.props.navigation.navigate('ExamQuestionsList',
                        {
                            examId : examId
                        })}
            ],
            { cancelable: false }
        )

    }

    handleToggleEditMode=(editMode)=>{
        this.setState({
            editMode : editMode
        })
    }

    handleOnChangeTextWithBrackets=(textWithBrackets)=>{


        const variableList = BlanksUtil.textBoxedTextToVariableList(BlanksUtil.textToTextBoxedText(textWithBrackets))
        const data = {
            textWithBrackets : textWithBrackets,
            variableList  :variableList

        }
        console.log("Question :   onChangeQuestionText "  );
        const newQuestionData =  {...this.state.question,...data}

        console.log("Question data after textWithBlanks change : ")
        this.setState({
            question : newQuestionData
        },()=>console.log(this.state))




    }
    render(){


        console.log("FillInTheBlanksQuestionWidget : rendered")

        return <ScrollView style ={{padding : 11}}>

            <EditModeToggleNavBar
                initialSwitchState={this.state.editMode}
                onToggle={this.handleToggleEditMode}
            />


            <EditableQuestionContainer

                editMode                =   {this.state.editMode}


                onChangeQuestionText    =   {this.handleQuestionHeaderChange}

                title                   =   {this.state.question.title}
                points                  =   {this.state.question.points}
                description             =   {this.state.question.description}
            />

            <AnswerContainer>
                <FormLabel >Enter the text below for fill in the banks</FormLabel>


                <BlanksQuestionContainer
                    blanksQuestionText={this.state.question.textWithBrackets}
                    editMode = {!!this.state.editMode}
                    onChangeText={this.handleChangeBlanksText}
                    onChangeTextWithBrackets = {this.handleOnChangeTextWithBrackets}
                />

            </AnswerContainer>





            {/*<QuestionNavigationBar*/}
                {/*style={questionNavigationBarStyle}/>*/}

            {!!this.state.editMode  &&
            <EditableContainerUpdateNavBar
                onUpdateSelected={ this.handleOnUpdateSelected}
                onCancelSelected={ this.handleOnCancelSelected}
            />}


        </ScrollView>
    }
}
