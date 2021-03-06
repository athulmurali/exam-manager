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

        const selectedQuestion = this.props.navigation.getParam("question", false);
        if (selectedQuestion)
        {
            this.setState({question : {...selectedQuestion} })
        }
    }
    componentWillUnmount(){
        console.log("QuestionTrueFalseWidget : Unmounted");

        const selectedQuestion = this.props.navigation.getParam("question", false);
        if (selectedQuestion)
        {
            this.setState({question : {...selectedQuestion} })
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
                questionService.createTrueOrFalseExamQuestion(examId,question).then(res=>{
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

        console.log("QuestionTrueFalseWidget : rendered")

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
                        checked={!!this.state.question.answer}
                        containerStyle = {styles.checkBoxContainer}
                        onPress={()=>this.setState({trueSelected : true})}
                    />
                    <CheckBox
                        left
                        title='False'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={!this.state.question.answer}
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
