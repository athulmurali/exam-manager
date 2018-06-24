import React from "react";
import {Button} from "react-native-elements";
import {View} from "react-native";

export default  class SubmitBar extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){
        console.log("Submit bar mounted")

    }
    render(){
        return  <View style={{flexDirection :'row',flex : 1, justifyContent:'space-between', paddingTop : 30}}>
            <Button
                title="Cancel"
                disabled={false}
                // loading
                // loadingProps={{ size: "large", color: "rgba(0, 202, 186, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "#ff0000",
                    width: 150,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 10
                }}
                containerStyle={{ marginTop: 35 }}
            />

            <Button
                title="Submit"
                disabled={false}


                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "#0000ff",
                    width: 150,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 10
                }}
                containerStyle={{ marginTop: 35 }}
            />

        </View>
    }
}
