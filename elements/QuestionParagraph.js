import React from "react";
import {View} from "react-native";
import Text from "react-native-elements/src/text/Text";

class QuestionParagraph extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <View style={this.props.style}>
            <Text>
                {this.props.questionText}
            </Text>
        </View>

    }

}

export default QuestionParagraph
