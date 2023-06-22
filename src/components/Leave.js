import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'

const Leave=({navigation})=>{
    return(
        <View style={{backgroundColor:'ghostwhite',flex:1,}}>
        <View style={{margin:20,marginTop:25}}>

            <TouchableOpacity style={{ backgroundColor:'white',flexDirection:'row',padding:10,alignItems:'center',borderRadius:10}}>
                <View style={{marginRight:20}}>
                    <Image source={require('../assets/kingfisher.jpg')} style={{height:75,width:75,borderRadius:50}}/>
                </View>
                <View>
                    <Text style={{fontSize:22,fontWeight:'bold',color:'black'}}>Dina kusuma Nagari</Text>
                    <Text style={{fontSize:17}}>Business Executive</Text>
                </View>
            </TouchableOpacity>

            <View style={{backgroundColor:'white',marginTop:30,borderRadius:10}}>
                <View style={{padding:17,flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Mar 1,2018-Mar 3,2018</Text>
                        <Text style={{fontSize:16,}}>Annual leave 3 days</Text>
                    </View>
                    <View >
                        <Image source={require('../assets/check.png')} style={{height:49,width:49,borderRadius:50}}/>
                    </View>
                </View>
                <View style={{backgroundColor:'lightgrey',height:1}}></View>
                <View style={{padding:17,flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Jun 1,2018-June 3,2018</Text>
                        <Text style={{fontSize:16}}>Annual leave 3 days</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/checked.png')} style={{height:50,width:50,borderRadius:50}}/>
                    </View>
                </View>
                <View style={{backgroundColor:'lightgrey',height:1}}></View>
                <TouchableOpacity style={{padding:17,alignSelf:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'slateblue'}}>See History</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity 
                           onPress={()=>navigation.navigate('requestleave')}
                           style={{backgroundColor:'slateblue',height:60,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:30}}> 
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Request Leave</Text>
            </TouchableOpacity>

            <View style={{backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',height:85,borderRadius:10,alignItems:'center',marginTop:30}}>
                <View style={{alignItems:'center'}}>
                  <Text  style={{fontSize:17,fontWeight:'bold',color:'black'}}>Available</Text>
                  <Text  style={{fontSize:17,}}>7 days</Text>
                </View>
                <View style={{backgroundColor:'lightgray',height:85,width:1}}></View>
                <View style={{alignItems:'center'}}>
                    <Text  style={{fontSize:17,fontWeight:'bold',color:'black'}}>Expired</Text>
                    <Text  style={{fontSize:17,}}> June 1,2019</Text>
                </View>
            </View>

        </View>
        </View>
    )
}
export default Leave