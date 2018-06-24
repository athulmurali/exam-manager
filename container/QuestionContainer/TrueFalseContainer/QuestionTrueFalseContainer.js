import React from "react";
import {Text} from "react-native-elements";
import {TextInput, View} from "react-native";
import {essayTextBox, questionEditBarStyle} from "../../../styles/essayQuestionWidget";
import QuestionHeader from "../../../elements/QuestionHeader";
import AnswerContainer from "../../../components/AnswerContainer";
import QuestionParagraph from "../../../elements/QuestionParagraph";
import QuestionNavigationBar from "../../QuestionNavigationBar";
import QuestionEditBar from "../../QuestionEditBar";
import {questionNavigationBarStyle} from "../../../styles/QuestionCommonStyle";

export default class QuestionTrueFalseContainer extends React.Component{
    static navigationOptions={
        title : "True False Question"
    }

    constructor(props){
        super(props)

    }

    componentDidMount(){
        console.log("QuestionTrueFalseContainer : Mounted");
    }
    componentWillUnmount(){
        console.log("QuestionTrueFalseContainer : Unmounted");
    }






    render(){
        const questionText = "Longest paragraph in the world is not really easy to type. " +
            "That's why I keep the descriptions short"
        const questionIndex = 1
        const questionPoints = 100

        return <View
            style ={{padding : 14}}>
            <QuestionHeader questionIndex ={questionIndex}   questionName={"sasas"} points ={questionPoints}/>
            <QuestionParagraph questionText = {questionText}  style={{padding :20}}/>
            <AnswerContainer style={{padding :20}}>



            </AnswerContainer>
            <QuestionNavigationBar
                style={questionNavigationBarStyle}/>
            <QuestionEditBar
                style ={questionEditBarStyle}/>

        </View>
    }
}
