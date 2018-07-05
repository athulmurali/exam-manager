import React, {Component} from 'react'
import {View} from 'react-native'
import {Text} from 'react-native-elements'
import RadioButtonList from "./RadioButtonList";
import QuestionHeader from "../container/QuestionHeader/QuestionHeader";

const HOST_URL = "https://neu-course-manager.herokuapp.com"

class MCQ extends Component {

    static navigationOptions = {title: 'MCQ'}
    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1,
            lessonId :1,
            topicId: 1
        }
    }
    componentDidMount() {
        const {navigation}  = this.props;
        console.log("MCQ Mounted")

    }




    render() {
        const questionIndex = 1
        const questionText =
            "The question is really random. Please select an answer and you will be given marks on random"
        console.log("");

        return(
            <View style={{padding: 15}}>

                <QuestionHeader questionIndex ={questionIndex} points = {100}/>
                <Text h4 style={{padding: 15}}>{questionText}</Text>
                <RadioButtonList style={{padding: 15}}/>

            </View>
        )
    }
}
export default MCQ
