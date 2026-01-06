import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';



const foods = [
  {
    id: 1,
    name: 'Zinger Burger',
    price: '750 Rs',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Cheese Pizza',
    price: '999 Rs',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ba/f5/c6/the-best-pizza-we-ever.jpg?w=900&h=-1&s=1',
  },
  {
    id: 3,
    name: 'French Fries',
    price: '299 Rs',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-yEQFkBTlySNv8Y-Vr-sdATg1tzy_kO2rg&s',
  },
  {
    id: 4,
    name: 'Lava Cake',
    price: '545 Rs',
    image: 'https://hips.hearstapps.com/hmg-prod/images/chocolate-lava-cake-lead-65c2505660bd3.jpg?crop=1xw:1xh;center,top&resize=980:*',
  },
   {
    id: 5,
    name: 'Shawarma',
    price: '225 Rs',
    image: 'https://images.squarespace-cdn.com/content/v1/5602c3cce4b0f8716df3f66d/1545303032172-OKSDH1PWM0WD8HNYZRUV/Online+Personal+Trainer+Lunch+Recipes+-%C2%A0Chicken+Shawara+Wrap....jpg',
  },
   {
    id: 6,
    name: 'Nuggets',
    price: '745 Rs',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZOYqobVraO7AcrBYLQ1XpleaukOT2fHalQ&s',
  },
  
 
];

export default function HomeScreen() {
 
 return (
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
 <View style={styles.header}>
  <Text style={styles.title}>Foodish</Text>
 
<TouchableOpacity  style={styles.loginBtn} onPress={() =>{ router.push('/login')}}>
  <Text style={{ color: '#faf9f8ff', fontWeight: '600' }}>
    Login
  </Text>
</TouchableOpacity>

</View>

<View style={styles.searchContainer}>
  <Ionicons name="search" size={20} color="#999" />
  <TextInput
    placeholder="Search for food, drinks..."
    placeholderTextColor="#999"
    style={styles.searchInput}
  />
</View>

      <View style={styles.bigCard}>
        <View>
          <Text style={styles.bigTitle}>Today’s Special</Text>
          <Text style={styles.bigSubtitle}>Burger Combo</Text>
          <Text style={styles.bigPrice}>1250 Rs</Text>
          <Text style={styles.lessPrice}>950 Rs</Text>
        </View>
    <Image

       source={require('../../assets/images/burgers.png')} 

        style={styles.bigImage}
    />
      </View>
      <Text style={styles.sectionTitle}>Popular Items</Text>

   
      <View style={styles.myContainer}>
        {foods.map(item => (
          <View key={item.id} style={styles.foodCard}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
            </View>         
             <View style={styles.cartbtn}>
               <TouchableOpacity style={styles.addBtn}>
      <Ionicons name="add" size={20} color="#fff" />
    </TouchableOpacity>
             </View>
             </View>

        ))}
      </View>
    </ScrollView>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingBottom: 40, 
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  
    myContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom:10,
  },
  foodCard: {
    width: '48%', 
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
       elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  foodImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  foodInfo: {
    marginTop: 8,
    paddingBottom: 5,
    
    
  },
  loginBtn: {
  backgroundColor: '#ff7a00',
  paddingHorizontal: 18,
  paddingVertical: 10,
  borderRadius: 18,
},

loginText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '600',
},

  foodName: {
    fontSize: 18,
    fontWeight: '600',
  },
  foodPrice: {
    fontSize: 18,
    color: '#ff7a00',
    fontWeight: '700',
    marginTop: 2,
  },
 addBtn: {
  height:25,
  width:25,
  flex:1,
  backgroundColor: '#ff7a00',
   justifyContent:'center',
  alignItems:"center",
  borderRadius: 8,
  },
  cartbtn:{
    flex:1,
    alignItems:'flex-end',
  },
  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  paddingHorizontal: 14,
  paddingVertical: 10,
  borderRadius: 16,
  marginBottom: 20,
},

searchInput: {
  flex: 1,
  marginLeft: 8,
  fontSize: 15,
  color: '#000',
},

});