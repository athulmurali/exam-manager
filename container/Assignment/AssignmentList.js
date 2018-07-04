import Exam from "../../elements/Exam";
import React from "react";
import {Alert, Button, View} from "react-native";
import { Text} from "react-native-elements";
import EssayQuestionWidget from "../widgetContainer/EssayQuestionWidget";
import AssignmentService from "../../services/AssignmentService";

const FILL = "FillInTheBlanksQuestionWidget"
const ESSAY= "EssayQuestionWidget"
const MCQ= "MCQ"
const TF=  "QuestionTrueFalseContainer"


const assignmentServiceObj =AssignmentService.instance;
const questions = [
    {
        title: 'Question 1',
        subtitle: 'Assignment 1',
        icon: 'list',
        type :"MCQ",

        id : 1

    },
    {	title: 'Question 2',
        subtitle: 'Fill-in the blanks',
        icon: 'code',
        type :"FILL",
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


export default class AssignmentList extends React.Component{
    static navigationOptions={
        title : "Assignment List"
    }
    constructor(props)
    {
        super(props)
        this.state={
            questionsList : questions,
            assignmentList : [],
            topicId : 281
        }
    }


    componentDidMount(){
        console.log("AssignmentList Mounted")
        console.log("Printing nav props");
        console.log(this.props.navigation.state.params);

        this.setState({
            topicId : this.props.navigation.getParam("topicId",-1)
        },this.fetchAllAssignments);
    }

    deleteById=(id)=>{
        console.log("AssignmentList : deleteById " )

        assignmentServiceObj.deleteAssign(id).then((res)=>{

            console.log("Successfully deleted assignment id : "+id)
            console.log(res)
            this.fetchAllAssignments();
        })

    }



    fetchAllAssignments=()=>{
        console.log("AssignmentList : fetchAllAssignments")
        assignmentServiceObj.findAllAssignmentsByTopicId(this.state.topicId).
        then((res=>this.setState({
            assignmentList : res
        }) ))

    }
    redirectToEditAssignment=()=>{

        console.log("assdfdfin list");
        console.log(this.props.navigation.getParam("topicId", -1));
        this.props.navigation.navigate("Assignment",{
            topicId : this.props.navigation.getParam("topicId", -1)
        });

    }

    handlePress=(question,id)=>{
        console.log("Exam Questions List Press....")


        this.props.navigation.navigate("Assignment",{
            assignmentId : id,
            topicId : this.state.topicId
        })
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
        return<View>
            <Text h4>Help</Text>

            <Text >Long Press to Delete</Text>
            <Text >Press to navigate to that question</Text>

            <Exam onPress={this.handlePress} onLongPress={this.handleLongPress}
                  examsList ={this.state.assignmentList} />

            <Button title ="Add question"
                    onPress={()=>this.redirectToEditAssignment()}
            />

        </View>


    }
}
