import {Alert, ScrollView, StyleSheet, View} from "react-native";
import {Button, CheckBox, FormInput, FormLabel, FormValidationMessage, Icon} from "react-native-elements";
import React from 'react'


const styles = StyleSheet.create(
    {
        mainContainerStyle: {
            flexDirection: 'column',
            flex: 1
        },floatingMenuButtonStyle: {
            alignSelf: 'flex-end',
            position: 'absolute',
            top: 0,
            zIndex:100
        }
    }
)

export const MAX_TITLE_LENGTH = 15
export const MAX_POINTS_LENGTH = 5

const EditableHeader = () => {


    return <ScrollView>
        <View style={styles.mainContainerStyle}>


            <FormLabel>Title</FormLabel>
            <FormInput onChangeText={
                // text => this.setState({title: text})
                text => console.log({title: text})}
                       maxLength={MAX_TITLE_LENGTH}
            />
            <Icon containerStyle={styles.floatingMenuButtonStyle}
                  raised
                  right
                  reverse

                  color='grey'
                  name='edit'
                  type='font-awesome'
                  onPress={() =>
                      Alert.alert('Do you want to edit this ?')}
            />

            <FormValidationMessage>
                Title is required.( max {MAX_TITLE_LENGTH} chars)
            </FormValidationMessage>


            <FormLabel>Points</FormLabel>
            <FormInput onChangeText={
                // text => this.setState({title: text})
                text => console.log({title: text})}
                       maxLength={MAX_POINTS_LENGTH}
                       keyboardType="numeric"
            />

            <FormValidationMessage>
                Points is required.max {MAX_POINTS_LENGTH} chars
            </FormValidationMessage>


            <FormLabel>Description</FormLabel>
            <FormInput onChangeText={
                text => {

                    console.log(" new Description : " + text)
                    // this.setState({description: text})

                }
            }/>
            <FormValidationMessage>
                Description is required
            </FormValidationMessage>

            <CheckBox onPress={() => console.log("CheckBOx Pressed")}
                      checked={false} title='The answer is true'/>

            <Button backgroundColor="green"
                    color="white"
                    title="Save"/>
            <Button backgroundColor="red"
                    color="white"
                    title="Cancel"/>

            {/*<Text h3>Preview</Text>*/}
            {/*<Text h2>{this.state.title}</Text>*/}
            {/*<Text>{this.state.description}</Text>*/}


        </View>

    </ScrollView>

}


export default EditableHeader
