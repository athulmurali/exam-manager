import React from "react";
import {View} from "react-native";
import {Text} from "react-native-elements";
import FormLabel from "react-native-elements/src/form/FormLabel";
import Badge from "react-native-elements/src/badge/badge";

class QuestionHeader extends  React.Component{

    componentDidMount()
    {
        console.log("\n QuestionHeader mounted");
    }
    constructor(props){
        super(props)
        const questionIndex = 1
            "The question is really random. Please select an answer and you will be given marks on random"

    }

    render(){
        return <View style={this.props.style || {flexDirection: "row", justifyContent: 'space-between',
                alignItems: 'center',padding :15}}>
                <FormLabel>Question : {this.props.questionIndex}</FormLabel>
                <Text> {this.props.questionName}</Text>

            <Badge
                    value={this.props.points +"pts"}
                    textStyle={{ color: 'white',  fontSize: 20}}
                    containerStyle={{ backgroundColor: 'red'}} />
            </View>

    }


}
export  default  QuestionHeader
