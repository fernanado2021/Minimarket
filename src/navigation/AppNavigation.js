import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import {screen} from "../utils/ScreenName";
import RestaurantsStack from "./RestaurantsStack";
import FavoriteStack from "./FavoritesStack";
import RankingStack from "./RankingStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";
// Crear una instancia para la gestion de la navegacion
const Tab=createBottomTabNavigator();

export const AppNavigation=()=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            headerShown: false,
            tabBarActiveTintColor: '#3063cf',
            tabBarInactiveTintColor: '#b8bcc6',
            tabBarIcon:({color , size})=> screenOptions(route , color, size)
        })}>
            <Tab.Screen name={screen.restaurants.tab} component={RestaurantsStack} options={{title:"Restaurantes"}}/>
            <Tab.Screen name={screen.favorite.tab} component={FavoriteStack} options={{title:"Favoritos"}}/>
            <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{title:"Clasificación"}}/>
            <Tab.Screen name={screen.search.tab} component={SearchStack} options={{title:"Buscar"}}/>
            <Tab.Screen name={screen.account.tab} component={AccountStack} options={{title:"Cuenta"}}/>
        </Tab.Navigator>
    );
};
///// ICON /////
const screenOptions=(route , color , size)=>{
    let icoName;
    if (route.name == screen.restaurants.tab) {
        icoName="silverware";
    }
    if (route.name == screen.favorite.tab) {
        icoName="star-box";
    }   
    if (route.name ==screen.ranking.tab) {
        icoName="clipboard-list";
    }
    if (route.name == screen.search.tab) {
        icoName="magnify";
    }
    if (route.name == screen.account.tab) {
        icoName="account";
    }
    return(
        <Icon 
        type="material-community"
        name={icoName} 
        color={color} 
        size={size}/>
    )
}
