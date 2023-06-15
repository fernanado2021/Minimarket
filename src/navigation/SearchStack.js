import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/ScreenName";
import SearchScreen from "../screens/SearchScreen";

//instancia de componente
const Stack=createNativeStackNavigator();
const SearchStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.search.search} 
                          component={SearchScreen} 
                          options={{title:"Buscar"}} />
        </Stack.Navigator>
    )
};
export default SearchStack;