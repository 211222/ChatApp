import React, {useState} from 'react';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../component/Constant/Color';
import {FONTS} from '../../component/Constant/Font';
import Navigation from '../../../application/services/Navigation';
import uuid from 'react-native-uuid';
import SimpleToast from 'react-native-simple-toast';
import database from '@react-native-firebase/database';
import {Card, Icon} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

function Register() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [about, setabout] = useState('');

  const registerUser = async () => {
    if (name == '' || email == '' || pass == '' || about == '') {
      SimpleToast.show('Fill in all the fields!');
      return false;
    }
    let data = {
      id: uuid.v4(),
      name: name,
      emailId: email,
      password: pass,
      about: about,
      img: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    };

    database()
      .ref('/users/' + data.id)
      .set(data)
      .then(() => {
        SimpleToast.show('Registro exitoso!');
        setname('');
        setemail('');
        setpass('');
        setabout('');
        Navigation.navigate('Login');
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        backgroundColor={COLORS.theme}
        barStyle="light-content"
        hidden={false}
      />
      <View style={styles.container}>
        <Image
          style={{  width: '100%', // Ajustar el ancho según sea necesario
            height: 200, // Ajustar el alto según sea necesario
            justifyContent: 'center',
            alignItems: 'center'}}
          source={require('../../../infrestructure/assets/im1Ch.png')}
        />
        <Text style={styles.textf}>
          MY CHAT
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flex: 1, justifyContent: 'center'}}
          showsVerticalScrollIndicator={false}>
          <Card
            containerStyle={{
              borderRadius: 10,
              elevation: 5,
            }}>
            <Text style={styles.Login}>Registro</Text>
            <Text style={styles.smallTxt}>
              
            </Text>
            <View style={[styles.inputContainer, {marginTop: 10}]}>
              <View style={styles.inputIconView}>
                <Icon name="person" type="ionicon" color="#fff" size={20} />
              </View>
              <TextInput
                style={styles.inputs}
                placeholder="N O M B R E"
                underlineColorAndroid="transparent"
                onChangeText={value => setname(value)}
                value={name}
                placeholderTextColor={COLORS.liteBlack}
              />
            </View>
            <View style={styles.inputContainer}>
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
                underlineColorAndroid="transparent"
                onChangeText={value => setemail(value)}
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
                onChangeText={value => setpass(value)}
                value={pass}
                placeholderTextColor={COLORS.liteBlack}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputIconView}>
                <Icon
                  name="information-circle"
                  type="ionicon"
                  color="#fff"
                  size={20}
                />
              </View>
              <TextInput
                style={styles.inputs}
                placeholder="U S U A R I O"
                underlineColorAndroid="transparent"
                onChangeText={value => setabout(value)}
                value={about}
                placeholderTextColor={COLORS.liteBlack}
              />
            </View>

            <TouchableOpacity style={styles.btn} onPress={registerUser}>
              <Text style={styles.btnText}>Registrar</Text>
            </TouchableOpacity>

            <View style={styles.contactView}>
              <Text style={styles.smallTxt}>¿Ya tienes una cuenta?</Text>
              <TouchableOpacity
                style={{marginLeft: 4}}
                onPress={() => Navigation.navigate('Login')}>
                <Text style={styles.register}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
      },
  logo: {
    height: height / 2 - 50,
    width: '95%',
    resizeMode: 'cover',
    borderRadius: 13,
  },
  textf: {
    textAlign: 'center',
    color: 'black',
    fontSize: 32,
    fontFamily: 'Gugi-Regular', // Usa la fuente Gugi
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
  buttonSec: {marginTop: 20, justifyContent: 'center', alignItems: 'center'},
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
    borderRadius: 30,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom: 10,
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
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
});