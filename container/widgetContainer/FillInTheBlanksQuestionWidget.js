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


        console.log("FillInTheBlanksWidget : nav props");
        console.warn("In FillInTheBlanksWidget screen , " +
            "exam ID "+ this.props.navigation.getParam("examId",-1000000 ))



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

        if(  questionId > -1 )
            console.log("Essay question : exists")

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
                    blanksQuestionText={"Test input for blanks"}
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
