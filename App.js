import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View ,TextInput ,ScrollView, FlatList} from 'react-native';
import React ,{useState} from 'react';
export default function App() {
  const [product ,setProduct] =useState('');
  const [myProducts ,setMyProducts] =useState([]);

  const inputHandler =(valeur)=>{
    setProduct(valeur);
  }
  const submitHandler =()=>{
    const idString =Date.now.toString();
    setMyProducts(currentMyProducts=>[{key :idString ,name :product},...currentMyProducts ])
    setProduct('')
     }

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
         <TextInput 
            style={styles.textinput}
            placeholder="Nouveau produit"
            onChangeText={inputHandler}
            value={product}
         />
          <Button
             title='valider'
             onPress={submitHandler}
          />
      </View>
   <FlatList
   data ={myProducts}
   renderItem ={({item})=> <Text  style={styles.element}>{item.name}</Text>}
   />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:40,
   paddingTop:60,
  },
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
  items:{
    marginTop:10
  },
  element:{
    backgroundColor :'deepskyblue',
    padding :20,
    marginVertical :7,
    fontSize :17
    
  }
});
