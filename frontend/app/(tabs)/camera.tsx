import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);

  const openCamera = async () => {
    if (!permission?.granted) {
      const result = await requestPermission();

      if (!result.granted) {
        Alert.alert('Permiso denegado', 'No se concedió acceso a la cámara.');
        return;
      }
    }

    setShowCamera(true);
  };

  if (showCamera) {
    return <CameraView style={{ flex: 1 }} facing="back" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cámara del dispositivo</Text>
      <Text style={styles.info}>
        Presiona el botón para habilitar y visualizar la cámara.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.buttonText}>Abrir cámara</Text>
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