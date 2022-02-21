import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View ,TextInput ,ScrollView, FlatList, Alert} from 'react-native';
import React ,{useState ,useEffect} from 'react';
import Products from './component/Products'
import { AddProducts } from './component/AddProducts';
export default function App() {
  const [myProducts ,setMyProducts] =useState([]);
  const [count ,setcount] =useState(0);
  useEffect (()=>{
    if(count>3){
      setMyProducts([])
      setcount(1)
    }
  } ,[count])
  const submitHandler =(product)=>{
    if (product.length >2){
      const idString =Date.now.toString();
      setMyProducts(currentMyProducts=>[{key :idString ,name :product},...currentMyProducts ])
    }else{
      Alert.alert(
        'Sorry',
        'number of characters must be greater than one ',
        [
         
          {
            text: 'UNDERSTOOD',
            onPress: () => setcount(count +1)
          },
  
        ],
        {
          cancelable:true ,
          onDismiss :()=>{ console.warn("Dismiss")}
        }
      );
    }
    
     }
  const deleteProduct =(key)=>{
       setMyProducts(currentMyProducts=>{
              return currentMyProducts.filter((product)=>{
                   product.key !=key
              })
       }
  )
  }

  return (
    <View style={styles.container}>
       <AddProducts  submitHandler={submitHandler}  />
      <FlatList
      data ={myProducts}
      renderItem ={({item})=> (
         <Products
          name ={item.name}
          id_key={item.key}
          deleteProduct={deleteProduct}
          />)}
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
