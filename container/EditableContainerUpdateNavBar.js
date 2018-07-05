import {Component} from "react";
import {View} from "react-native";
import {Button, Text} from "react-native-elements";
import React from "react";
import {questionEditBarStyle} from "../styles/essayQuestionWidget";

export default  class EditableContainerUpdateNavBar extends Component{

    constructor(props){
        super(props)
        this.handleOnPressCancel = this.handleOnPressCancel.bind(this)
        this.handleOnPressUpdate = this.handleOnPressUpdate.bind(this)

    }

    componenetDidMount(){

        console.log("EditableContainerUpdateNavBar : Mounted");
    }

    handleOnPressCancel(){
        console.log("EditableContainerUpdateNavBar : Cancel Pressed")
        this.props.onCancelSelected()



    }

    handleOnPressUpdate=()=>{
        console.log("EditableContainerUpdateNavBar : Update Pressed")
        this.props.onUpdateSelected()


    }


    render(){
        return<View style={questionEditBarStyle}>

            <Button
                title="Cancel"
                disabled={false}
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
                onPress={this.handleOnPressCancel}
            />
            <Button
                title={"Submit"}
                disabled={false}
                onPress={this.handleOnPressUpdate}

                // loading
                // loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "#006f00",
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
