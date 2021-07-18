import 'react-native-gesture-handler'
import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'

import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return <AppNavigation />
}
