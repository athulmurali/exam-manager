import React from "react";
import {Alert, ScrollView, StyleSheet} from "react-native";
import AnswerContainer from "../../components/AnswerContainer";
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import BlanksQuestionContainer from "../BlanksQuestionContainer/BlanksQuestionContainer";
import SubmitBar from "../SubmitBar";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";

const styles = StyleSheet.create({

});



export default class FillInTheBlanksQuestionWidget extends React.Component{
    static navigationOptions={
        title : "Fill in the blanks"
    }

    constructor(props){
        super(props)
        this.state={
            answer : true,
            editMode :true,

            question : {
                title : "",
                points : "0",
                description :""
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
            {!!this.state.editMode &&
            <AnswerContainer>

                <BlanksQuestionContainer blanksQuestionText={"holasdf"}/>

            </AnswerContainer>
            }




            {/*<QuestionNavigationBar*/}
                {/*style={questionNavigationBarStyle}/>*/}



        </ScrollView>
    }
}
