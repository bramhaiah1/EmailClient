import React from "react";
import {
  SafeAreaView, View, Text, StyleSheet, ScrollView
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import AllProductsScreen from "../Screens/inbox";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import NavigationDrawerHeader from "../Components/NavigationDrawerHeader";
const defaultOptionsForStack = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#44bcd8",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 18,
    },
  },
};
const AllProductsStack = createStackNavigator(
  {
    AllProducts: {
      screen: AllProductsScreen,

      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Discover",
        
      }),
    },
  
  },

  defaultOptionsForStack
);

const Chat = createStackNavigator(
  {
    chat: {
      screen: AllProductsScreen,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "My Chats1"
      }),
    },
  },
  defaultOptionsForStack
);
const Logout = createStackNavigator(
  {
    logout: {
      screen: AllProductsScreen,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Logout"
      }),
    },
  },
  defaultOptionsForStack
);
const ImageupLoad = createStackNavigator({
  Imageupload: {
    screen: AllProductsScreen,
    navigationOptions: ({ navigation }) => ({


      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerTitle: "List My Product To Rent",
    }),
  },
}, defaultOptionsForStack);

const ProductRemove = createStackNavigator(
  {
    productRemove: {
      screen: AllProductsScreen,
      navigationOptions: ({ navigation }) => ({


        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Remove",
      }),

    },
  },
  defaultOptionsForStack
);

const NavigationDrawer = createDrawerNavigator({
  "All inboxes" : {
    screen: AllProductsStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="home" size={20} color={tintColor} />
      }
    }
  },

 
  "Primary": {
    screen: ImageupLoad,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="upload" size={20} color={tintColor} />
      }
    }
  },

  
  "Social": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="user-friends" size={22} backgroundColor={tintColor} />

      }
    }
  },
  "Promotions": {
    screen: Logout,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="tags" size={22} color={tintColor} />
      }
    }
  },
  "Starred": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="star" size={22} backgroundColor={tintColor} />

      }
    }
  },
  "Snoozed": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="snooze" size={22} backgroundColor={tintColor} />

      }
    }
  },
  "Important": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="comment-dots" size={22} backgroundColor={tintColor} />

      }
    }
  },
  "Sent": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="paper-plane" size={22} backgroundColor={tintColor} />

      }
    }
  },
  "Scheduled": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="comment-dots" size={22} backgroundColor={tintColor} />

      }
    }
  },
  "Drafts": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="comment-dots" size={22} backgroundColor={tintColor} />

      }
    }
  },
  
  "All emails": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="comment-dots" size={22} backgroundColor={tintColor} />

      }
    }
  },
  "Spam": {
    screen: Chat,

    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="comment-dots" size={22} backgroundColor={tintColor} />

      }
    }
  },
  
  
  
  "Bin": {
    screen: ProductRemove,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => {
        return <Icon name="fa-trash" size={20} color={tintColor} />

      }
    }
  },


},


  {
    contentComponent: (props) => (
      <SafeAreaView>
        <View style={stylesSidebar.sideMenuContainer}>
          <View style={stylesSidebar.profileHeader}>
            <View style={stylesSidebar.profileHeaderPicCircle}>
            <Icon name="envelope" size={22}  />
      
            </View>
            <Text style={stylesSidebar.profileHeaderText}>Gmail</Text>
          </View>

          <View style={stylesSidebar.profileHeaderLine} />
          <View style={{ width: "100%", flex: 1 }}>
            <ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  color: "white",
                  backgroundColor: "white",
                }}
              >
                <DrawerItems {...props} /></View>
            </ScrollView></View></View>
      </SafeAreaView>

    )
  });

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#44bcd8",
    paddingTop: 40,
    color: "Black",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#44bcd8",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "Black",
    backgroundColor: "#ffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "Black",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "Black",
    marginTop: 15,
    marginBottom: 10,
  },
});
const AppContainer = createAppContainer(NavigationDrawer);

export default AppContainer;
