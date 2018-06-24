import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';
import {essayTextBox} from "../styles/essayQuestionWidget";

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                onChangeText={this.props.onChangeText}
                value={this.props.value}
                multiline
                style={essayTextBox
                }
            />
        );
    }
}

export default class EssayTextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChangeText = this.handleChangeText.bind(this)
        this.state = {
            text: 'Useless Multiline Placeholder',
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
                <UselessTextInput
                    multiline = {true}
                    onChangeText= {this.handleChangeText}
                    value={this.state.text}
                />

        );
    }
}
