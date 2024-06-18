import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS } from '../../component/Constant/Color';
import { FONTS } from '../../component/Constant/Font';
import Navigation from '../../../application/services/Navigation';
import database from '@react-native-firebase/database';
import SimpleToast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../application/Redux/reducer/user';
import Auth from '../../../application/services/Auth';
import { Card, Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [authCode, setAuthCode] = useState('');

  const loginUser = async () => {
    database()
      .ref('users/')
      .orderByChild('emailId')
      .equalTo(email)
      .once('value')
      .then(async (snapshot) => {
        if (snapshot.val() == null) {
          SimpleToast.show('Invalid Email Id!');
          return false;
        }
        let userData = Object.values(snapshot.val())[0];
        if (userData?.password != pass) {
          SimpleToast.show('Invalid Password!');
          return false;
        }

        // Verificación del código TOTP
     

        dispatch(setUser(userData));
        await Auth.setAccount(userData);
        SimpleToast.show('Login Successfully!');
      })
      .catch((e) => {
        SimpleToast.show(e.message);
      });
  };

 

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        backgroundColor={COLORS.theme}
        barStyle="light-content"
        hidden={false}
      />
      <View style={styles.inner}>
        <Image
          style={{ width: 300, height: 300, marginBottom: 100 }}
          source={require('../../../infrestructure/assets/im1Ch.png')}
        />
        <Text style={styles.textf}>MY CHAT</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Card
            containerStyle={{
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <Text style={styles.Login}>Iniciar Sesión</Text>

            <View style={[styles.inputContainer, { marginTop: 10 }]}>
              <View style={styles.inputIconView}>
                <Icon
                  name="gmail"
                  type="material-community"
                  color="#fff"
                  size={20}
                />
              </View>
              <TextInput
                style={styles.inputs}
                placeholder="E M A I L"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={(value) => {
                  setEmail(value.toLowerCase());
                }}
                value={email}
                placeholderTextColor={COLORS.liteBlack}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputIconView}>
                <Icon
                  name="key"
                  type="material-community"
                  color="#fff"
                  size={20}
                />
              </View>
              <TextInput
                style={styles.inputs}
                placeholder="C O N T R A S E Ñ A"
                underlineColorAndroid="transparent"
                onChangeText={(value) => {
                  setPass(value);
                }}
                value={pass}
                placeholderTextColor={COLORS.liteBlack}
              />
            </View>

            {/* Nuevo campo para el código de autenticación */}
            <View style={styles.inputContainer}>
              <View style={styles.inputIconView}>
                <Icon
                  name="lock"
                  type="material-community"
                  color="#fff"
                  size={20}
                />
              </View>
              <TextInput
                style={styles.inputs}
                placeholder="Código de Autenticación"
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                onChangeText={(value) => {
                  setAuthCode(value);
                }}
                value={authCode}
                placeholderTextColor={COLORS.liteBlack}
              />
            </View>

            <TouchableOpacity style={styles.btn} onPress={loginUser}>
              <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <View style={styles.contactView}>
              <Text style={styles.smallTxt}>¿No tienes cuenta?</Text>
              <TouchableOpacity
                style={{ marginLeft: 4 }}
                onPress={() => Navigation.navigate('Register')}
              >
                <Text style={styles.register}>Registrate</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  uppercard: {
    height: height / 4,
    backgroundColor: COLORS.theme,
    borderBottomLeftRadius: height / 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textf: {
    textAlign: 'center',
    color: 'black',
    fontSize: 32,
    fontFamily: 'Gugi-Regular', // Usa la fuente Gugi
  },
  logo: {
    height: height / 2 - 50,
    width: '95%',
    resizeMode: 'cover',
    borderRadius: 13,
  },
  loginBtn: {
    height: 48,
    width: '95%',
    backgroundColor: COLORS.theme,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  loginText: {
    color: COLORS.lightgray,
    fontSize: 18,
    fontFamily: FONTS.Regular,
  },
  buttonSec: { marginTop: 20, justifyContent: 'center', alignItems: 'center' },
  logo: {
    height: height / 2 - 50,
    width: '95%',
    resizeMode: 'cover',
    borderRadius: 13,
  },

  inputs: {
    borderBottomColor: COLORS.white,
    flex: 1,
    color: COLORS.black,
    paddingLeft: 10,
    fontFamily: FONTS.Regular,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 30,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom: 15,
    elevation: 2,
  },
  inputIconView: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.theme,
    height: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 2,
  },
  smallTxt: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: FONTS.Regular,
    marginTop: 10,
    opacity: 0.5,
    textAlign: 'center',
  },
  register: {
    fontSize: 13,
    fontFamily: FONTS.SemiBold,
    marginTop: 12,
    textAlign: 'center',
    color: COLORS.textInput,
    textDecorationLine: 'underline',
  },
  contactView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontFamily: FONTS.SemiBold,
    fontSize: 14,
    marginTop: 2,
  },
  btn: {
    backgroundColor: COLORS.theme,
    width: '100%',
    height: 50,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Login: {
    alignSelf: 'center',
    fontFamily: FONTS.Medium,
    color: COLORS.textInput,
    fontSize: 20,
    marginTop: 10,
  },
  cardView: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
});

