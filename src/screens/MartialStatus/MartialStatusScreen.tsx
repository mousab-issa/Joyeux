import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity, View
} from 'react-native';
import React, { FC } from 'react';
import {
    MainGradient,
    SecondaryGradient,
    theme
} from 'src/common/theme/theme';
import { SvgIcon } from 'src/components';
import { HomeScreenContainer } from 'src/containers';
import LinearGradient from 'react-native-linear-gradient';
import Constants from 'src/common/constants';
import { CommonStyles } from 'src/common/styles';


const HomeIconCard: FC<{ title: string, desc: string, icon: string }> = ({ title, desc, icon }) => {
    return (
        <View style={[
            styles.commonCardSty, {
                borderColor: 'white',
                backgroundColor: '#10675F',
            }]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <SvgIcon
                    color='white'
                    name={icon}
                    height={39}
                    width={39}
                />
            </View>

            <View style={{ flex: 2, padding: 20 }}>
                <Text style={[styles.h2, { color: "#FFD317" }]}>
                    {title}
                </Text>
                <Text style={[styles.p, { color: "white", fontWeight: 'bold' }]}>
                    {desc}
                </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <SvgIcon
                    height={20}
                    width={20}
                    name={'arrow-right-white'}
                />
            </View>
        </View>
    )
}

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 25 }}>
            <View style={{ flex: 1, }}>
                <SvgIcon
                    name="menu"
                    height={20}
                    width={20}
                />
            </View>
            <View style={{ flex: 2, alignItems: 'center', }}>
                <SvgIcon
                    name="logo"
                    height={51}
                    width={51}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <SvgIcon
                    name="notification"
                    height={20}
                    width={20}
                />

            </View>
        </View>

    )
}

const AddButtn: FC<{ onClick: () => any, title: string }> = ({ onClick, title }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={SecondaryGradient}
                style={[styles.addButton]}>
                <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const FriendCard: FC<any> = () => {
    return (<>
        <View
            style={{
                height: 88,
                width: 80,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: "center"
            }} >
            <Image
                style={{ borderRadius: 20, height: '100%', width: '100%' }}
                source={{
                    uri: 'https://randomuser.me/api/portraits/men/75.jpg',
                }}
            />
            <LinearGradient
                colors={['#F44E4E', '#FA709A']}
                style={{
                    height: 25,
                    width: 25,
                    borderRadius: 25 / 2,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#FA709A"
                }}>
                <View style={{
                    ...CommonStyles.boxShadow,
                    shadowColor: '#171717A2'
                }}>

                    <SvgIcon
                        height={15}
                        width={15}
                        name="cake"
                    />
                </View>
            </LinearGradient>
        </View>
    </>)
}

const InvesmentCard: FC<any> = () => {
    return (
        <View
            style={{
                height: 88,
                width: 80,
                backgroundColor: theme.Colors.primaryDark,
                marginHorizontal: 10,
                borderRadius: 20,
                alignItems: "center",
                display: "flex",
                padding: 10
            }}>
            <View style={{ flex: 2 }}>
                <SvgIcon
                    name='gold'
                    height={43}
                    width={43}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={[styles.p, { color: "white", fontWeight: "bold" }]}>Digital Gold</Text>
            </View>

        </View>
    )
}

const HorizontalView = () => {
    return (
        <View
            style={[styles.commonCardSty, {
                borderColor: theme.Colors.secondary,
                alignItems: 'center',
                backgroundColor: theme.Colors.secondary,
            }]}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {Array.from({ length: 20 }).map((item, i) => {
                    return <FriendCard key={i} />
                })}
            </ScrollView>
        </View>

    )
}

const InvesmentView = () => {
    return (
        <View
            style={[styles.commonCardSty, {
                borderColor: theme.Colors.secondary,
                alignItems: 'center',
                backgroundColor: theme.Colors.secondary,
            }]}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {Array.from({ length: 20 }).map((item, i) => {
                    return <InvesmentCard key={i} />
                })}
            </ScrollView>
        </View>

    )
}

const MartialStatusScreen = () => {
    return (
        <HomeScreenContainer >
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.row}>
                    <View style={styles.carouselCard}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <SvgIcon
                                name="wallet"
                                height={31}
                                width={31}
                            />
                        </View>
                        <View style={{ flex: 1.3, padding: 20 }}>
                            <Text style={[styles.p, { color: 'white' }]}>Total Balance</Text>
                            <Text style={styles.h1}>$100</Text>
                        </View>
                        <View style={{ height: '70%', borderWidth: .3, borderColor: theme.Colors.secondary, alignSelf: 'center' }} />
                        <View style={{ flex: 2, padding: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={[styles.p, { color: 'white' }]}>Profits</Text>
                                <Text style={styles.h3}>+0%</Text>
                            </View>
                            <AddButtn title="Add" onClick={() => console.log('hello')} />
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View
                        style={[styles.commonCardSty, {
                            backgroundColor: '#10675F',
                            borderColor: theme.Colors.secondary,
                        }]}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={MainGradient}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: "#FBA12C"
                            }}
                        >
                            <SvgIcon
                                name="gift"
                                height={36}
                                width={36}
                            />
                        </LinearGradient>
                        <View style={{ flex: 3, padding: 20 }}>
                            <Text style={[styles.h2, { color: "#FFD317" }]}>
                                Gift your Loved
                            </Text>
                            <Text style={[styles.p, { color: "white", fontWeight: 'bold' }]}>
                                Bring smiles on your loved ones
                            </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={MainGradient}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: "#FBA12C",
                                    height: 32,
                                    width: 32,
                                    borderRadius: 7
                                }}
                            >
                                <SvgIcon
                                    height={20}
                                    width={20}
                                    name="arrow-right-white"
                                />
                            </LinearGradient>
                        </View>

                    </View>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={[styles.h2, { color: 'white' }]}>Up coming Events</Text>
                </View>

                <View style={styles.row}>
                    <Text style={{
                        fontSize: 14,
                        marginBottom: 10,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>My Family Events</Text>
                    <HomeIconCard title='Create New event' desc='Bring smiles on your loved ones' icon='celebration' />
                </View>


                <View style={[styles.row,]}>
                    <Text style={{
                        fontSize: 14,
                        marginBottom: 10,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Friends Celebration</Text>
                    <HorizontalView />
                </View>

                <View style={[styles.row,]}>
                    <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Friends Celebration</Text>
                    <HorizontalView />
                </View>

                <View style={styles.row}>
                    <Text style={{ fontSize: 20, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Start Invesment</Text>
                </View>
                <View style={[styles.row,]}>
                    <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Friends Celebration</Text>
                    <InvesmentView />
                </View>

                <View style={styles.row}>
                    <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>My Family Events</Text>
                    <HomeIconCard
                        title='Setup Auto-Saving'
                        desc='Auto save your round-up and daily expenses'
                        icon='auto-save' />
                </View>

            </ScrollView>
        </HomeScreenContainer>
    );
};

export default MartialStatusScreen;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        padding: 20
    },
    h1: {
        fontSize: Constants.ResponsiveSize.f29,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    h2: {
        fontSize: Constants.ResponsiveSize.f20,
        marginBottom: 10,
        color: theme.Colors.primary,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: Constants.ResponsiveSize.f18,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    h4: {
        fontSize: Constants.ResponsiveSize.f15,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    p: {
        fontSize: Constants.ResponsiveSize.f14,
        marginBottom: 10,
        color: theme.Colors.primary,
    },
    caption: {
        fontSize: Constants.ResponsiveSize.f12,
        marginBottom: 10,
        fontWeight: 'bold',
        color: theme.Colors.primaryDark,
    },
    addButton: {
        borderRadius: 17,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        width: 88,
        height: 35
    },
    carouselCard: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 100,
        borderColor: theme.Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "#171717A2",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 2.22,
        elevation: 3,
    },
    commonCardSty: {
        minHeight: 100,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 20,
        overflow: 'hidden',
    }

});
