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

            console.log("EssayQuestion : nav props");
            console.warn("In essay screen , exam ID "+ this.props.navigation.getParam("examId",-1000000 ))


            this.state={
            editMode :  true,

            question : {
                title : "",
                points : "0",
                description :""
            }
        }
    }



    handleQuestionHeaderChange=(data)=>{
        console.log("Question :   onChangeQuestionText "  );
        this.setState({
            question : data
        },()=>console.log(this.state))


    }

    handleOnUpdateSelected=()=>{
        const questionId = this.props.navigation.getParam("questionId",  -1000);
        const examId =  this.props.navigation.getParam("examId", -10000);


        if(  questionId > -1 )
            console.log("Essay question : exists")

        else
        {

            questionService.createEssayExamQuestion
            (examId,  this.state.question)
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
                onChangeText={()=>console.log("hiiiii")} />
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
