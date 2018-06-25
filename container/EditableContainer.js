import React from "react";
import {Text} from "react-native-elements";
import {StyleSheet, View} from "react-native";
import EditableHeader from "./QuestionHeader/EditableHeader";
import EditModeToggleNavBar from "./EditModeToggleNavBar";
import EditableQuestionHeaderContainer from "./QuestionHeader/EditableQuestionHeaderContainer";

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

            <Text h3>
                Editable Container
            </Text>
            <EditModeToggleNavBar initialSwitchState={this.state.editMode}
                                  onToggle={this.handleToggle}
                                  style={styles.editToggleBarStyle}
            />
            <EditableQuestionHeaderContainer editMode={this.state.editMode}/>
        </View>


    }


}

