import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'

import { THEME } from '../theme'

// https://reactnavigation.org/docs/hello-react-navigation

const screenOptions = {
  // Общая View'ха
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
  },
  // Стиль общий для заголовка и кнопки назад
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  // Текстовые стили
  headerTitleStyle: {
    fontFamily: 'open-bold',
  },
}

// Стек между главным скрином и скрином поста
const PostStack = createStackNavigator()

const PostStackScreen = ({ navigation }) => {
  return (
    <PostStack.Navigator screenOptions={screenOptions}>
      <PostStack.Screen
        name='Main'
        component={MainScreen}
        options={{
          title: 'Мой блог',
        }}
      />
      <PostStack.Screen
        name='Post'
        component={PostScreen}
        options={({ route }) => ({
          title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
        })}
      />
    </PostStack.Navigator>
  )
}

// Стек между скрином избранных и скрином поста
const BookedStack = createStackNavigator()

const BookedStackScreen = ({ navigation }) => {
  return (
    <BookedStack.Navigator screenOptions={screenOptions}>
      <BookedStack.Screen
        name='Booked'
        component={BookedScreen}
        options={{
          title: 'Избранное',
        }}
      />
      <BookedStack.Screen
        name='Post'
        component={PostScreen}
        options={({ route }) => ({
          title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
        })}
      />
    </BookedStack.Navigator>
  )
}

// Нижняя навигация, стиль которой зависит от платформы.
// Связывает PostStack и BookedStack
const BookedBottomTab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator()

const BookedBottomTabScreen = ({ navigation }) => {
  return (
    <BookedBottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName

          if (route.name === 'Post') {
            iconName = 'ios-albums'
          } else {
            iconName = 'ios-star'
          }

          return <Ionicons name={iconName} size={22} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        inactiveTintColor: 'gray',
      }}
      shifting={true} // Иконки выскакивают и появляется текст при нажатии
      barStyle={{
        backgroundColor: THEME.MAIN_COLOR,
      }}
    >
      <BookedBottomTab.Screen
        name='PostStack'
        component={PostStackScreen}
        options={{
          title: 'Мой блог',
          tabBarLabel: 'Все',
        }}
      />
      <BookedBottomTab.Screen
        name='BookedStack'
        component={BookedStackScreen}
        options={{
          title: 'Мой блог',
          tabBarLabel: 'Избранное',
        }}
      />
    </BookedBottomTab.Navigator>
  )
}

const AboutStack = createStackNavigator()

const AboutStackScreen = ({ navigation }) => {
  return (
    <AboutStack.Navigator screenOptions={screenOptions}>
      <AboutStack.Screen
        name='About'
        component={AboutScreen}
        options={{
          title: 'О приложении',
        }}
      />
    </AboutStack.Navigator>
  )
}

const CreateStack = createStackNavigator()

const CreateStackScreen = ({ navigation }) => {
  return (
    <CreateStack.Navigator screenOptions={screenOptions}>
      <CreateStack.Screen
        name='Create'
        component={CreateScreen}
        options={{
          title: 'Создать пост',
        }}
      />
    </CreateStack.Navigator>
  )
}

const MainDrawer = createDrawerNavigator()

export const AppNavigation = () => (
  <NavigationContainer>
    <MainDrawer.Navigator
      drawerStyle={{
        width: '60%',
      }}
      drawerContentOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        labelStyle: {
          fontFamily: 'open-bold',
        },
      }}
    >
      <MainDrawer.Screen
        name='BookedBottomTab'
        component={BookedBottomTabScreen}
        options={{
          drawerLabel: 'Главная',
          // drawerIcon: () => <Ionicons name='ios-star'/>
        }}
      />
      <MainDrawer.Screen
        name='AboutStack'
        component={AboutStackScreen}
        options={{
          drawerLabel: 'О приложении',
        }}
      />
      <MainDrawer.Screen
        name='CreateStack'
        component={CreateStackScreen}
        options={{
          drawerLabel: 'Новый пост',
        }}
      />
    </MainDrawer.Navigator>
  </NavigationContainer>
)
