# School Automation App
---

## Instal
npx create-expo-app SchoolAutomationApp
npm install axios --save
npm install -g react-devtools
npm install react-native-vector-icons
npm install react-native-elements

cd SchoolAutomationApp
npx expo start
a => Android
j => Debug

------------------------------------------------------------------------------------------------
## BUILD
npx expo prebuild 

------------------------------------------------------------------------------------------------
# Google React Native Fire base
Google Firebase
https://firebase.google.com/


------------------------------------------------------------------------------------------------
#  React Native Fire base
https://rnfirebase.io/

npm install --save @react-native-firebase/app

/* React Native icin Ekledim android/build.gradle */
classpath 'com.google.gms:google-services:4.3.15'

/* React Native icin Ekledim android/app/build.gradle */
apply plugin: 'com.google.gms.google-services'
<!-- iconların görünmesi için eklemeliyiz -->
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

------------------------------------------------------------------------------------------------
# React Navigation
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
