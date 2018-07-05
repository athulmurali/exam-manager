import {Alert, ScrollView, StyleSheet, View} from "react-native";
import {FormInput, FormLabel, FormValidationMessage, Icon} from "react-native-elements";
import React from 'react'

const styles = StyleSheet.create(
    {
      floatingMenuButtonStyle: {
            alignSelf: 'flex-end',
            position: 'absolute',
            top: 0,
            zIndex:100
        }
    }
)

export const MAX_TITLE_LENGTH = 15
export const MAX_POINTS_LENGTH = 5


const EditableHeader = (props) => {
    // console.log("props in Editable header " )
    // console.log(props)

    return<View style={props.containerStyle}>
            <FormLabel>Title</FormLabel>
            <FormInput
                value={props.titleText.toString()}
                onChangeText={
                text => {
                    props.onChangeText(text)
                }}

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
            <FormInput
                value={props.points}

                keyboardType="numeric"
               onChangeText={ props.onChangePointsText }
               maxLength={MAX_POINTS_LENGTH}
            />

            <FormValidationMessage>
                Points is required.max {MAX_POINTS_LENGTH} chars
            </FormValidationMessage>



        </View>

}


export default EditableHeader
