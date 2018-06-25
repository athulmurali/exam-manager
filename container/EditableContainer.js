import React from "react";
import {Text} from "react-native-elements";
import {View} from "react-native";

export default  class EditableContainer extends React.Component{

    constructor(props)
    {
        super(props)
    }

    componentDidMount(){
        console.log("EditableContainer : Mounted")
    }
    componentWillUnmount(){
        console.log("EditableContainer : Unmounted")

    }
    render(){

        return <View>
            <Text h2>
                Editable Container
            </Text>
        </View>


    }
}
