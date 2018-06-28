import React, {Component} from 'react'
import {Alert, ScrollView, View} from 'react-native'
import {Badge, Divider, FormInput, FormLabel, FormValidationMessage, Icon, Text} from 'react-native-elements'
import TextInput from "../elements/EssayTextInput";
import * as Clipboard from "react-native/Libraries/Components/Clipboard/Clipboard";
import EditModeToggleNavBar from "../container/EditModeToggleNavBar";
import EditableQuestionContainer from "../container/EditableQuestionContainer";

const HOST_URL = "https://neu-course-manager.herokuapp.com"

export default  class Assignment extends Component {

    static navigationOptions = {title: 'Assignment'}


    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1,
            lessonId: 1,
            topicId: 1,
            clipboardContent: "",
            editMode: false
        }
    }

    componentDidMount() {
        const {navigation} = this.props;
        console.log("Assignment Mounted")

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

    render() {


        return (

            <ScrollView style={{padding: 11}}>

                {/*<ModalBox modalVisible={true}/>*/}

                <EditModeToggleNavBar
                    initialSwitchState={this.state.editMode}
                    onToggle={this.handleToggleEditMode}
                />

                <EditableQuestionContainer
                    editMode={this.state.editMode}/>



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
            </ScrollView>

        )
    }

}

