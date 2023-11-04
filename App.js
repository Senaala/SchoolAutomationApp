//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Sayfalar
import HomePages from './src/components/HomePages';
import CreatePages from './src/components/CreatePages';
//Icons
import { Icon } from 'react-native-elements';



//Function
 function App() {
  const tab=createBottomTabNavigator();
  return (
    
    <NavigationContainer>
      <tab.Navigator 
      initialRouteName='Home'
      screenOptions={
        {
          headerShown:true,
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'tomato',
        }
      }>
        {/* Tab için geçiş bileşenleri */}
        <tab.Screen 
        name='Home' 
        component={HomePages}
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({color,size})=>(
            <Icon name='home' color={color} size={size} />
          )
        }}
        />

        <tab.Screen 
        name='CreatePages' 
        component={CreatePages}
        options={{
          tabBarLabel:'Create',
          tabBarIcon:({color,size})=>(
            <Icon name='create' color={color} size={size} />
          )
        }}
        />
        
      </tab.Navigator>
    </NavigationContainer>
   
  );
}

export default  App