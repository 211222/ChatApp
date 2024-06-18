import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // o cualquier otra biblioteca de iconos que prefieras
import Evillcons from 'react-native-vector-icons/EvilIcons';
import { View, Text, StyleSheet, ImageBackground, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.imageContainer}>
            <ImageBackground source={require('../../infrestructure/assets/im1Ch.png')} style={styles.image}>
              <Text style={styles.textf}>MY CHAT</Text>
            </ImageBackground>
          </View>

          <Text style={styles.loginText}>Iniciar sesión{'\n'}</Text>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Evillcons name="user" size={35} color="#1E1E1E" style={styles.icon} />
            </View>
            <TextInput style={styles.inputUser} placeholder="Usuario" placeholderTextColor="#000000" />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={35} color="#1E1E1E" style={[styles.icon, { transform: [{ rotate: '-555deg' }] }]} />
            <TextInput style={styles.inputContra} placeholder="Contraseña" secureTextEntry={true} placeholderTextColor="#000000" />
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>¿Aún no tienes cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.signupText, { color: '#375de5',marginTop: 50, marginLeft: -125 }]}>REGÍSTRATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 100,
  },
  headerText: {
    fontSize: 32,
    color: '#000000',
    alignSelf: 'center',
    fontFamily: 'Gugi-Regular',
  },
  image: {
    width: 300, // Ajusta el tamaño según sea necesario
    height: 300, // Ajusta el tamaño según sea necesario
  },
  loginText: {
    fontSize: 24,
    color: '#000000',
    marginTop: -140,
    fontFamily: 'Gugi-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 56,
    backgroundColor: '#ffffff',
    marginBottom: 30, // Cambia este valor para aumentar la separación
    alignItems: 'center',
    borderRadius: 90,
    elevation: 3,
    borderColor: '#9967CE',
    borderWidth: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  icon:{
    color: '1010101',
    paddingHorizontal: 10
  },
 
  inputUser:{
    flex: 1, // Para que ocupe todo el espacio disponible
    height: '100%',
    color: '#848080',
    textAlign: 'left', // Alinea el texto a la izquierda dentro del TextInput
    textAlignVertical: 'center', // Centra verticalmente el texto dentro del TextInput
    fontSize: 20, // Ajusta el tamaño de la fuente
    paddingLeft: 70, 
    fontFamily: 'Gugi-Regular',
  },
  inputContra:{
    flex: 1, // Para que ocupe todo el espacio disponible
    height: '100%',
    color: '#848080',
    textAlign: 'center', 
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10, 
    fontFamily: 'Gugi-Regular',
  },

  label: {
    color: '#1e1e1e',
    marginBottom: 5,
  },
  buttonContainer: {
    width: 196,
    height: 52,
    backgroundColor: '#9967ce',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Gugi-Regular',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#000000',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Gugi-Regular', // Centra el texto horizontalmente
  },
  textf: {
    textAlign: 'center',
    color: 'black',
    fontSize: 32,
    fontFamily: 'Gugi-Regular', // Usa la fuente Gugi
  }
});

export default LoginScreen;