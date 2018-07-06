import {CheckBox} from "react-native-elements";
import {Alert, View} from "react-native";
import React from "react";


const ASCII_a = 97
export default class EditableList extends React.Component{
    constructor(props)
    {
      super(props)
        this.state={
            elementsList :this.props.elementsList,
            selectedIndex : 0
        }
    }


    handleOnPress=(index)=>{
        console.log("Pressed index : " + index.toString() )
        this.setSelectedIndex(index)
        this.props.onSelectIndex(index)


    }

    handleLongPress=(index)=>{
       this.props.onDelete(index)
    }


    setSelectedIndex=(index)=>{
        this.setState({
            selectedIndex : index
        })

    }


    convertNumericIndexToAlphabetical=(index)=>(String.fromCharCode( ASCII_a + index))

    render(){

        return <View>
        {
              this.props.elementsList.map(
                (element,index)=>{
                    return <CheckBox
                    title={  this.convertNumericIndexToAlphabetical(index) + ". " + element}
                    key = {index}

                    onPress={()=>{this.handleOnPress(index)}}
                    checked={this.props.correctOptionIndex === index}
                    onLongPress ={()=>this.handleLongPress(index)}
                    containerStyle={
                        this.props.correctOptionIndex === index &&

                        {backgroundColor: '#1188ff'}}



            /> })

        }

    </View>

    }


}
