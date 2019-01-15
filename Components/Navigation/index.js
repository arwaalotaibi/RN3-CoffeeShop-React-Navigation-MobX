import {createStackNavigator, createAppContainer} from "react-navigation"
import HomePage from "../HomePage";

import CoffeeList from "../CoffeeList"
import CoffeeDetail from "../CoffeeDetail"
import Login from "../Login"
import CoffeeCart from "../CoffeeCart";
const index = createStackNavigator(
    {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    LoginScreen : Login ,
    CoffeeCart : CoffeeCart, 
    }
    ,
     {
    initialRouteName: "LoginScreen",

    navigationOptions:{
        headerTintColor: "white",
        headerStyle: {
            backgroundColor :"transparent"
        },
        headerTextStyle:{
            fontWeight:"bold"
        }
    }
  }
  
);

const NavContainer = createAppContainer(index)

export default NavContainer;