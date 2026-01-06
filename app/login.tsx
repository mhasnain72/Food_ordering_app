import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#000"
          onPress={() => router.back()}
        />
        <Text style={styles.headerTitle}>Login</Text>
        <View style={{ width: 24 }} />
      </View>

      
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to continue ordering food</Text>

      
      <View style={styles.inputBox}>
        <Ionicons name="mail-outline" size={20} color="#999" />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      
      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>

    <TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText}>Login</Text>
</TouchableOpacity>

<View style={{flex:1, flexDirection:'row'}}>
  <Text>Don’t have an account?  </Text>
<TouchableOpacity onPress={() => router.push('/signup')}>
  <Text style={styles.signup}>
    Sign Up
  </Text>
</TouchableOpacity>
</View>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    height:100,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },

  welcome: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },

  subtitle: {
    color: '#777',
    marginBottom: 30,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  loginBtn: {
    backgroundColor: '#ff7a00',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  footerText: {
    color: '#555',
  },

  signup: {
    color: '#ff7a00',
    fontWeight: '600',
  },
});
