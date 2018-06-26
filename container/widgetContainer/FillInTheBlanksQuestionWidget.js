import React from "react";
import {CheckBox} from "react-native-elements";
import {ScrollView, StyleSheet} from "react-native";
import {questionEditBarStyle} from "../../styles/essayQuestionWidget";
import AnswerContainer from "../../components/AnswerContainer";
import QuestionNavigationBar from "../QuestionNavigationBar";
import QuestionEditBar from "../QuestionEditBar";
import {questionNavigationBarStyle} from "../../styles/QuestionCommonStyle";
import AddQuestionWidget from "../widgetContainer/AddQuestionWidget";
import EditableQuestionContainer from "../EditableQuestionContainer";
import EditModeToggleNavBar from "../EditModeToggleNavBar";
import BlanksQuestionContainer from "../BlanksQuestionContainer/BlanksQuestionContainer";
import SubmitBar from "../SubmitBar";

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
            editMode :true
        }

    }

    componentDidMount(){
        console.log("FillInTheBlanksQuestionWidget : Mounted");
    }
    componentWillUnmount(){
        console.log("FillInTheBlanksQuestionWidget : Unmounted");
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
                editMode = {this.state.editMode}/>

            {!!this.state.editMode &&
            <AnswerContainer>

                <BlanksQuestionContainer blanksQuestionText={"holasdf"}/>

                <SubmitBar/>
            </AnswerContainer>
            }


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
