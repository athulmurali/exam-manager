import React from "react";
import {Text} from "react-native-elements";
import {StyleSheet, View} from "react-native";
import EditableHeader from "./QuestionHeader/EditableHeader";
import EditModeToggleNavBar from "./EditModeToggleNavBar";

const styles =StyleSheet.create({
editToggleBarStyle : {flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}

})

export default  class EditableContainer extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            editMode: true
        }
    }

     handleToggle=(st)=>{
        console.log(" Editable container: toggle" + st);

        this.setState({
            editMode :st
        })

    }


    componentDidMount(){
        console.log("EditableContainer : Mounted")
    }
    componentWillUnmount(){
        console.log("EditableContainer : Unmounted")

    }
    render(){


        return <View>


            <EditModeToggleNavBar initialSwitchState={this.state.editMode}
                                  onToggle={this.handleToggle}
                                  style={styles.editToggleBarStyle}
            />
            <Text h2>
                Editable Container
            </Text>

            { !!this.state.editMode?
                <EditableHeader/>:
                <Text>In Preview Mode</Text>}
        </View>


    }


}

