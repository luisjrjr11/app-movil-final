import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import * as Location from 'expo-location';

export default function ExploreScreen() {
  const [locationText, setLocationText] = useState('Aún no se ha obtenido la ubicación.');

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'No se concedió acceso a la ubicación.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setLocationText(`Latitud: ${latitude}\nLongitud: ${longitude}`);
    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener la ubicación.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ubicación actual</Text>
      <Text style={styles.info}>{locationText}</Text>

      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Obtener ubicación</Text>
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
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1f3c88',
    marginBottom: 20,
  },
  info: {
    textAlign: 'center',
    fontSize: 16,
    color: '#444',
    marginBottom: 24,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1f6feb',
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});