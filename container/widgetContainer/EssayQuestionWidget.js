import React from "react";
import {Alert, ScrollView} from "react-native";
import AnswerContainer from "../../components/AnswerContainer";
import EssayTextInput from '../../elements/EssayTextInput'
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import FormLabel from "react-native-elements/src/form/FormLabel";
import QuestionService from "../../services/QuestionService";

const questionService = QuestionService.instance
class  EssayQuestionWidget extends React.Component{
    static  navigationOptions ={
        title : "EssayQuestion",
    }
    constructor(props){


        super(props)


            this.state={
            editMode :  true,

            question : {
                title : "",
                points : "0",
                description :""
            }
        }
    }


    handleToggleEditMode=(editMode)=>{
        this.setState({
            editMode : editMode
        })
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


        const question = this.state.question



        if(!!question["id"])
        {
            console.log("Essay question : exists")
            console.log(question)


            questionService.deleteQuestion(question.id).
            then(res=>{
                console.log("question deleted by ID : " + question.id)


                delete question.id
                questionService.createEssayExamQuestion(examId,question).then(res=>{
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

            questionService.createEssayExamQuestion
            (examId,  question)
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

    componentDidMount(){

        const selectedQuestion = this.props.navigation.getParam("question", false);
        if (selectedQuestion)
        {
            this.setState({question : {...selectedQuestion} })
        }
        console.log("Essay question : mounted")
    }
    render(){
        const questionText = "Longest paragraph in the world is not really easy to type. " +
            "That's why I keep the descriptions short"
        const questionIndex = 1
        const questionPoints = 100

        return <ScrollView         style ={{padding : 14}}>

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

            <FormLabel> Submit your answer below</FormLabel>

            <AnswerContainer style={{padding :20}}>
                <EssayTextInput
                onChangeText={()=>console.log("Sorry boss !Not storing student answer")} />
            </AnswerContainer>


            {!!this.state.editMode  &&
            <EditableContainerUpdateNavBar
                onUpdateSelected={ this.handleOnUpdateSelected}
                onCancelSelected={ this.handleOnCancelSelected}
            />}
            {/*<QuestionEditBar*/}
                {/*style ={questionEditBarStyle}/>*/}


            {/*<QuestionNavigationBar*/}
                {/*style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}*/}
                {/*onUp*/}
            {/*/>*/}

        </ScrollView>
    }

}
export default EssayQuestionWidget
