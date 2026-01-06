import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
     
     
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#0000"
          onPress={() => router.back()}
        />
        <Text style={styles.headerTitle}>Sign Up</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.welcome}>Create Account 👋</Text>
      <Text style={styles.subtitle}>Sign up to start ordering delicious food</Text>
      
      <View style={styles.inputBox}>
        <Ionicons name="person-outline" size={20} color="#999" />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
        />
      </View>

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

      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.login}> Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  height:100,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 30,
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#0000',
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
    marginBottom: 25,
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

  signupBtn: {
    backgroundColor: '#ff7a00',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  signupText: {
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

  login: {
    color: '#ff7a00',
    fontWeight: '600',
  },
});
