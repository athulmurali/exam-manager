import QuestionHeader from "../../elements/QuestionHeader";
import {View} from "react-native";
import React, {Component} from "react";
import QuestionParagraph from "../../elements/QuestionParagraph";
import BlanksContainer from "../BlanksQuestionContainer/BlanksParagraphView";
import {Button} from "react-native-elements";
import SubmitBar from "../SubmitBar";

export default class TrueFalseWidget extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("FillInFillInTheBlanks : Mounted");
    }
    render(){
        const questionText = "Longest paragraph in the world is not really easy to type. " +
            "That's why I keep the descriptions short"
        const questionIndex = 1
        const questionPoints = 50

        return <View style={{padding :15}}>
            <QuestionHeader questionIndex={questionIndex} points={questionPoints}/>
            <QuestionParagraph questionText={questionText}/>
            <SubmitBar/>
        </View>

    }
}


