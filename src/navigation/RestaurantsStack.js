import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/ScreenName";
import RestaurantsScreen from "../screens/Restaurants/RestaurantsScreen";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurantScreen";

//instancia de componente
const Stack=createNativeStackNavigator();
const RestaurantsStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.restaurants.restaurants} 
                          component={RestaurantsScreen} 
                          options={{title:"Restaurantes"}} />
            <Stack.Screen name={screen.restaurants.addRestaurants}
                          component={AddRestaurantScreen}
                          options={{title:"Nuevo Restaurante"}}
            />
        </Stack.Navigator>
    )
};
export default RestaurantsStack;