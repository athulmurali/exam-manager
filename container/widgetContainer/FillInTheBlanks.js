import QuestionHeader from "../../elements/QuestionHeader";
import React from "react";
import {View} from "react-native";
import {Text} from "react-native-elements";

class FillInFillInTheBlanks extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("FillInFillInTheBlanks : Mounted");
    }
    render(){
        return <View>
            <QuestionHeader/>
            <Text>
                Fill in the blanks text
            </Text>
        </View>

    }
}
