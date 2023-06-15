import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/ScreenName";
import FavoriteScreen from "../screens/FavoriteScreen";

//instancia de componente
const Stack=createNativeStackNavigator();
const FavoriteStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.favorite.favorite} 
                          component={FavoriteScreen} 
                          options={{title:"Favoritos"}} />
        </Stack.Navigator>
    )
};
export default FavoriteStack;