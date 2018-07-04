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
            updated : false

        }
    }

    componentDidMount(){
        console.log("ExamsList : Mounted")

        this.setState({
            topicId : this.props.navigation.getParam("topicId",-1)
        },this.fetchAllExams)
    }

    fetchAllExams=()=>{

        examServiceObj.findExamsByTopicId(this.state.topicId).
        then(res=>this.setState({examsList : res}, this.setUpdatedState(true)) )

    }

    setUpdatedState=(val)=>{
        this.setState({
            updated : val
        })
 }

    redirectToEditExam=()=> {
        this.setUpdatedState(false)
        console.log("redirectToEditExam");
        console.log("topicID : " + this.props.navigation.getParam("topicId",-1));
        this.props.navigation.navigate("AddExamWidget",{
            topicId : this.state.topicId,
            examId : 2
        }
        );
    }

    redirectToQuestionsList=(exam, id)=>{
        console.log("ExamsList ->  ExamsQuestionsList");
        console.log("sending examId : " + id)
        console.log(this.props.navigation.state.params);
        this.props.navigation.navigate("ExamQuestionsList",{examId : id});
    }

    deleteById=(id,callback)=>{

        // examServiceObj.deleteExam(id).then((res)=> {
        //
        //         console.log("Successfully deleted exam id : " + id)
        //         console.log(res)
        //         callback();
        //
        //     }
        // )


        console.log("ExamList : deleteById " )

        examServiceObj.deleteExam(id).then((res)=>{

            console.log("Successfully deleted assignment id : "+id)
            console.log(res)
            this.fetchAllExams();
        })


}

    handlePress=(exam,id)=>{
        console.log("Exam  List Press. id ..." + id)
        this.redirectToQuestionsList(exam,id)
    }

    handleLongPress=(id)=>{
        console.log("Exam Questions List Long Press...."+id)
        Alert.alert(
            'Confirm Delete',
            'Delete this exam?',
            [
                {text: 'Cancel'
                    , style: 'cancel'},
                {text: 'OK', onPress:() =>
                    {
                        this.deleteById(id,this.fetchAllExams)

                    }},
            ],
            { cancelable: false }
        )
    }


    render(){
        console.log("Status updated :" + this.state.updated)
        if (!this.state.updated) {
                console.log("false *************************")
                this.fetchAllExams();
                }

        return<View>
            <Text h4>Help</Text>
            {console.log("Topic id in exams list : " + this.props.navigation.getParam("topicId",-100))}

            <Text >Long Press to Delete</Text>
            <Text >Press to navigate to that question</Text>

            <Exam onPress={this.handlePress}
                  onLongPress={this.handleLongPress}
                  examsList ={this.state.examsList} />

            <Button title ="Add Exam"
                    onPress={()=> {
                        this.redirectToEditExam()
                    }}/>


        </View>


    }
}
