import React from "react";
import {View} from "react-native";
import {Button, Text} from "react-native-elements";

class QuestionEditBar extends  React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("QuestionEditBar :mounted!");
    }

    render(){
        return <View style={this.props.style}>


            <Button
                title="Add Question"
                disabled={false}
                // loading
                // loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "#007900",
                    width: 150,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 10
                }}
                containerStyle={{ marginTop: 35 }}
                onPress={this.props.onSelectAddQuestion }
            />


        </View>
    }


}


export default  QuestionEditBar
