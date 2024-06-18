import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const { userData } = useSelector(state => state.User);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
    if (auth().currentUser) {
      auth().signOut()
        .then(() => {
          console.log('Usuario cerrado sesión');
          setUserLoggedIn(false);
          navigation.navigate('Login'); // Redirige a la pantalla de login
        })
        .catch(error => {
          console.error('Error cerrando sesión: ', error);
        });
    } else {
      console.log('No hay usuario autenticado');
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
        navigation.navigate('Login'); // Redirige a la pantalla de login si no hay usuario autenticado
      }
    });

    return subscriber;
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>MY CHAT</Text>
      <View style={styles.rightSection}>
        <Icon
          name="notifications"
          type="ionicon"
          color="#00aced"
          containerStyle={{ marginRight: 7 }}
        />
        <Avatar source={{ uri: userData?.img }} rounded size="small" />
        {userLoggedIn && (
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    elevation: 2,
    paddingVertical: 15,
  },
  logo: {
    fontFamily: 'Gugi-Regular',
    color: '#00aced',
    fontSize: 22,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#00aced',
    borderRadius: 5,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
