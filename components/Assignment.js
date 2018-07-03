import React, {Component} from 'react'
import {Alert, ScrollView, View} from 'react-native'
import {Badge, Divider, FormInput, FormLabel, FormValidationMessage, Icon, Text} from 'react-native-elements'
import TextInput from "../elements/EssayTextInput";
import * as Clipboard from "react-native/Libraries/Components/Clipboard/Clipboard";
import EditModeToggleNavBar from "../container/EditModeToggleNavBar";
import EditableQuestionContainer from "../container/EditableQuestionContainer";
import SubmitBar from "../container/SubmitBar";
import AssignmentService from "../services/AssignmentService";
import EditableContainerUpdateNavBar from "../container/EditableContainerUpdateNavBar";


export default  class Assignment extends Component {

    static navigationOptions = {title: 'Assignment'}


    setTopicId=(topicId)=>{
        this.setState({
            topicId : topicId
        })

    }

    setAssignmentId=(assignmentId)=>{
        this.setState({assignmentId :   assignmentId})
    }


    setAssignment=(assignment)=>{
        this.setState({assignment})
    }

    saveAndExit=()=>{

        const assignment = this.state.assignment
        const assignmentServiceObj =AssignmentService.instance;
        assignmentServiceObj.createAssignment(281,assignment)


        const topicId       = this.props.navigation.getParam("topicId", -1);
        const assignmentId  = this.props.navigation.getParam("assignmentId", -1);


        // if topic id exists :
        console.log("topicId :",topicId);


        console.log(this.props.navigation.getParam("assignmentId", undefined));
        console.log("assignmentId :",assignmentId);


        if(assignment.id >= 0)
        {

            console.log("Deleting and creating ")
            assignmentServiceObj.deleteAssign(assignmentId).then((res)=>{
                console.log("hi")
            });
            console.log("Assignment deleted ")
            assignmentServiceObj.createAssignment(this.state.topicId, assignment).then(res=>{
                console.log(res)
            })

        }
        else{
            console.log(undefined);

            console.log("Creating new assignment ")

            assignmentServiceObj.createAssignment(this.state.topicId, assignment).then(res=>{
                console.log(res)
            })


        }


    }

    exitToPreviousScreen=()=>{

    }


    handleOnUpdateSelected =()=>{
        console.log("Assignment : Update selected")

        this.saveAndExit()

    }


    handleOnCancelSelected =()=>{
        console.log("Assignment : Cancel selected")
        this.exitToPreviousScreen()

    }





    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1,
            lessonId: 1,
            topicId: -1,
            clipboardContent: "",
            editMode: true,
            assignmentId : -1,
            assignment : {}
        }

    }

    componentDidMount() {
        const {navigation} = this.props;
        console.log("Assignment Mounted")
        console.log("Props in Assignment screen : ")
        this.setState({
            topicId : this.props.navigation.getParam("topicId", -1)
        })
        console.log(this.props.navigation.getParam("topicId", -1))


    }


    readFromClipboard = async () => {
        const clipboardContent = await Clipboard.getString();
        console.log("pasted!");
        this.setState({clipboardContent});
        console.log(clipboardContent + ":")
    };

    handleToggleEditMode=(editMode)=>{
        this.setState({
            editMode : editMode
        })
    }



    handleQuestionHeaderChange=(data)=>{
        console.log("Assignment :   onChangeQuestionText "  );
        this.setState({
            assignment : data
        },()=>console.log(this.state))


    }



    render() {


        return (

            <ScrollView style={{padding: 11}}>

                {/*<ModalBox modalVisible={true}/>*/}

                <EditModeToggleNavBar
                    initialSwitchState={this.state.editMode}
                    onToggle={this.handleToggleEditMode}
                />

                <EditableQuestionContainer
                    editMode                =   {this.state.editMode}
                    onChangeQuestionText    =   {this.handleQuestionHeaderChange}

                />



                <FormLabel>Link</FormLabel>


                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                    <Icon
                        reverse
                        name='ios-link'
                        type='ionicon'
                        color='#517fa4'
                    />

                    <TextInput

                        onChangeText={(text) => this.setState({input: this.state.clipboardContent})}
                        placeholder="Input Here"
                    />

                    <Icon
                        onPress={() => {
                            this.readFromClipboard().then(console.log("promise"))
                            Alert.alert("Pasted from clipboard!")

                        }}
                        reverse
                        name='ios-clipboard'
                        type='ionicon'
                        color='#517fa4'
                    />


                </View>


                {!!this.state.editMode  && <EditableContainerUpdateNavBar
                    onUpdateSelected={ this.handleOnUpdateSelected}
                    onCancelSelected={ this.handleOnCancelSelected}
                />}


            </ScrollView>

        )
    }

}

