import React from "react";
import {Text} from "react-native-elements";
import {Switch, View} from "react-native";

export default class EditModeToggleNavBar extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){

        console.log("EditModeToggleNavBar : mounted")

    }
    render(){
        return <View style={this.props.style} >
            <Text>
                Preview
            </Text>

            <Switch
                onValueChange = {this.props.onToggle}
                value = {this.props.initialSwitchState}/>
            <Text>
                Edit
            </Text>


        </View>
    }
}
