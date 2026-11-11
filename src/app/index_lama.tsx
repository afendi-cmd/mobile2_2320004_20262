import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Utama</Text>

      {/* Tombol ke Kalkulator */}
      <Link href="/kalkulator" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buka Kalkulator</Text>
        </TouchableOpacity>
      </Link>

      {/* Tombol ke Mahasiswa */}
      <Link href="/mahasiswa" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buka Data Mahasiswa</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});