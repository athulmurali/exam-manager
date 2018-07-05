const   VARIABLE_TYPE ="blank"

export default  class BlanksUtil{


    // example
    // givenText ="Test input for blanks add [1=onw]"

    // returns
    //
    // LIST :  [
    //     {
    //          "type": "word",
    //          "value": "Test input for blanks add ",
    //      },
    //     {
    //         "type": "blank",
    //     "value": "1=onw"
    //      }]
    static textToTextBoxedText=(givenText)=>{

        let listWithBlanks=[]
        let tempWord = ""
        let tempBlank = ""
        let tempStr= ""
        for (var i = 0; i < givenText.length; i++) {


            const currentChar = givenText.charAt(i)
            if (currentChar == "[" )
            {
                console.log("current open");

                if (tempWord !=""){
                    const tempDict =
                        {
                            type: "word",
                            value : tempWord
                        }

                    listWithBlanks.push(tempDict)
                }
                tempWord = ""
                continue;
            }

            else if (currentChar == "]")
            {

                if (tempWord !=""){
                    const tempDict =
                        {
                            type: "blank",
                            value : tempWord
                        }

                    listWithBlanks.push(tempDict)
                }

                tempWord = ""
                continue;


            }

            else{
                tempWord = tempWord + givenText.charAt(i)

                if (i == givenText.length -1){
                    console.log("last char")
                    const tempDict =
                        {
                            type: "word",
                            value : tempWord
                        }

                    listWithBlanks.push(tempDict)
                }

            }

        }

        console.log("list with blanks :");

        console.log(listWithBlanks);
        return listWithBlanks
    }




    //example :
    // given
    // textBoxedTextList :[
    //     {
    //          "type": "word",
    //          "value": "Test input for blanks add ",
    //      },
    //     {
    //         "type": "blank",
    //     "value": "1=onw"
    //      }]


    //returns :
    // textBoxedTextList :["1=onw"]


    static  textBoxedTextToVariableList =(textBoxedTextList)=>{
        const variableDictList =  textBoxedTextList.filter((element)=>{
            return element.type === VARIABLE_TYPE
        })

        return variableDictList.map(element=>{

            //remove spaces between characters in variables\
            return element.value.replace(/ +/g, "");
        })

    }
}
