import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const cartItems = [
  {
    id: 1,
    name: 'Zinger Burger',
    price: 750,
    image: { uri: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop' },
    quantity: 1,
  },
  {
    id: 2,
    name: 'Cheese Pizza',
    price: 999,
    image: { uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ba/f5/c6/the-best-pizza-we-ever.jpg?w=900&h=-1&s=1' },
    quantity: 2,
  },
];

export default function CartScreen() {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (

    <View style={styles.container}>
      <Text style={styles.header}>My Cart</Text>
       <View style={styles.bigCard}>
              <View>
                <Text style={styles.bigTitle}> Special Deal</Text>
                <Text style={styles.bigSubtitle}>Chicken with Fries</Text>
                <Text style={styles.bigPrice}>1550 Rs</Text>
                <Text style={styles.lessPrice}>999 Rs</Text>
              </View>
          <Image
      
             source={require('../../assets/images/this.png')} 
      
              style={styles.bigImage}
          />
            </View>
           <View>
            <Text style={{fontSize:22, fontWeight:'bold', marginBottom:15}}>
              Your Orders
            </Text>
           </View>
        <ScrollView style={styles.itemsContainer}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price} Rs</Text>
              <View style={styles.quantityRow}>
                <TouchableOpacity style={styles.qtyBtn}>
                  <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtyNumber}>{item.quantity}</Text>
                <TouchableOpacity style={styles.qtyBtn}>
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {totalPrice} Rs</Text>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container:{ flex:1, backgroundColor:'#fff', padding:16 },
  header:{ height: 60,fontSize:22, fontWeight:'bold', marginBottom:10, justifyContent: 'center',  paddingTop:15},
  itemsContainer:{ flex:1 },
  itemCard:{ flexDirection:'row', backgroundColor:'#f9f9f9', borderRadius:12, marginBottom:12, padding:10 },
  itemImage:{ width:80, height:80, borderRadius:10 },
  itemInfo:{ flex:1, marginLeft:12, justifyContent:'center' },
  itemName:{ fontSize:16, fontWeight:'600' },
  itemPrice:{ fontSize:16, color:'#ff7a00', marginVertical:4 },
  quantityRow:{ flexDirection:'row', alignItems:'center', marginTop:4 },
  qtyBtn:{ backgroundColor:'#ff7a00', paddingHorizontal:10, paddingVertical:2, borderRadius:6 },
  qtyText:{ color:'#fff', fontSize:16 },
  qtyNumber:{ marginHorizontal:10, fontSize:16 },
  totalContainer:{ paddingVertical:12, borderTopWidth:1, borderTopColor:'#ccc', alignItems:'center' },
  totalText:{ fontSize:18, fontWeight:'bold', marginBottom:8 },
  checkoutBtn:{ backgroundColor:'#ff7a00', paddingVertical:12, paddingHorizontal:50, borderRadius:10 },
  checkoutText:{ color:'#fff', fontSize:16, fontWeight:'bold' },
   bigCard: {
    backgroundColor: '#ff7a00',
    borderRadius: 16,
    padding: 16,
    paddingBottom:25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  bigTitle: {
    color: '#fff',
    fontSize: 14,
  },
   bigSubtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  lessPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  bigPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'line-through',
  },
   bigImage: {
    width: 110,
    height: 110,
  },
});
