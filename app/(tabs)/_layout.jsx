import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center w-[70px] gap-1" >
            <Image
              source={icon}
              resizeMode='contain'
              tintColor={color}
              className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold' :
            'font-pregular'} text-xs`} style={{ color: color }}> 
                {name}
            </Text>
        </View>
    )
}


const TabsLayout = () => {
  return (
    <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#ffa001',
            tabBarInactiveTintColor: '#cdcde0',
            tabBarStyle: {
                height: 70, // Increase tab bar height
                paddingBottom: 17, // Optional: space for icons/text
                paddingTop: 17,
                backgroundColor: '#000000',
                borderTopColor: '#232533',
                borderTopWidth: 1
                
              },
          }}
        
        
        >
           <Tabs.Screen
             name="home"
             options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                      icon={icons.home}
                      color={color}
                      name="Home"
                      focused={focused}

                    />
                )

             }}
            /> 
            <Tabs.Screen
             name="bookmark"
             options={{
                title: 'Bookmark',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                      icon={icons.bookmark}
                      color={color}
                      name="Bookmark"
                      focused={focused}

                    />
                )

             }}
            />
           <Tabs.Screen
             name="create"
             options={{
                title: 'Create',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                      icon={icons.plus}
                      color={color}
                      name="Create"
                      focused={focused}

                    />
                )

             }}
            /> 
           <Tabs.Screen
             name="profile"
             options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                      icon={icons.profile}
                      color={color}
                      name="Profile"
                      focused={focused}

                    />
                )

             }}
            /> 
            
        </Tabs>
    </>
  )
}

export default TabsLayout