import React from "react";
import {Text} from "react-native-elements";
import { View} from "react-native";
import EditableHeader from "./EditableHeader";




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
        const editMode= !!!this.props.editMode;

        return <View>
            <Text h2>
                Editable Container
            </Text>

            { !!editMode?
                <EditableHeader/>:
                <Text>In Preview Mode</Text>}
        </View>


    }


}

