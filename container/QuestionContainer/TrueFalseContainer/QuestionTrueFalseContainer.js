import React from "react";
import {Text} from "react-native-elements";
import {View} from "react-native";

export default class QuestionTrueFalseContainer extends React.Component{
    static navigationOptions={
        title : "True False Question"
    }
    constructor(props){
        super(props)

    }

    componentDidMount(){
        console.log("QuestionTrueFalseContainer : Mounted");
    }


    render(){


        return <View>
            <Text>True or False</Text>
        </View>


    }
}
