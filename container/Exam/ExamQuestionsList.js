import Exam from "../../elements/Exam";
import React from "react";
import {Alert, ScrollView, View} from "react-native";
import {Button} from "react-native";
import {Text} from "react-native-elements";
import EssayQuestionWidget from "../widgetContainer/EssayQuestionWidget";
import QuestionService from "../../services/QuestionService";

const FILL = "FillInTheBlanksQuestionWidget"
const ESSAY= "EssayQuestionWidget"
const MCQ= "MultipleChoiceQuestionWidget"
const TF=  "TrueOrFalseQuestionWidget"


const  questionService = QuestionService.instance;

const questions = [
    {
        title: 'Question 1',
        subtitle: 'Multiple choice',
        icon: 'list',
        type :"MCQ",

        id : 1

    },
    {	title: 'Question 2',
        subtitle: 'Fill-in the blanks',
        icon: 'code',
        type :"BLANKS",
        id: 2

    },
    {	title: 'Question 3', subtitle: 'True or false',
        icon: 'check',
        type :"TF",

        id :3},
    {	title: 'Question 4', subtitle: 'Essay',
        icon: 'subject',
        type :"ESSAY",

        id :4

    }

        ]





export default class ExamQuestionsList extends React.Component{
    static navigationOptions={
        title : "Exam Questions List"
    }

    redirectByType=(type,question)=>{



        console.warn("selected question:")
        console.warn(question)
        switch (type){


            case "BLANKS":
                this.props.navigation.navigate(FILL,{
                    question : question,
                    examId : this.state.examId

                })
                break;
            case "ESSAY":
                this.props.navigation.navigate(ESSAY,{
                    question : question,
                    examId : this.state.examId


                })
                break;

            case "MCQ":
                this.props.navigation.navigate(MCQ,{
                    question : question,
                    examId : this.state.examId


                })
                break;

            case "TF":
                this.props.navigation.navigate(TF,{
                    question : question,
                    examId : this.state.examId


                })
                break;

            default:
                // this.props.navigation.navigate(this.)
                break;

        }
    }


    componentDidMount(){
        console.log("Exam Questions List : Mounted ");
        console.warn("Printing exam Questions list nav params")
        console.warn(this.props.navigation.state.params )
        this.fetchAllQuestionsByExamId();
    }


    componentWillReceiveProps(newProps){
        console.warn("***********************")
        console.log("new props")
        console.log(newProps)
        this.fetchAllQuestionsByExamId()
    }
    constructor(props)
    {
        super(props)



        this.state={
            questionsList : [],
            examId : this.props.navigation.getParam("examId",-1)
        }

        this.fetchAllQuestionsByExamId()

    }


    fetchAllQuestionsByExamId=()=>{

        questionService.findQuestionsByExamId(this.state.examId).then(res=>{

            console.log("ExamQuestionsList : Fetching  Questions for examId : " + this.state.examId);
            this.setState({
                questionsList :res
            },()=>console.log(this.state.questionsList))
        });
    }

    redirectToEditAssignment=()=> {
    console.log("AddQuestionWidget : ");
    console.log(this.state.examId);

        this.props.navigation.navigate("AddQuestionWidget",
            {
                examId :this.state.examId,
             })
    }



    deleteById=(id)=>{
        console.log("ExamnQuestionList:  deleting id : "+ id)


        questionService.deleteQuestion(id).then((res)=>{
            let newList = this.state.questionsList.filter((question)=>{
                console.log( question.id != id)
                return question.id != id
            })
            console.log("newList...........")
            console.log(newList)
            this.setState({
                questionsList : newList
            })

        })

}

    handlePress=(question,id)=>{
        console.log("Exam Questions List Press....")

        this.redirectByType(question.type, question)

        // this.props.navigation.navigate("AddQuestionWidget")
    }

    handleLongPress=(id)=>{
        console.log("Exam Questions List Long Press...."+id)
        Alert.alert(
            'Confirm Delete',
            'Delete this exam?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK', onPress:() => this.deleteById(id)},
            ],
            { cancelable: false }
        )
    }

    render(){
        console.log(this.props.navigation.getParam("examId"), -1)

        return<ScrollView>
            <Text h4>Help</Text>

            <Text >Long Press to Delete</Text>
            <Text >Press to navigate to that question</Text>

            <Exam onPress={this.handlePress} onLongPress={this.handleLongPress}
            examsList ={this.state.questionsList} />

            <Button title ="Add question"
                    onPress={()=>this.redirectToEditAssignment()}
            />


        </ScrollView>


    }




}
