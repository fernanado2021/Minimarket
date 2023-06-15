import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/ScreenName";
import RankingScreen from "../screens/RankingScreen";

//instancia de componente
const Stack=createNativeStackNavigator();
const RankingStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.ranking.ranking} 
                          component={RankingScreen} 
                          options={{title:"Clasificación"}} />
        </Stack.Navigator>
    )
};
export default RankingStack;