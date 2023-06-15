import React from "react";
import { View,Text } from "react-native";
import { Button} from "@rneui/base";
import { screen } from "../../utils/ScreenName";

export default  RestaurantsScreen=(props)=>{
    const {navigation} = props;

    const goToAddRestaurant=()=>{
        // console.log("Ir a creacion de restautante");
        navigation.navigate(screen.restaurants.addRestaurants);
        // navigation.navigate(screen.account.tab, {screen: screen.account.account});
    }
    return(
        <View>
            <Button title="Crear Restaurante" onPress={goToAddRestaurant}></Button>
            <Text>Estamos desde la Screen de Restaurantes</Text>
        </View>
    );
};