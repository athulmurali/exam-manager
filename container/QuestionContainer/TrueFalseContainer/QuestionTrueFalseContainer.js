import React from "react";
import {CheckBox} from "react-native-elements";
import {ScrollView, StyleSheet} from "react-native";
import {questionEditBarStyle} from "../../../styles/essayQuestionWidget";
import AnswerContainer from "../../../components/AnswerContainer";
import QuestionNavigationBar from "../../QuestionNavigationBar";
import QuestionEditBar from "../../QuestionEditBar";
import {questionNavigationBarStyle} from "../../../styles/QuestionCommonStyle";
import AddQuestionWidget from "../../widgetContainer/AddQuestionWidget";
import EditableQuestionContainer from "../../EditableQuestionContainer";

const styles = StyleSheet.create({
    checkBoxContainer : {
        backgroundColor : 'transparent'
    }
});



export default class QuestionTrueFalseContainer extends React.Component{
    static navigationOptions={
        title : "True False Question"
    }

    constructor(props){
        super(props)
        this.state={
            answer : true
        }

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

        console.log("QuestionTrueFalseContainer : rendered")

        return <ScrollView
            style ={{padding : 14}}>
            <EditableQuestionContainer/>
            <CheckBox onPress={() => this.setState({answer: !this.state.answer})}
                      checked={this.state.answer} title='The answer is true'/>

            <AnswerContainer style={{padding :20}}>

                <CheckBox
                    left
                    title='True'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!!this.state.trueSelected}
                    containerStyle = {styles.checkBoxContainer}

                    onPress={()=>this.setState({
                        trueSelected : true
                    })}/>

                <CheckBox
                    left
                    title='False'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!this.state.trueSelected}
                    containerStyle = {styles.checkBoxContainer}
                    onPress={()=>this.setState({
                        trueSelected : false
                    })

                    }


                />

            </AnswerContainer>
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
