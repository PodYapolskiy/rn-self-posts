import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle Drawer'
            iconName='ios-menu'
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    })
  })

  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
