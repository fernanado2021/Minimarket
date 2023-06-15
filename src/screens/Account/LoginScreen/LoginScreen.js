import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Image } from '@rneui/themed';
import {styles} from "./LogingScreen.styles";
import { useNavigation   } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {screen} from "../../../utils/ScreenName"
import LoginForm from '../../../components/Auth/LoginForm/LoginForm';

const LoginScreen= () => {

  const navigation = useNavigation();
  const goToRegister=()=>{
    navigation.navigate(screen.account.register);
  }

  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../../assets/img/logo.png")} style={styles.image} />
      <LoginForm/>
      <View style={styles.content}>
        <Text style={styles.register}>
          ¿Aun no tienes una cuenta? <Text style={styles.description} onPress={goToRegister}>Registrate</Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreen;