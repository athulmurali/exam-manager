import React from "react";
import { StyleSheet, TextInput, View} from "react-native";
import {Button, Icon} from "react-native-elements";

const styles = StyleSheet.create({
    checkBoxContainer : {
        backgroundColor : 'transparent'
    },
    trueFalseSelectionContainerStyle :{
        padding :20
    },

    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin : 15

    },
    searchIcon: {
        color: "black",
        margin:0,
        backgroundColor: "transparent"


    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },

});


export default class AddChoice extends React.Component{

    constructor(props){
        super(props)
        this.state={
            textBoxMode: false
        }
    }


    handleOnPressAdd=()=> {
        console.log("Add pressed")
        this.toggleTextMode()

    }

    toggleTextMode=()=> {

            this.setState({
                    textBoxMode: !this.state.textBoxMode
                },this.props.onPressAdd
            )


    }


    render(){
        return<View>
            {!this.state.textBoxMode && <Button
                icon={{
                    name: 'add',
                    size: 15,
                    color: 'white'

                }}
                title='AddNewChoice'

                buttonStyle={{
                    backgroundColor: "grey",
                    width: 300,
                    height: 45,
                    borderColor: "black",
                    borderWidth: 0.3,
                    borderRadius: 10,
                    alignItems:"center"
                }}


                onPress={this.handleOnPressAdd}
            />}

            {!!this.state.textBoxMode &&
            < View style={styles.searchSection}>

                <TextInput
                style={styles.input}
                placeholder="Add  new choice"
                onChangeText={this.props.onChangeText}
                underlineColorAndroid="transparent"
                />
                <Icon  name="ios-add-circle"
                       type='ionicon'
                       style={styles.searchIcon}
                       size ={25 }
                       onPress={()=>this.toggleTextMode()}
                />
                </View>
            }

            </View>


    }

}
