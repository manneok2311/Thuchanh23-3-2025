import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

function CheckoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={20} color="#000" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Checkout 💳</Text>
        <Text style={styles.price}>₹ 1,527</Text>
        <Text style={styles.subText}>Including GST (18%)</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabText}>
            <Ionicons name="card" size={16} color="#fff" />  Credit card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.applePayText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Card number</Text>
        <View style={styles.cardRow}>
          <TextInput style={styles.input} placeholder="5261 4141 0151 8472" keyboardType="numeric" />
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/mastercard-logo.png' }}
            style={{ width: 30, height: 30 }}
          />
        </View>

        <Text style={styles.label}>Cardholder name</Text>
        <TextInput style={styles.input} placeholder="Christie Doe" />

        <View style={styles.expiryRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Expiry date</Text>
            <TextInput style={styles.input} placeholder="06 / 2024" />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.label}>CVV / CVC</Text>
            <TextInput style={styles.input} placeholder="915" keyboardType="numeric" />
          </View>
        </View>

        <Text style={styles.note}>
          We will send you an order details to your email after the successful payment
        </Text>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Success')}>
        <Ionicons name="lock-closed" size={16} color="#fff" />
        <Text style={styles.payText}>  Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
}

function SuccessScreen() {
  return (
    <View style={styles.successContainer}>
        <Text>
        {'\n\n\n\n\n\n\n\n'}
        </Text>
      <Image
        source={require('./assets/anh.png')}
        style={{ width: 1000, height: 300, resizeMode: 'contain' }}
      />

      <Text style={styles.successTitle}>Payment Success, Yayy!</Text>
      <Text style={styles.successSub}>we will send order details and invoice in your contact no. and registered email</Text>

      <TouchableOpacity style={styles.checkDetails}>
        <Text style={styles.checkDetailsText}>Check Details</Text>
        <Ionicons name="arrow-forward" size={16} color="#4c6ef5" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff'
  },
  backButton: {
    marginBottom: 10, width: 40, height: 40,
    borderRadius: 10, justifyContent: 'center',
    alignItems: 'center', backgroundColor: '#f2f2f2'
  },
  header: { marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  price: { fontSize: 20, color: '#11B76B', fontWeight: 'bold',textAlign: 'right'
  },
  subText: { color: '#999' ,textAlign: 'right'
  },
  tabs: {
    flexDirection: 'row', marginBottom: 20,
    backgroundColor: '#f3f3f3', borderRadius: 15,
    padding: 5,
  },
  activeTab: {
    backgroundColor: '#11B76B',
    paddingVertical: 10, paddingHorizontal: 20,
    borderRadius: 10, flex: 1, alignItems: 'center',
  },
  inactiveTab: {
    backgroundColor: '#fff',
    paddingVertical: 10, paddingHorizontal: 20,
    borderRadius: 10, flex: 1, alignItems: 'center',
  },
  tabText: { color: '#fff', fontWeight: '500' },
  applePayText: { fontWeight: '500', fontSize: 15 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, marginTop: 10, marginBottom: 5 },
  input: {
    borderWidth: 1, borderColor: '#ddd',
    borderRadius: 10, padding: 10,
    fontSize: 16,
  },
  cardRow: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1, borderColor: '#ddd',
    borderRadius: 10, padding: 10
  },
  expiryRow: { flexDirection: 'row', marginTop: 10 },
  note: {
    color: '#999', fontSize: 12,
    marginTop: 10, textAlign: 'center'
  },
  payButton: {
    backgroundColor: '#11B76B',
    borderRadius: 10, paddingVertical: 15,
    flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center'
  },
  payText: { color: '#fff', fontSize: 16 },
  // Success Screen
  successContainer: {
    flex: 1, alignItems: 'center',
    padding: 20, backgroundColor: '#fff'
  },
  successTitle: {
    fontSize: 20, fontWeight: 'bold',
    marginBottom: 10, textAlign: 'center'
  },
  successSub: {
    textAlign: 'center', color: '#888',
    fontSize: 14, marginBottom: 20
  },
  checkDetails: {
    flexDirection: 'row', alignItems: 'center',
    marginBottom: 30
  },
  checkDetailsText: {
    color: '#4c6ef5', marginRight: 5,
    fontWeight: '500'
  },
  downloadButton: {
    backgroundColor: '#4c6ef5',
    paddingVertical: 15, paddingHorizontal: 40,
    borderRadius: 12
  },
  downloadButtonText: {
    color: '#fff', fontSize: 16, fontWeight: '500'
  }
});
