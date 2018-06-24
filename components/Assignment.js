import React, {Component} from 'react'
import {Alert, View} from 'react-native'
import {Badge, Divider, FormInput, FormLabel, FormValidationMessage, Icon, Text} from 'react-native-elements'
import TextInput from "../elements/EssayTextInput";
import Button from "react-native-elements/src/buttons/Button";
import * as Clipboard from "react-native/Libraries/Components/Clipboard/Clipboard";

const HOST_URL = "https://neu-course-manager.herokuapp.com"

class Assignment extends Component {

    static navigationOptions = {title: 'Assignment'}




    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1,
            lessonId :1,
            topicId: 1,
            clipboardContent : ""
        }
    }
    componentDidMount() {
        const {navigation}  = this.props;
        console.log("Assignment Mounted")

    }



    readFromClipboard = async () => {
        const clipboardContent = await Clipboard.getString();
        console.log("pasted!");
        this.setState({ clipboardContent });
        console.log(clipboardContent + ":")
    };


    render() {

        const index = 1
        const points = 100
        const  text= "Lorem ipsum dolor sit amet,consectetur adipiscing elit," +
            "sed do eiusmod tempor incididunt" +
            "ut labore et dolore magna aliqua."

        return (


        <View style={{padding: 15}}>


            <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>


                <Icon

                    reverse
                    name='ios-add-circle'
                    type='ionicon'
                    color='#517fa4'
                />

                <Text h3>
                    Assignment - {index}
                </Text>



                <View  style={{alignItems: 'flex-end',flex: 1}}>

                    <Badge
                        value={100}
                        textStyle={{ color: 'white',  fontSize: 20}}
                        containerStyle={{ backgroundColor: 'red'}}                        />
                    <Text>pts</Text>
                </View>



            </View>


            <Divider style={{
                backgroundColor:
                    'grey' }}/>



            <Text style={{padding: 3, fontSize: 22.5}}>
                {text}
            </Text>

            <Divider style={{
                backgroundColor:
                    'grey' }}/>


            <Text h4>Enter text below</Text>
            <TextInput/>
            <Button title={"Alert Check"} onPress={()=>Alert.alert(
                'Confirmation',
                'Do you want to delete this?',
                [
                    {text: 'Confirm', onPress: () => console.log('Confirm pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
                ],
                { cancelable: false }
            )}></Button>




            <FormLabel>Title</FormLabel>
            <FormInput onChangeText={
                text => this.updateForm({title: text})
            }/>
            <FormValidationMessage>
                Title is required
            </FormValidationMessage>



            <FormLabel>Link</FormLabel>



            <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                <Icon
                    reverse
                    name='ios-link'
                    type='ionicon'
                    color='#517fa4'
                />

                <TextInput

                    onChangeText={(text) => this.setState({ input: this.state.clipboardContent })}
                    placeholder="Input Here"
                />

                <Icon
                    onPress = {()=>{
                        this.readFromClipboard().then(console.log("promise"))
                        Alert.alert("Pasted from clipboard!")

                    }}
                    reverse
                    name='ios-clipboard'
                    type='ionicon'
                    color='#517fa4'
                />
            </View>




        </View>



    )
    }
}
export default Assignment
