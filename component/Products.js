import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Products = ( { name, deleteProduct, id_key } ) => {

    return (
      <Pressable
        onPress={() => deleteProduct(id_key)}
      >
        <View style={styles.items}>
        
            <Text style={styles.element}>{ name }</Text>
        </View>
      </Pressable> 
    )
}


const styles = StyleSheet.create({
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
  
export default Products