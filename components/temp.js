import {Icon} from "react-native-elements/src/index";

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

            onChangeText={(text) => this.setState({ input: text })}
            placeholder="Input Here"
        />

        <Icon
            reverse
            name='ios-clipboard'
            type='ionicon'
            color='#517fa4'
        />
    </View>




</View>
