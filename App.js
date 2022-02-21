import { Modal,StyleSheet,View ,FlatList,Text, Pressable} from 'react-native';
import React ,{useState } from 'react';
import Products from './component/Products'
import { AddProducts } from './component/AddProducts';
import { borderBottomColor, borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
export default function App() {
  const [myProducts ,setMyProducts] =useState([]);
  const [showModal ,setshowModal] =useState(true);
  const submitHandler =(product)=>{
     if(product.length >1){
         const idString =Date.now.toString();
         setMyProducts(currentMyProducts=>[{key :idString ,name :product},...currentMyProducts ])
     }else{
      setshowModal(true)
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
        <Modal 
          visible ={showModal}
          onRequestClose ={()=>{setshowModal(false)}}
          animationType ='slide'
          hardwareAccelerated 
          transparent
        >
              <View
              style={styles.modalContainer}
              >
                    <View
                    style={styles.modalContent}
                    >
                        <View style ={styles.modalHeader}>
                            <Text  style={styles.modalHeaderText}>OUPS!!</Text>
                        </View>
                       
                        <View style ={styles.modalBody}>
                            <Text  style={styles.modalBodyText}>veuillez indiquer plus d'un caractère</Text>
                        </View>
                        <View style ={styles.modalFooter}>
                            <Pressable
                               style ={styles.pressableBtnModal}
                               onPress={()=>{setshowModal(false) }}
                            >  
                               <Text  style={styles.modalBtn}>OK</Text>
                            </Pressable>

                        </View>
                    </View>
                  
                       
                    
               </View>
         </Modal>
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
    
  },
  modalContainer :{
    flex :1 ,
    justifyContent :'center',
    alignItems :'center',
    backgroundColor: "rgba(0,0,0,0.2)"


  },
  modalContent :{
      backgroundColor :"#fff" ,
      width :"90%" ,
      height :250 ,
      alignItems :"center",
      borderRadius : 15


  },
  modalHeader :{
    width :"100%" ,
    padding :17 ,
    alignItems :"center",
    borderTopLeftRadius :15,
    borderBottomWidth :1 ,
    borderBottomColor :"lightgray"
},
modalHeaderText :{
   color :"gray",
   fontSize :17
},
modalBody :
{
  flex:1,
  width :"100%",
  borderBottomRightRadius :15 ,
  alignItems:"center",
  justifyContent :"center"
}
,
modalBodyText :{
   fontSize :17 ,
}
,
modalFooter :{
   width :"100%",
},
pressableBtnModal :{
  backgroundColor : 'lightseagreen',
  borderBottomRightRadius :15 ,

},
modalBtn :{
  fontSize :17 ,
  color : "#fff" ,
  textAlign : "center" ,
  padding :16

}

});
