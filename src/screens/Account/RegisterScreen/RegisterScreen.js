import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image } from '@rneui/themed';
import {styles} from "./RegisterScreen.styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../../components/Auth/RegisterForm/RegisterForm';

const RegisterScreen= () => {
  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../../assets/img/logo.png")} style={styles.image} />
      <View style={styles.content}>
        <RegisterForm/>      
      </View>
    </KeyboardAwareScrollView>
  )
}

export default RegisterScreen;