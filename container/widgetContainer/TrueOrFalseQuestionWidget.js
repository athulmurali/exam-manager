import React from "react";
import {CheckBox, Text} from "react-native-elements";
import {Alert, ScrollView, StyleSheet} from "react-native";
import AnswerContainer from "../../components/AnswerContainer";
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";
import QuestionService from "../../services/QuestionService";

const styles = StyleSheet.create({
    checkBoxContainer : {
        backgroundColor : 'transparent'
    },
    trueFalseSelectionContainerStyle :{
                     padding :20
                }

});

const questionService = QuestionService.instance;

export default class TrueOrFalseQuestionWidget extends React.Component{
    static navigationOptions={
        title : "True False Question"
    }

    constructor(props){
        super(props)



        this.state={
            answer : true,
            editMode :true,
            question : {
                title : "",
                points : "0",
                description :"",
                answer : false
            }
        }

    }

    componentDidMount(){
        console.log("QuestionTrueFalseWidget : Mounted");
    }
    componentWillUnmount(){
        console.log("QuestionTrueFalseWidget : Unmounted");
    }

    handleToggleEditMode=(editMode)=>{
        this.setState({
            editMode : editMode
        })
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




        console.log("On uodate select.....")

        if(  questionId > -1 )
            console.log("TrueFALse  question : exists")

        else
        {

            questionService.createTrueOrFalseExamQuestion(examId,  this.state.question)
                .then(res=>{
                    console.log("Saved TrueFALse question successfully")
                    console.log(res);

                    Alert.alert("Saved successfully!")


                    this.props.navigation
                        .navigate('ExamQuestionsList',{
                            examId : examId
                        })
                })

        }



    }


    render(){
        const questionText = "Longest paragraph in the world is not really easy to type. " +
            "That's why I keep the descriptions short"
        const questionIndex = 1
        const questionPoints = 100

        console.log("QuestionTrueFalseContainer : rendered")

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
                    <CheckBox
                    onPress={() =>{
                        let newQuestionState = {...this.state.question};
                        newQuestionState.answer = !newQuestionState.answer

                        this.setState({question : newQuestionState},()=>{
                            console.log(this.state)
                        })
                    }}
                    checked={this.state.question.answer} title='The answer is true'/>}

                    {!this.state.editMode &&
                <AnswerContainer style={styles.trueFalseSelectionContainerStyle}>
                    <Text>Please Select your choice</Text>

                    <CheckBox
                        left
                        title='True'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={!!this.state.trueSelected}
                        containerStyle = {styles.checkBoxContainer}
                        onPress={()=>this.setState({trueSelected : true})}
                    />
                    <CheckBox
                        left
                        title='False'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={!this.state.trueSelected}
                        containerStyle = {styles.checkBoxContainer}
                        onPress={()=>this.setState({
                            trueSelected : false
                        })

                        }


                    />
                </AnswerContainer>}
                {/*<QuestionNavigationBar*/}
                    {/*style={questionNavigationBarStyle}/>*/}
                {/*<QuestionEditBar*/}
                    {/*style ={questionEditBarStyle}*/}
                    {/*onSelectAddQuestion ={()=>{*/}
            {/*this.props*/}
                {/*.navigation*/}
                {/*.navigate('AddQuestionWidget')*/}
        {/*}}/>*/}

            <EditableContainerUpdateNavBar
                onUpdateSelected={ this.handleOnUpdateSelected}
                onCancelSelected={ this.handleOnCancelSelected}
            />
                </ScrollView>
    }
}
