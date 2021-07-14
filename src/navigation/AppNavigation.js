import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteKey: 'Main', // Экран по умолчанию
    // Общие стили для скринов
    defaultNavigationOptions: {
      headerStyle: {
        // Стиль автоматически созданного хэдера
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
      },

      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
  }
)

export const AppNavigation = createAppContainer(PostNavigator)
