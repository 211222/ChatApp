import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Evillcons from 'react-native-vector-icons/EvilIcons'; // o cualquier otra biblioteca de iconos que prefieras
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesing from 'react-native-vector-icons/AntDesign';
const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Agregar ImageBackground dentro del View principal */}
      <ImageBackground source={require('../../infrestructure/assets/im1Ch.png')} style={styles.image}>
        <Text style={styles.textf}>MY CHAT</Text>
      </ImageBackground>
      {/* Fin de ImageBackground */}
      
      <View style={styles.formContainer}>
        <Text style={styles.loginTex}>Registro{'\n'}</Text>

        <View style={styles.inputContainer}>
          <AntDesing name="adduser" size={35} color="#7f7f7f" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#7f7f7f" />
        </View>

        <View style={styles.inputContainer}>
          <AntDesing name="adduser" size={35} color="#7f7f7f" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Apellido" placeholderTextColor="#7f7f7f" />
        </View>

        <View style={styles.inputContainer}>
          <Evillcons name="envelope" size={35} color="#7f7f7f" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#7f7f7f" keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
        <Ionicons name="key-outline" size={35} color="#7f7f7f" style={[styles.icon, { transform: [{ rotate: '455deg' }] }]} />
          <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#7f7f7f" secureTextEntry={true} />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Login')} // Navega de regreso a la pantalla de login
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>Ya tienes una cuenta? </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')} // Navega a la pantalla de login
        >
          <Text style={[styles.signupText, { color: '#375de5',marginTop: 0, marginLeft: 29 }]}>REGÍSTRATE</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },

signupText: {
  fontFamily: 'Gugi-Regular',
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Gugi-Regular',
  },
  loginTex:{
    fontSize: 24,
    color: '#000000',
    fontFamily: 'Gugi-Regular',

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#9967CE',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    height: 56,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#1E1E1E',
    fontFamily: 'Gugi-Regular',
  },
  buttonContainer: {
    width: '90%',
    height: 52,
    backgroundColor: '#9967CE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    marginTop: 20, // Añadir un margen superior para separar el botón del último campo de entrada
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18, // Aumentar el tamaño del texto del botón
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%', // Ajustar el ancho para que coincida con el View principal
    alignItems: 'center', // Centrar los elementos horizontalmente
  },
  image: {
    width: '100%', // Ajustar el ancho según sea necesario
    height: 200, // Ajustar el alto según sea necesario
    justifyContent: 'center',
    alignItems: 'center',
  },
  textf: {
  textAlign: 'center',
  color: 'black',
  fontSize: 32,
  fontFamily: 'Gugi-Regular', // Usa la fuente Gugi
  marginTop: -200, //// Usa la fuente Gugi
  },
  loginText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default RegisterScreen;