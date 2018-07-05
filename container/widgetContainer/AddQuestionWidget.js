import React from "react";
import {View} from "react-native";
import {Button, Text} from "react-native-elements";
import QuestionTypePicker from "../../elements/QuestionTypePicker";
import {StyleSheet} from 'react-native'


const optionsList=[
    {
        value: "EssayQuestionWidget",
        label: "Essay"

    },
    {
        value: "FillInTheBlanks",
        label: "Fill in the blanks"
    },
    {
        value: "MCQ",
        label: "Multiple Choice"
    },
    {
        value : "QuestionTrueFalseContainer",
        label : "True or False"

    }
]

const styles = StyleSheet.create({

    containerViewStyle :
        {
            padding : 15,
            flex: 1,
            // backgroundColor:'#ffff0f',
        },
    headingContainerStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#ff0000'
    },
    typePickerContainerStyle :
        {
            flex:15,
            alignContent:'stretch',

            // backgroundColor:'#4286f4',
        },
    typePickerStyle:{

        alignContent:'stretch',

        // backgroundColor:"#00bb00"
    },
    selectTypeButtonContainer : {
        // backgroundColor:'#223345',

    }
    })
export default  class AddQuestionWidget extends  React.Component{
    static navigationOptions ={
        title : "Add Question"
    }


    constructor(props)
    {
        super(props)
        this.handleTypeSelection= this.handleTypeSelection.bind(this)
        this.state={

        }

    }

    handleTypeSelection(selectedValue,selectedIndex){
        console.log("AddQuestionWidget :hanlde Type Select = " + selectedValue)

        this.setState(
            {
                redirectToComponent : selectedValue,
                examId : this.props.navigation.examId
            },

    )




    }

    handlePressOk(){
        console.log("AddQuestionWidget : handlePressOk")
        console.warn("sending to next from addQe" + this.props.navigation.getParam("examId", -10000))

        this.props.navigation
            .navigate(this.state.redirectToComponent,{
                examId : this.props.navigation.getParam("examId",-1)
            })

    }

    redirectToType(){

    }
    componentDidMount(){
        console.log("AddQuestionWidget : mounted")

    }
    componentWillUnmount(){

        console.log("AddQuestionWidget : unmounted")


    }

    render(){
        console.log("AddQuestionWidget : rendered")

        return<View style = {styles.containerViewStyle}>
                    <View style={ styles.headingContainerStyle}>
                        <Text h3  >Question Type ?</Text>
                    </View>
                    <View style ={styles.typePickerContainerStyle}>
                        <QuestionTypePicker style ={styles.typePickerStyle}
                                            onSelectType ={this.handleTypeSelection}
                                            optionsList ={optionsList}/>
                        <Button
                            title="Ok"

                            disabled = {!this.state.redirectToComponent}
                            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                            titleStyle={{ fontWeight: "700",
                                fontFamily:"Helvetica Neue"
                            }}

                            buttonStyle={{
                                backgroundColor: "grey",
                                width: 300,
                                height: 45,
                                borderColor: "black",
                                borderWidth: 0.3,
                                borderRadius: 10,
                                alignItems:"center"
                            }}
                            containerStyle={{ marginTop: 200}}
                            onPress ={()=>{
                                console.log("AddQuestionWidget: OK selected")
                                this.handlePressOk()
                            }}
                        />

                    </View>

        </View>
    }

}
