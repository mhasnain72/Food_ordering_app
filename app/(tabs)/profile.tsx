import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

     
      <View style={styles.userCard}>
        <Image
            source={require('../../assets/images/name.jpeg')} 
          style={styles.avatar}
        />
                <View style={styles.userInfo}>
          <Text style={styles.userName}>Muhammad Hasnain</Text>
          <Text style={styles.userEmail}>khhasnain303@gmail.com</Text>
        </View>
      </View>

      
      <View style={styles.statsRow}>
        <TouchableOpacity style={styles.statCard}>
          <Ionicons name="cart" size={28} color="#ff7a00" />
          <Text style={styles.statText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statCard}>
          <Ionicons name="heart" size={28} color="#ff7a00" />
          <Text style={styles.statText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statCard}>
          <Ionicons name="wallet" size={28} color="#ff7a00" />
          <Text style={styles.statText}>Wallet</Text>
        </TouchableOpacity>
      </View>

      {/* Options / Settings */}
      <View style={styles.optionsCard}>
        <TouchableOpacity style={styles.optionRow}>
          <Ionicons name="person" size={24} color="#555" />
          <Text style={styles.optionText}>Account Info</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Ionicons name="notifications" size={24} color="#555" />
          <Text style={styles.optionText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Ionicons name="settings" size={24} color="#555" />
          <Text style={styles.optionText}>Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Ionicons name="log-out" size={24} color="#ff4d4d" />
          <Text style={[styles.optionText, { color: '#ff4d4d' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding:16 },
  header: { height: 60, marginBottom: 20, justifyContent:'center' },
  headerTitle: { fontSize: 22, fontWeight: 'bold' },
  userCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 16 , resizeMode: 'cover',},
  userInfo: {},
  userName: { fontSize: 18, fontWeight: 'bold' },
  userEmail: { fontSize: 14, color: '#777', marginTop: 4 },

  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  statCard: {
    flex: 1,
    backgroundColor: '#fff4e6',
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 12,
    alignItems: 'center',
  },
  statText: { marginTop: 8, fontSize: 14, fontWeight: '600', color: '#ff7a00' },

  optionsCard: { backgroundColor: '#f9f9f9', borderRadius: 12, paddingVertical: 10 },
  optionRow: {
    height:105,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: { flex: 1, marginLeft: 16, fontSize: 16 },
});
