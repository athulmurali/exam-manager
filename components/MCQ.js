import React, {Component} from 'react'
import {View} from 'react-native'
import {Text} from 'react-native-elements'
import Button from "react-native-elements/src/buttons/Button";
import RadioButtonList from "./RadioButtonList";
import QuestionHeader from "../elements/QuestionHeader";
import QuestionNavigationBar from "../container/QuestionNavigationBar";

import {questionEditBarStyle} from '../styles/essayQuestionWidget'

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

        return(<View style={{padding: 15}}>

            {/*<View style={{flexDirection: "row", justifyContent: 'space-between',*/}
                {/*alignItems: 'center',padding :15}}>*/}
                {/*<FormLabel>Question : {questionIndex}</FormLabel>*/}
                {/*<Badge*/}
                    {/*value={100 +"pts"}*/}
                    {/*textStyle={{ color: 'white',  fontSize: 20}}*/}
                    {/*containerStyle={{ backgroundColor: 'red'}} />*/}
            {/*</View>*/}
            <QuestionHeader questionIndex ={questionIndex} points = {100}/>





                <Text h4 style={{padding: 15}}>{questionText}</Text>





                <RadioButtonList style={{padding: 15}}/>

                <QuestionNavigationBar
                    style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}/>

                {/*Add Question button*/}

                <View style = {questionEditBarStyle} >

                    <Button


                        title="Add Question"
                        disabled={false}
                        // loading
                        // loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "#007900",
                            width: 150,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 10
                        }}
                        containerStyle={{ marginTop: 35 }}
                    />


                </View>



            </View>


        )
    }
}
export default MCQ
