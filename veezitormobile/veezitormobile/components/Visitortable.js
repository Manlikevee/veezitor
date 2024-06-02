import { StyleSheet, Text, TextInput, View,TouchableOpacity, FlatList  } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import  {Colors}  from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const Visitortable = ({data}) => {
    const colorScheme = useColorScheme();
    const visitors = [
        {
            "first_name": "burna",
            "last_name": "boy",
            "email": "Odahviktor@gmail.com",
            "phonenumber": 7013753576,
            "staff_id": {
                "first_name": "victor",
                "last_name": "odah",
                "email": "victor.odah@isslng.com",
                "middle_name": "ebube",
                "phone_number": 2347013753576,
                "gender": "Male",
                "staff_id": "0328086068",
                "organization": {
                    "ref": 9790358883,
                    "plan": {
                        "membership": {
                            "id": 2,
                            "planname": "Executive Plan",
                            "Planprice": 25000,
                            "plandescription": "Ideal for businesses requiring comprehensive reporting."
                        },
                        "active": true,
                        "start_at": "2024-05-29T06:46:35.153924Z",
                        "end_at": "2024-05-29T06:46:35.153927Z"
                    },
                    "active": true,
                    "organization_name": "Veetech",
                    "logo": "https://res.cloudinary.com/viktortech/image/upload/v1/media/profile_images/icon-white-deskotp_1__2_-removebg-preview_ysiiip"
                }
            },
            "reason": "veve",
            "visitation_type": "Vendor",
            "status": "pending_approval",
            "created_at": "2024-05-30T16:40:44.233764Z",
            "clock_in": "2024-05-30T16:40:44.233773Z",
            "clock_out": "2024-05-30T16:40:44.233778Z",
            "ref": 4433810298,
            "is_resheduled": false,
            "organization": {
                "ref": 9790358883,
                "plan": {
                    "membership": {
                        "id": 2,
                        "planname": "Executive Plan",
                        "Planprice": 25000,
                        "plandescription": "Ideal for businesses requiring comprehensive reporting."
                    },
                    "active": true,
                    "start_at": "2024-05-29T06:46:35.153924Z",
                    "end_at": "2024-05-29T06:46:35.153927Z"
                },
                "active": true,
                "organization_name": "Veetech",
                "logo": "https://res.cloudinary.com/viktortech/image/upload/v1/media/profile_images/icon-white-deskotp_1__2_-removebg-preview_ysiiip"
            },
            "stage_1": true,
            "stage_2": true,
            "stage_3": false,
            "stage_4": false,
            "stage_5": false
        },
      
    ]
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
      
        return `${day}/${month}/${year} ${hours}:${minutes}`;
      }
  return (

        <ThemedView style={styles.mytable} lightColor='transparent' darkColor='transparent'>
        <ThemedView 
         darkColor="#111111"
                  style={[
                    {
                      borderColor: Colors[colorScheme ?? "light"].cardborderColor,
                    },
                    styles.myinput,
                  ]}
        
        >
            <ThemedView style={styles.minicion}  darkColor="#111111">
            <EvilIcons name='search' size={25} style={{color:Colors[colorScheme ?? "light"].icon}} />
            </ThemedView>
       
            <TextInput style={{        paddingVertical: 5,
        backgroundColor:'transparent',
        width:'78%',
        fontFamily: 'OutfitLight',
        color:Colors[colorScheme ?? "light"].icon }}  placeholder='Search By Name'/>
            <ThemedView lightColor='#efefef' style={styles.minicion}>
            <MaterialCommunityIcons name='format-list-checkbox'  size={22}  style={{color:Colors[colorScheme ?? "light"].icon}}  />
            </ThemedView>
      
        </ThemedView>
        {data.length >= 1 &&  (
                    data.map((info, index) => (       
                        <TouchableOpacity key={index}>
                        <ThemedView
                         darkColor="#111111"
                        style={[
                            {
                              borderColor: Colors[colorScheme ?? "light"].cardborderColor,
                            },
                            styles.mbx,
                          ]}
                        >
                            <ThemedView  darkColor="#111111" style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                            <ThemedView  darkColor="#111111" style={{backgroundColor:'#fff2ea',  padding:7,    flexDirection: 'row',
                            alignSelf: 'flex-start', height: 39, width: 39, alignItems:'center', justifyContent:'center', borderRadius:50 }}>
                           <ThemedText lightColor='#93312b' darkColor='#93312b' >
                             {info?.first_name.charAt( 0)}
      {info?.last_name.charAt(0)}</ThemedText>
                           </ThemedView>
                           <ThemedText lightColor='#000' >{info?.first_name} {info?.last_name}</ThemedText>
                            </ThemedView>
                        
                        <ThemedView  darkColor="#111111" style={{justifyContent:'space-between', flexDirection:'row'}}>
                            <ThemedText style={styles.placeholder} lightColor='#000' >Email</ThemedText>
                            <ThemedText style={styles.actualtext} lightColor='#6b788e' >{info?.email}</ThemedText>
                        </ThemedView>
                        <ThemedView  darkColor="#111111" style={{justifyContent:'space-between', flexDirection:'row'}}>
                            <ThemedText style={styles.placeholder}  lightColor='#000' >Phone Number</ThemedText>
                            <ThemedText style={styles.actualtext}  lightColor='#000' >{info?.phonenumber}</ThemedText>
                        </ThemedView>
                        <ThemedView  darkColor="#111111" style={{justifyContent:'space-between', flexDirection:'row'}}>
                            <ThemedText style={styles.placeholder}  lightColor='#000' >Visiting</ThemedText>
                            <ThemedText style={styles.actualtext}  lightColor='#000' >{info?.staff_id?.first_name} {info?.staff_id?.last_name}</ThemedText>
                        </ThemedView>
                        
                        <ThemedView  darkColor="#111111" style={{justifyContent:'space-between', flexDirection:'row'}}>
                            <ThemedText style={styles.placeholder} lightColor='#000' >Status</ThemedText>
                            <ThemedText style={styles.actualtext} lightColor='#000' >Confirmation</ThemedText>
                        </ThemedView>
                        <ThemedView  darkColor="#111111"  style={{justifyContent:'space-between', flexDirection:'row'}}>
                            <ThemedText style={styles.placeholder} lightColor='#000' >Date</ThemedText>
                            <ThemedText style={styles.actualtext} lightColor='#000' >{formatDate(info?.clock_in)}</ThemedText>
                        </ThemedView>
                        
                        </ThemedView>
                        </TouchableOpacity>
                        
                        ))
        )}

        </ThemedView>
  

  )
}

export default Visitortable

const styles = StyleSheet.create({
    mytable:{
gap: 10
    },
    mbx:{
padding: 11,
borderWidth: 1,
gap: 9,
paddingVertical: 17,
borderRadius: 10
    },
    myinput:{
        flexDirection:'row',
        padding: 2,
        paddingVertical:8,
        gap: 2,
        borderWidth: 1,
        alignItems:'center',

    },
    minicion:{
        paddingVertical: 5,
        width:'10%',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 3
    }
})