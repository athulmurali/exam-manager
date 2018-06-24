import React from "react";
import {View} from "react-native";
import {Button, Text} from "react-native-elements";

class QuestionNavigationBar extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("QuestionNavigationBar :mounted!");
    }
    render(){
       return <View style={ this.props.style}>

    <Button
        title="Previous"
        disabled={true}
        // loading
        // loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
            backgroundColor: "#ff0000",
                width: 150,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 10
        }}
        containerStyle={{ marginTop: 35 }}
        />

        <Button
            title="Next"
            disabled={true}


            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
                backgroundColor: "#4c4cff",
                width: 150,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 10
            }}
            containerStyle={{ marginTop: 35 }}
        />
        </View>
    }
}
export default  QuestionNavigationBar
