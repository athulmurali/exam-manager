import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';
import {essayTextBox} from "../styles/essayQuestionWidget";

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                onChangeText={val => this.setState({ text: val})}
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
        this.state = {
            text: 'Useless Multiline Placeholder',
        };
    }

    // If you type something in the text box that is a color, the background will change to that
    // color.
    render() {
        return (
            <View>
                <UselessTextInput
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        );
    }
}
