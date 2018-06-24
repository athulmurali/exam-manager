import {View} from "react-native";
import {Text} from "react-native-elements";
import React from "react";

export default  class BlanksContainer extends  React.Component{


    constructor(props)
    {
        super(props)

    }
    componentDidMount(){
        console.log("Blanks container")
    }
    render(){
        return <View>
            <Text h4>Blanks Container </Text>
        </View>
    }

}
