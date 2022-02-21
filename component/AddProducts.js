import React, { useState ,useEffect} from 'react';
import { StyleSheet, View, TextInput ,Button} from 'react-native';


export const AddProducts = ( { submitHandler } ) => {
    
    const [product, setProduct] = useState('');
    const [btnDisable, setbtnDisable] = useState(true);

    const inputHandler = (val) => {
        setProduct(val);
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    }
    useEffect(()=>{
        if(product.length>1){
             setbtnDisable(false)
        }else{
            setbtnDisable(true)
   
        }

    },[product])
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
                onPress={handleClick}
                disabled={btnDisable}/>

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
