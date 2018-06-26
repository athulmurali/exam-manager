import React from "react";
import {Text} from "react-native-elements";
import {StyleSheet, Switch, View} from "react-native";

const styles =StyleSheet.create({
    editToggleBarStyle : {flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}
    )

export default class EditModeToggleNavBar extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){

        console.log("EditModeToggleNavBar : mounted")

    }
    render(){
        return <View style={styles.editToggleBarStyle} >
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
