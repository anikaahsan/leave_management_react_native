import React from 'react'
import { useState } from 'react'
import {View,Text,Modal,Pressable} from 'react-native'
// import DateTimePicker from '@react-native-community/datetimepicker'
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';


const ModalCalendar=()=>{
    const [modalVisible,setModalVisible]=useState(false)
    const [date,setDate]=useState(null)
    return(
        <View>
            {/* <DateTimePicker
            date={date}
            isVisible={modalVisible} 
            mode='date'
            onCancel={()=>setModalVisible(false)} 
            onConfirm={(x)=>setDate(x)}/> */}
            <DateTimePicker value={date} mode='date'/>
            

            <Text>{date}</Text>
            <Pressable onPress={()=>setModalVisible(!modalVisible)}>
                <Text>show calendar</Text>
            </Pressable>
        </View>
    )
}
export default ModalCalendar