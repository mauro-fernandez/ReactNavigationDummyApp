import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      headerTitleAlign: 'center',
      drawerContentStyle: { backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e2b497',
    }}>
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />
          }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />
          }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <FavoritesContextProvider>
      <NavigationContainer>
        {/* Si pongo estas props en "screenOptions" desde el Navigator,
            se aplica a todas las screens dentro del mismo.
            Si quiero una en particular, uso "options" dentro de la screen como por ejemplo con "title".
        */}
        <Stack.Navigator screenOptions={{
              headerStyle: { backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
              headerTitleAlign: 'center'
        }}>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
            headerShown: false
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          //  options={({route, navigation})=> {
          //   const catId = route.params.categoryId
          //    return {
          //      title: catId
          //    }
          //  }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={{
              title: 'About the meals',
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
