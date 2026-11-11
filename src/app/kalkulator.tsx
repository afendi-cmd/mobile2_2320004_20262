import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';

export default function KalkulatorScreen() {
  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [operator, setOperator] = useState('');
  const [hasil, setHasil] = useState('');

  // Memilih operator
  const pilihOperator = (op: string) => {
    setOperator(op);
    setHasil('');
  };

  // Menghitung hasil
  const hitung = () => {
    const a = parseFloat(angka1);
    const b = parseFloat(angka2);

    if (angka1.trim() === '' || angka2.trim() === '' || operator === '') {
      setHasil('Lengkapi semua data!');
      return;
    }

    let total = 0;

    switch (operator) {
      case '+':
        total = a + b;
        break;
      case '-':
        total = a - b;
        break;
      case '×':
        total = a * b;
        break;
      case '÷':
        if (b === 0) {
          setHasil('Tidak bisa dibagi 0!');
          return;
        }
        total = a / b;
        break;
    }

    setHasil(String(Number(total.toPrecision(10))));
  };

  // Reset kalkulator
  const reset = () => {
    setAngka1('');
    setAngka2('');
    setOperator('');
    setHasil('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kalkulator Sederhana</Text>

      <Text style={styles.subtitle}>
        Masukkan angka dan pilih operator perhitungan.
      </Text>

      {/* Input Angka Pertama */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan angka"
        placeholderTextColor="#94a3b8"
        value={angka1}
        onChangeText={setAngka1}
        keyboardType="decimal-pad"
      />

      {/* Pilihan Operator */}
      <View style={styles.operatorContainer}>
        {['+', '-', '×', '÷'].map((item) => (
          <Pressable
            key={item}
            style={[
              styles.operatorButton,
              operator === item && styles.operatorActive,
            ]}
            onPress={() => pilihOperator(item)}
          >
            <Text
              style={[
                styles.operatorText,
                operator === item && styles.operatorTextActive,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Input Angka Kedua */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan angka"
        placeholderTextColor="#94a3b8"
        value={angka2}
        onChangeText={setAngka2}
        keyboardType="decimal-pad"
      />

      {/* Tombol Hitung */}
      <Pressable style={styles.buttonHitung} onPress={hitung}>
        <Text style={styles.buttonText}>Hitung (=)</Text>
      </Pressable>

      {/* Hasil */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Hasil Perhitungan:</Text>
        <Text style={styles.resultText}>
          {hasil !== '' ? hasil : 'Belum ada hasil'}
        </Text>
      </View>

      {/* Tombol Reset */}
      <Pressable style={styles.buttonReset} onPress={reset}>
        <Text style={styles.buttonText}>Reset Kalkulator</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#0f172a',
    marginBottom: 15,
  },
  operatorContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  operatorButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  operatorActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  operatorText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#334155',
  },
  operatorTextActive: {
    color: '#ffffff',
  },
  buttonHitung: {
    backgroundColor: '#2563eb',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 7,
  },
  buttonReset: {
    backgroundColor: '#ef4444',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#e0f2fe',
    borderWidth: 1,
    borderColor: '#bae6fd',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0369a1',
    marginBottom: 8,
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
  },
});