import QuestionHeader from "../../elements/QuestionHeader";
import {View} from "react-native";
import {Text} from "react-native-elements";
import React, {Component} from "react";
import QuestionParagraph from "../../elements/QuestionParagraph";
import BlanksContainer from "../../components/BlanksContainer";

export default class FillInTheBlanks extends Component{
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

        return <View>
            <QuestionHeader questionIndex={questionIndex} points={questionPoints}/>
            <QuestionParagraph questionText={questionText}/>
            <BlanksContainer/>
        </View>

    }
}


