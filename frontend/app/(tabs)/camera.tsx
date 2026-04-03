import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Text, View } from 'react-native';

export default function CameraScreen() {

  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Se necesita permiso para usar la cámara</Text>
        <Button title="Permitir cámara" onPress={requestPermission} />
      </View>
    );
  }

  return <CameraView style={{flex:1}} />;
}