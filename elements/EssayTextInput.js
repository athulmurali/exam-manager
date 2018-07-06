import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class EssayTextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChangeText = this.handleChangeText.bind(this)
        this.state = {
            text: this.props.text,
        };
    }

    handleChangeText(text){

        console.log("EssayTextInput :  handleChangeText =" + text);
        console.log(this.props)
        this.props.onChangeText(text)

    }

    // If you type something in the text box that is a color, the background will change to that
    // color.
    render() {
        return (
                <TextInput
                    multiline = {true}
                    onChangeText= {this.handleChangeText}
                    value={this.props.text}
                    placeholder = {"Please type your exciting life story  here"}
                />

        );
    }
}
