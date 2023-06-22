import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Leave from './src/components/Leave'
import Approvalstatus from './src/components/ApprovalStatus'
import RequestLeave from './src/components/RequestLeave'
import Calendars from './src/components/Calendars'
import { Modal } from 'react-native'
import ModalCalendar from './src/components/ModalCalendar'



const App=()=>{
    const Stack=createNativeStackNavigator()
    return(
  
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='leave' component={Leave}/>
              <Stack.Screen name='approvalstatus' component={Approvalstatus}/>
              <Stack.Screen name='requestleave' component={RequestLeave}/>

            </Stack.Navigator>
          </NavigationContainer>
    )
}
export default App