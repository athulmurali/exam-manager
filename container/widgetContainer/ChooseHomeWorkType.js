import React from "react"
import QuestionTypePicker from "../../elements/QuestionTypePicker";
import {Picker, View} from "react-native";
import {Button, Text} from "react-native-elements";


const homeworkOptions =[
    {
        value : "assignment",
        label : "Assignment"
    },
    {
        value : "exam",
        label : "Exam"
    }
]




 export default class ChooseHomeWorkType extends  React.Component{


     static navigationOptions = {title: 'ChooseHomeWorkType'}


    constructor(props){
        super(props)
        this.state = {
            homeworkType: ""
        }



    }


     handlePressOk=()=>{
         if (this.state.homeworkType == "assignment")
             this.props.navigation.navigate('AssignmentList')

             else this.props.navigation.navigate('ExamList')

     }


     handleSelectType =(val)=>{
        console.log(val);
        this.setState({
            homeworkType : val
        })

     }
    render() {

        console.log("QuestionTypePicker :rendered:");
        return(

            <View style ={this.props.style}>
                <Text h3  > Homework  Type ?</Text>

                <Picker
                    onValueChange={
                        this.handleSelectType}
                    selectedValue={this.state.homeworkType}>

                    {
                        homeworkOptions.map((option,index)=>{
                            console.log(index)
                            return  <Picker.Item key ={index} value={option.value} label={option.label} />
                        })
                    }

                </Picker>
                {/*<Text>{this.state.questionType}</Text>*/}

                <Button
                    title="Ok"

                    disabled = {!this.state.homeworkType}
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
        )
    }


}
