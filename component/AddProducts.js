import React, { useState } from 'react';
import { StyleSheet, View, TextInput ,Button} from 'react-native';


export const AddProducts = ( { submitHandler } ) => {
    
    const [product, setProduct] = useState('');

    const inputHandler = (val) => {
        setProduct(val);
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    }

    return (
   
            <View style={styles.inputcontainer}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder="Nouveau produit"
                    onChangeText={ inputHandler }
                    value={ product }
                />
                
                <Button 
                backgroundColor="red"
                title ="valider"
                onPress={handleClick}/>
            </View>
    )
}

const styles = StyleSheet.create({
    inputcontainer :{
        flexDirection :"row",
        marginBottom :9
       },
       textinput:{
         borderColor:"grey",
         borderWidth :1      ,
         padding:5,
         paddingLeft:9,
         fontSize:19 ,
         flexGrow :1
       },

})
