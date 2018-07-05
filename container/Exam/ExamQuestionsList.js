import Exam from "../../elements/Exam";
import React from "react";
import {Alert, View} from "react-native";
import {Button} from "react-native";
import {Text} from "react-native-elements";
import EssayQuestionWidget from "../widgetContainer/EssayQuestionWidget";
import QuestionService from "../../services/QuestionService";

const FILL = "FillInTheBlanksQuestionWidget"
const ESSAY= "EssayQuestionWidget"
const MCQ= "MCQ"
const TF=  "QuestionTrueFalseContainer"


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

    redirectByType=(type)=>{
        switch (type){


            case "BLANKS":
                this.props.navigation.navigate(FILL)
                break;
            case "ESSAY":
                this.props.navigation.navigate(ESSAY)
                break;

            case "MCQ":
                this.props.navigation.navigate(MCQ)
                break;

            case "TF":
                this.props.navigation.navigate(TF)
                break;

            default:
                // this.props.navigation.navigate(this.)
                break;

        }
    }


    componentDidMount(){
        console.log("Exam Questions List : Mounted ");
        this.fetchAllQuestionsByExamId();
    }

    constructor(props)
    {
        super(props)

        console.warn("Printing exam Questions list nav params")
        console.warn(this.props.navigation.state.params )

        this.state={
            questionsList : [],
            examId : this.props.navigation.getParam("examId",-1)
        }
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
            examId :this.state.examId
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

        this.redirectByType(question.type)

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

        return<View>
            <Text h4>Help</Text>

            <Text >Long Press to Delete</Text>
            <Text >Press to navigate to that question</Text>

            <Exam onPress={this.handlePress} onLongPress={this.handleLongPress}
            examsList ={this.state.questionsList} />

            <Button title ="Add question"
                    onPress={()=>this.redirectToEditAssignment()}
            />


        </View>


    }




}
