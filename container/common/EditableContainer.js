import React from "react";
import {View} from "react-native";
import {Text} from "react-native-elements";

export default  class  EditableContainer extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        console.log("EditableContainer : mounted")
    }

    render(){

        const children = this.props.children
        return <View>
                {
                    React.Children.map(children, (child, i) => {
                        // Ignore the first child
                        if (!!child.props.editable ==  !!this.props.editMode ) return child
                    })
                }
        </View>
            }
    }

