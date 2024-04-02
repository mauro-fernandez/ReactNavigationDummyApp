import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      {/* Si pongo estas props en "screenOptions" desde el Navigator,
          se aplica a todas las screens dentro del mismo.
          Si quiero una en particular, uso "options" dentro de la screen como por ejemplo con "title".
      */}
      <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'}
      }}>
        <Stack.Screen
          name='MealsCategories'
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
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
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
