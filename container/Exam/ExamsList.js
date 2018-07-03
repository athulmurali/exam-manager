import Exam from "../../elements/Exam";
import React from "react";
import {Alert, View} from "react-native";
import {Button} from "react-native";
import {Text} from "react-native-elements";
import ExamService from "../../services/ExamService";



const examServiceObj = ExamService.instance
export default class ExamsList extends React.Component{
    static navigationOptions={
        title : "Exam  List"
    }
    constructor(props)
    {
        super(props)
        this.state={
            examsList : [],
            topicId : -1,

        }
    }


    redirectToEditExam=()=> {

        this.props.navigation.navigate("AddQuestionWidget");
    }


    redirectToQuestionsList=()=>{
        console.log("ExamsList ->  ExamsQuestionsList");
        console.log(this.props.navigation);
        this.props.navigation.navigate("ExamQuestionsList",{
            topicId : this.props.navigation.getParam("topicId", -1),
            examId : this.props.navigation.getParam("examId", -1)
        });
    }

    deleteById=(id)=>{

        examServiceObj.deleteExam(id).then((res)=>{

            console.log("Successfully deleted exam id : "+id)
            console.log(res)
            this.fetchAllExams();
        })

    }
    fetchAllExams=()=>{

        examServiceObj.findExamsByTopicId(this.props.navigation.getParam("topicId", -1)).
        then((res=>this.setState({
            examsList : res
        }) ))

    }
    handlePress=(question,id)=>{
        console.log("Exam  List Press....")


        this.redirectToQuestionsList()


        this.props.navigation.navigate("ExamQuestionsList",{
            examId :this.state.examId,
            topicId: this.state.topicId
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

    componentDidMount(){
        console.log("ExamsList : Mounted")
        this.fetchAllExams();
    }
    render(){
        return<View>
            <Text h4>Help</Text>
            {console.log("Topic id in exams list : " + this.props.navigation.getParam("topicId",-100))}

            <Text >Long Press to Delete</Text>
            <Text >Press to navigate to that question</Text>

            <Exam onPress={this.handlePress}
                  onLongPress={this.handleLongPress}
                  examsList ={this.state.examsList} />

            <Button title ="Add Exam"
                    onPress={()=>this.redirectToEditExam()}/>


        </View>


    }
}
