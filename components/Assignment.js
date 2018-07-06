import React, {Component} from 'react'
import {Alert, ScrollView, TextInput, View} from 'react-native'
import {Button, FormLabel, Icon} from 'react-native-elements'
import * as Clipboard from "react-native/Libraries/Components/Clipboard/Clipboard";
import EditModeToggleNavBar from "../container/EditModeToggleNavBar";
import EditableQuestionContainer from "../container/EditableQuestionContainer";
import AssignmentService from "../services/AssignmentService";
import EditableContainerUpdateNavBar from "../container/EditableContainerUpdateNavBar";

const assignmentService = AssignmentService.instance
export default  class Assignment extends Component {

    static navigationOptions = {title: 'Assignment'}


    constructor(props) {
        super(props)
        this.state = {
            linkText:"Text from assignment",
            widgets: [],
            courseId: 1,
            moduleId: 1,
            lessonId: 1,
            topicId: -1,
            clipboardContent: "",
            editMode: true,
            assignmentId : -1,
            assignment : {
                description : "",
                points : "",
                title : "",
            }
        }

    }

    componentDidMount() {
        console.log("Assignment : Mounted")
        console.log("Printing nav props");
        console.log(this.props.navigation.state.params);

        this.setState({
            topicId : this.props.navigation.getParam("topicId", -1),
            assignmentId : this.props.navigation.getParam("assignmentId", -1)

        },this.fetchAssignentInfo)


    }

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




    fetchAssignentInfo=()=>{
        console.log("Assignment : Fetching assignment info to edit, id :" + this.state.assignmentId);
        console.log(this.state)

        if( this.state.assignmentId > -1){

            assignmentService.findAssignmentById(this.state.assignmentId).then((res)=>{
                console.log("fetched Assignment info for ; "+ this.state.assignmentId);
                console.log(res)
                this.setState({
                    assignment : res
                })

            })

        }


    }

    saveAndExit=()=>{

        const assignment = this.state.assignment
        const assignmentServiceObj =AssignmentService.instance;


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
                console.log(res)
            });
            console.log("Assignment deleted ")
            assignmentServiceObj.createAssignment(this.state.topicId, assignment).then(res=>{
                console.log(res)
            })

        }
        else{

            console.log("Creating new assignment ")

            assignmentServiceObj.createAssignment(this.state.topicId, assignment).then((res)=>{


                    this.setState({
                        assignment : res
                    },()=>{
                        this.exitToPreviousScreen()

                    })

            })


        }



    }

    exitToPreviousScreen=()=>{

        this.props.navigation.navigate("AssignmentList",
            {
                topicId: this.state.topicId
            }
        )
    }


    handleOnUpdateSelected =()=>{
        console.log("Assignment : Update selected")

        this.saveAndExit()

    }


    handleOnCancelSelected =()=>{
        console.log("Assignment : Cancel selected")
        this.exitToPreviousScreen()

    }





    readFromClipboard = async () => {
        const clipboardContent = await Clipboard.getString();
        console.log("pasted!");
        this.setState({linkText : clipboardContent});
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

                    title                   =   {this.state.assignment.title}
                    points                  =   {this.state.assignment.points}
                    description             =   {this.state.assignment.description}


                />

                <FormLabel>Upload File</FormLabel>
                <Button
                    title={"Choose file"}
                    backgroundColor ={"grey"}
                    borderRadius ={10}
                > </Button>



                <FormLabel>Essay Answer</FormLabel>
                <View style={{flexDirection: "row",
                    justifyContent: 'space-between', alignItems: 'center',
                    padding:15}}>

                    <TextInput
                    placeholder = {"Please write your life story here. " +
                    "As you type the width and height will increase"}
                    multiline={true}

                    />

                </View>



                <FormLabel>Link</FormLabel>


                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center',padding:10}}>
                    <Icon
                        reverse
                        name='ios-link'
                        type='ionicon'
                        color='#517fa4'
                    />

                    <TextInput

                        text={this.state.linkText}
                        onChangeText={(text) => this.setState({linkText: text})}
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

