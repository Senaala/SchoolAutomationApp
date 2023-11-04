import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Card, Header } from 'react-native-elements'

const ListPages = () => {
    const[schoolAutomation,setSchoolAutomation] = useState([])

    const listFirebaseSchool = async()=>{
        const getFirebaseData = await firestore().collection('school_automation_collection').get()
        console.log(getFirebaseData);
        setSchoolAutomation(
            getFirebaseData.docs.map((temp)=>{
                return {...temp.data(),id:temp.id}
            }) 
        )
    }

    const deleteFirebaseSchool = async()=>{
        const deleteFirebaseData = await firestore().collection('school_automation_collection').doc(id).delete()
        console.log(deleteFirebaseData);
        listFirebaseSchool();        
    }

  return (

    <View>
      <Header
      leftComponent={{icon:'home',color:'red'}}
      placement='left'
      centerComponent={{text:'SCHOOLS'}}
      />
      <ScrollView>
        {
            schoolAutomation.map(temp=>{
                return(
                    <Card key={temp.id}>
                        <Card.Title>
                            {temp.name}
                        </Card.Title>
                    </Card>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default ListPages