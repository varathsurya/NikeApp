import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
    data={products}
    renderItem={({item}) => (
      <Pressable 
        onPress={() => {
        
          dispatch(productsSlice.actions.setSelectedProduct(item.id))
          navigation.navigate('Product Details')
        }}
        style={styles.itemContainer}
      >
      <Image 
      source={{uri: item.image}} 
      style={styles.image}
      />
      </Pressable>
    )}
    numColumns={2}
  />
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    itemContainer: {
        width:'50%',
        padding:1
      },
      image: {
        width:'100%', 
        aspectRatio:1
      },
})