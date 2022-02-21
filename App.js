import { Button,StyleSheet,View ,FlatList} from 'react-native';
import React ,{useState } from 'react';
import Products from './component/Products'
import { AddProducts } from './component/AddProducts';
export default function App() {
  const [myProducts ,setMyProducts] =useState([]);
  const submitHandler =(product)=>{
      const idString =Date.now.toString();
      setMyProducts(currentMyProducts=>[{key :idString ,name :product},...currentMyProducts ])
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
