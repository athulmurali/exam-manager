import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";
import FormLabel from "react-native-elements/src/form/FormLabel";
import Badge from "react-native-elements/src/badge/badge";

const styles= StyleSheet.create({
    questionHeaderViewStyle:{flexDirection: "row", justifyContent: 'space-between',
    alignItems: 'center'}
})
class QuestionHeader extends  React.Component{

    componentDidMount()
    {
        console.log("\n QuestionHeader mounted");
    }
    constructor(props){
        super(props)


    }

    render(){
        return <View style={this.props.style || styles.questionHeaderViewStyle}>
                <FormLabel>Question : {this.props.questionIndex}</FormLabel>
                <Text> {this.props.titleText}</Text>

            <Badge
                    value={this.props.points +"pts"}
                    textStyle={{ color: 'white',  fontSize: 20}}
                    containerStyle={{ backgroundColor: 'red'}} />
            </View>

    }


}
export  default  QuestionHeader
