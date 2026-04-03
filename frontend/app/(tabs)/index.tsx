import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bienvenido a TaskFlow</Text>
      <Text style={styles.subtitle}>
        Desde aquí puedes acceder a las funcionalidades principales de la aplicación.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/explore')}>
        <Text style={styles.buttonText}>Ir a Ubicación</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/camera')}>
        <Text style={styles.buttonText}>Ir a Cámara</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/login')}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1f3c88',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#1f6feb',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 14,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#d9534f',
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});