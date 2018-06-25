import QuestionHeader from "../QuestionHeader/QuestionHeader";
import {View} from "react-native";
import React, {Component} from "react";
import QuestionParagraph from "../../elements/QuestionParagraph";
import SubmitBar from "../SubmitBar";
import BlanksQuestionContainer from "../BlanksQuestionContainer/BlanksQuestionContainer";

export default class FillInTheBlanks extends Component{
    static navigationOptions ={
        title : 'Fill in the blanks'
    }
    constructor(props){
        super(props)
        this.state={
            questionText : "Longest paragraph in the world is not really easy to type. " +
                "That's why I keep the descriptions short",
            questionIndex : 1,
            questionPoints : 50,
            blanksQuestionText :  "Checking if blanks are rendered. First blank is here[one = 1]" +
                "Second is here [two=2].Third is here [3=three]"

        }
    }

    componentDidMount(){
        console.log("FillInFillInTheBlanks : Mounted");
    }

    render(){


        return <View style={{padding :15}}>
            <QuestionHeader questionIndex={this.state.questionIndex} points={this.state.questionPoints}/>
            <QuestionParagraph questionText={this.state.questionText}/>
            <BlanksQuestionContainer blanksQuestionText={this.state.blanksQuestionText}/>

            <SubmitBar/>
        </View>

    }
}


