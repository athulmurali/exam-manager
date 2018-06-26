import React from "react";
import {CheckBox, FormLabel, Text} from "react-native-elements";
import {ScrollView, StyleSheet} from "react-native";
import {questionEditBarStyle} from "../../styles/essayQuestionWidget";
import AnswerContainer from "../../components/AnswerContainer";
import QuestionNavigationBar from "../QuestionNavigationBar";
import QuestionEditBar from "../QuestionEditBar";
import {questionNavigationBarStyle} from "../../styles/QuestionCommonStyle";
import AddQuestionWidget from "../widgetContainer/AddQuestionWidget";
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import EditableList from "../../components/EditableList";

const styles = StyleSheet.create({
    checkBoxContainer : {
        backgroundColor : 'transparent'
    },
    trueFalseSelectionContainerStyle :{
        padding :20
    }

});



export default class MultipleChoiceQuestionWidget extends React.Component{
    static navigationOptions={
        title : "Multiple Choice"
    }

    constructor(props){
        super(props)
        this.state={
            answer : true,
            editMode :true
        }

    }

    componentDidMount(){
        console.log("QuestionTrueFalseContainer : Mounted");
    }
    componentWillUnmount(){
        console.log("QuestionTrueFalseContainer : Unmounted");
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

        console.log("QuestionTrueFalseContainer : rendered")

        return <ScrollView style ={{padding : 11}}>


            <EditModeToggleNavBar
                initialSwitchState={this.state.editMode}
                onToggle={this.handleToggleEditMode}
            />

            <EditableQuestionContainer
                editMode = {this.state.editMode}/>


            <FormLabel>Select the correct answer</FormLabel>

            <EditableList/>

            {!!this.state.editMode && <FormLabel>Long Press to delete a option</FormLabel> }

            <QuestionNavigationBar
                style={questionNavigationBarStyle}/>
            <QuestionEditBar
                style ={questionEditBarStyle}
                onSelectAddQuestion ={()=>{
                    this.props
                        .navigation
                        .navigate('AddQuestionWidget')
                }}/>
        </ScrollView>
    }
}
