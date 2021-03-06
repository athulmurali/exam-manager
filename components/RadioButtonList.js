import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React from "react";
import {View} from "react-native";
import Text from "react-native-elements/src/text/Text";


var radio_props = [
    {label: 'This question is cool', value: 0 },
    {label: 'I dont answer questions', value: 1 },
    {label: 'This question is lame', value: 2 }
];


class RadioButtonList extends  React.Component{
    constructor(props){
        super(props);
        this.state ={
            value : 0
        }
    }

    optionsToRadioList=(options)=>{
        return options.map((option,index)=>{
            console.log("optionsToRadioList :   " + option)
            return {
                label : option,
                index : index
            }
        })

    }

    componentDidMount(){

    }

    render (){


        return (
            <View>
                <RadioForm
                    radio_props={  this.optionsToRadioList(this.props.options)}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                />
            </View>
        );
    }
};
export default  RadioButtonList
