import { View, Text } from 'react-native'
import { Input, Icon, Button } from '@rneui/themed'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Image } from '@rneui/base';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { styles } from './UserLoggedScreen.styles'
import {screen} from "../../utils/ScreenName"

const UserLoggedScreen=()=>{

  const navigation = useNavigation();

  const goToAccount=()=>{
    // console.log("Ir a creacion de restautante");
    navigation.navigate(screen.account.login);
    // navigation.navigate(screen.account.tab, {screen: screen.account.account});
  }

  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../assets/img/logo.png")} style={styles.image} />
      <Text style={styles.title} >Bienvenido a tu aplicacion</Text>
      <Button style={styles.button} onPress={goToAccount}>Salir</Button>
    </KeyboardAwareScrollView>
  );
};

export default UserLoggedScreen;