import React from 'react'
import { useState } from 'react'
import {View,Text,Modal,Pressable} from 'react-native'
import { Calendar } from 'react-native-calendars'


const Calendars=()=>{
    const [date,setDate]=useState('')
    const [modalVisible ,setModalVisible]=useState(false)
    return(
        <View>
            <Pressable onPress={()=>setModalVisible(!modalVisible)}>
                <Text style={{fontSize:20}}>show modal</Text>
            </Pressable>
          
          <Modal animationType='slide'
                 visible={modalVisible}
                 transparent={false}
                 onRequestClose={()=>setModalVisible(!modalVisible)}>
          <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:150}}>
          <Calendar 
              calendarS
              onDayPress={(day)=>{setDate(day.dateString)}}
              markedDates={{[date]:{selected:true,selectedColor:'orange',disableTouchEvent:true}}}/>
           <Pressable onPress={()=>{setModalVisible(!modalVisible)}}>
            <Text>set</Text>
           </Pressable>
           </View>
           </Modal>   
          <Text  style={{fontSize:20}}>{date}</Text>
        </View>
    )
}
export default Calendars

// theme={{textSectionTitleColor:'blue',backgroundColor:'orange'}}