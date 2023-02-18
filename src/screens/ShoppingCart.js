import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubTotal, selectTotal } from '../store/cartSlice'

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart.items)
    const checkout = () => {
        console.log('checked out');
    }

    const ShoppingCartTotals = () => {
        const subtotal = useSelector(selectSubTotal)
        const deliveryPrice = useSelector(selectDeliveryPrice)
        const total = useSelector(selectTotal)
      return (
        <View style={styles.totalContainer}>
          <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>{subtotal} US$</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>{deliveryPrice} US$</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>{total} US$</Text>
          </View>
        </View>
      );
    };
    return (
        <>
            <FlatList 
                data={cart}
                renderItem={({item})  => <CartListItem  cartItem={item}/>}
                ListFooterComponent={ShoppingCartTotals}
            />
            <Pressable onPress={checkout} style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>

    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    totalContainer:{   
        margin:20,
        paddingTop:10,
        borderColor:'gainsboro',
        borderTopWidth: 1
    },
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text: {
        fontSize:16,
        color:'grey'
    },
    textBold: {
        fontSize:16,
        fontWeight:'500'
    },
    button: {
        position:'absolute',
        backgroundColor:'black',
        bottom: 30,
        width:'90%',
        alignSelf:'center',
        padding:20,
        borderRadius:100,
        alignItems:'center'
    },
    buttonText: {
        color:'white',
        fontWeight: '500',
        fontSize: 16
    },
})