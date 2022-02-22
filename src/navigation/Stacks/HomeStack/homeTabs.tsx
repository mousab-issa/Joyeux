import React from 'react';
import { StyleSheet, View } from 'react-native';

import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MartialStatusScreen from 'src/screens/MartialStatus/MartialStatusScreen';
import { IS_IPHONE_X } from 'src/lib/helpers/utils';
import { SvgIcon, TabBarAdvancedButton } from 'src/components';
import { Text } from 'react-native-svg';
import { theme } from 'src/common/theme/theme';
import { HEIGHT } from 'src/common/constants';

const BottomBar = createBottomTabNavigator();

type Props = {
    barColor: string;
};

export const HomeTabs: React.FC<Props> = ({ barColor }) => (

    <BottomBar.Navigator

        tabBar={(props) => (
            <View style={styles.navigatorContainer}>
                <BottomTabBar
                    {...props}
                />
                {IS_IPHONE_X && (
                    <View style={[styles.xFillLine, {
                        backgroundColor: barColor
                    }]} />
                )}
            </View>
        )}
        screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: theme.Colors.primaryDark,
            tabBarStyle: styles.navigator,
        }}
    >
        <BottomBar.Screen
            name="Home"
            component={MartialStatusScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <SvgIcon
                        name="home"
                        height={20}
                        width={20}
                    />
                )
            }}
        />
        <BottomBar.Screen
            name="Portfolio"
            component={MartialStatusScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <SvgIcon
                        name="money-bag"
                        height={20}
                        width={20}
                    />
                )
            }}
        />
        <BottomBar.Screen
            name="SendGift"
            component={MartialStatusScreen}
            options={{
                tabBarButton: (props) => (
                    <>
                        <TabBarAdvancedButton
                            bgColor={barColor}
                            {...props}
                        />
                        <Text>d</Text>
                    </>
                )
            }}
        />
        <BottomBar.Screen
            name="Events"
            component={MartialStatusScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <SvgIcon
                        name="events"
                        height={20}
                        width={20}
                    />
                )
            }}
        />
        <BottomBar.Screen
            name="Messages"
            component={MartialStatusScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <SvgIcon
                        height={20}
                        width={20}
                        name="memories"
                    />
                )
            }}
        />
    </BottomBar.Navigator>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigatorContainer: {
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    navigator: {
        height: 80,
        borderTopWidth: 0,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: '#1B9386',
        elevation: 1,
        marginHorizontal:20
    },
    xFillLine: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 34
    }
});