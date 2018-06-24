import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Image, View } from 'react-native';
import { DocumentPicker, ImagePicker } from 'expo';
import { Button, Text, Header } from 'react-native-elements';
import { SERVER_URI, PostFunStuff } from '../../constant';

class FunPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
        };
        this.postFunStuff = this.postFunStuff.bind(this);
        this.pickDocument = this.pickDocument.bind(this);
        this.pickImage = this.pickImage.bind(this);
        this.postPic = this.postPic.bind(this);
    }
    pickDocument = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        console.log('result', result);
        if (!result.cancelled) {
            this.setState({
                image: result,
            });
        }
    }
    pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true,
        });
        if (!result.cancelled) {
            this.setState({
                image: result.uri,
            });
        }
    };
