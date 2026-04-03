import * as Location from 'expo-location';
import { Alert, Button, View } from 'react-native';

export default function HomeScreen() {

  const obtenerUbicacion = async () => {

    const permiso = await Location.requestForegroundPermissionsAsync();

    if (permiso.status !== "granted") {
      Alert.alert("Permiso denegado");
      return;
    }

    const ubicacion = await Location.getCurrentPositionAsync({});

    Alert.alert(
      "Ubicación obtenida",
      "Latitud: " + ubicacion.coords.latitude +
      "\nLongitud: " + ubicacion.coords.longitude
    );
  };

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

      <Button
        title="Obtener ubicación"
        onPress={obtenerUbicacion}
      />

    </View>
  );
}