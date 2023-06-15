//rnf + tab
import React from 'react';
import { ScrollView } from 'react-native';
import { Text , Button , Image } from '@rneui/themed';
import {styles} from "./UserGuestScreen.styles";
import {screen} from "../../../utils/ScreenName";
import { useNavigation } from '@react-navigation/native';  ///para hacer una navegacion mas rapidda

const UserGuestScreen=()=>{
  
  const navigation = useNavigation();
  const goToLoging=()=>{
    navigation.navigate(screen.account.login);
  }
  return (
    <ScrollView contentContainerStyle={{flex:1, justifyContent: 'center'}} style={styles.viewBody}>
      <Image source={require("../../../../assets/img/user-guest.png")} style={styles.image} />
      <Text style={styles.title}>Consultar tu perfil de Minimarket</Text>
      <Text style={styles.description}>¿Como describirias a tu mejor Minimarket? Busca y visualiza el mejor minimarket cerca de ti</Text>
      <Button buttonStyle={styles.btnStyle} title={"Ver tu perfil"} onPress={goToLoging} />
    </ScrollView>
  );
};

export default UserGuestScreen;