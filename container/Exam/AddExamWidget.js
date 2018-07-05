import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import React from "react";
import {ScrollView} from "react-native";
import EditableContainerUpdateNavBar from "../EditableContainerUpdateNavBar";
import ExamService from "../../services/ExamService";

export default  class AddExamWidget extends  React.Component{
    static navigationOptions = {
        title : "Add Exam Widget"
    }

    constructor(props){
        super(props)
        this.state ={

            editMode: true,
            topicId : -1,
            exam : {
                title : "",
                points : "0",
                description :""

        }


        }
    }


    saveAndExit=()=>{

        const exam = this.state.exam
        const examServiceObj =ExamService.instance;

        const topicId       = this.props.navigation.getParam("topicId", -1);
        const examId        = this.props.navigation.getParam("examId", -1);


        // if topic id exists :
        console.log("topicId :",topicId);
        console.log(this.props.navigation.getParam("examId", -1));
        console.log("examId :",examId);

        if(exam.id >= 0)
        {
            console.log(" New Exam : Deleting and creating ")
            examServiceObj.deleteExam(examId).then((res)=>{
                console.log("hi")
            });
            console.log("Exam deleted ")
            examServiceObj.createExam(this.state.topicId, exam).then(res=>{
                console.log(res)
            })

        }
        else{

            console.log("Creating new exam ")
            examServiceObj.createExam(this.state.topicId, exam).then(res=>{
                console.log(res)
            })
        }

        this.exitToPreviousScreen();

    }

    exitToPreviousScreen=()=>{
        this.props.navigation.navigate("ExamsList",{
            topicId : this.state.topicId
        })

    }


    handleOnUpdateSelected =()=>{
        console.log("Exam : Update selected")
        this.saveAndExit()
    }


    handleOnCancelSelected =()=>{
        console.log("Exam : Cancel selected")
        this.exitToPreviousScreen()

    }




    handleQuestionHeaderChange=(data)=>{
        console.log("Exam :   onChangeQuestionText "  );
        this.setState({
            exam : data
        },()=>console.log(this.state))


    }


    componentDidMount(){
        console.log("AddExamWidget : mounted");
        this.setState({
            topicId : this.props.navigation.getParam("topicId", -1)
        })
    }


    render(){

        return <ScrollView         style ={{padding : 14}}>

            <EditModeToggleNavBar
                initialSwitchState={this.state.editMode}
                onToggle={this.handleToggleEditMode}
            />


            <EditableQuestionContainer

                editMode                =   {this.state.editMode}


                onChangeQuestionText    =   {this.handleQuestionHeaderChange}

                title                   =   {this.state.exam.title}
                points                  =   {this.state.exam.points}
                description             =   {this.state.exam.description}
            />

            {!!this.state.editMode  &&
            <EditableContainerUpdateNavBar
                onUpdateSelected={ this.handleOnUpdateSelected}
                onCancelSelected={ this.handleOnCancelSelected}
            />}

        </ScrollView>

    }
}
