import React from "react";
import {Text} from "react-native-elements";
import {View} from "react-native";

class AnswerContainer extends React.Component{

    constructor(props)
    {
        super(props)

    }
    componentDidMount(){
        console.log(" AnswerContainer  :Component Mounted ");
    }
    render(){
        return <View style ={this.props.style}>
                {this.props.children}
            </View>
    }

}

export default  AnswerContainer
