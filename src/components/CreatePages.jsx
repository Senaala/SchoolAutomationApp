import { View } from 'react-native'

//React ve State
import React, { useState } from 'react'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import { Button,Input,Text } from 'react-native-elements'

//Create person
const CreatePages = ({navigation}) => {
  //STATE
  const[schoolAutomation,setSchoolAutomation]=useState({
    name:'',
    surname:'',
    type:'school_type'
  })//end state

  const refleshFormData=() =>{
    setSchoolAutomation({
    name:'',
    surname:'',
    type:'school_type'
  })
  }
  //Firestore a veri göndermek
  const createFirebaseSchool=async(data)=>{
   try{
    //Not:Firebase collection da yazılan yeri collectiona yazdım.
    await firestore().collection('school_automation_collection').add(data)
    console.log('Veri eklendi.')
    refleshFormData()
    navigation.navigate('home')
   }
   catch(err){
    console.log(err);
   }
  }

  return (
    <View>
      <Text>CreatePages</Text>
      <Input 
       placeholder='Adınız'
      leftIcon={{type:'font-awesome',name:'home'}}
      value={schoolAutomation.name}
       onChangeText={ 
         (temp)=>{ 
           setSchoolAutomation(
             { ...schoolAutomation, name: temp })}
       }
      /> 
        <Input
      placeholder='Soyadınız'
      leftIcon={{type:'font-awesome',name:'home'}}
      value={schoolAutomation.surname}
      onChangeText={
        (temp)=>{
          setSchoolAutomation(
            { ...schoolAutomation, surname: temp })}
      }
      /> 
      <Button title='Gönder' onPress={()=>{ createFirebaseSchool(schoolAutomation)}}/>
    </View>
  )
}

export default CreatePages