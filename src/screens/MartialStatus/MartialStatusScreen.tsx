import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from 'src/common/theme/theme';
import { SvgIcon } from 'src/components';

const MartialStatusScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#103325' }}>
            <SafeAreaView style={{ flex: 1, }} >
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 25 }}>
                    <View style={{ flex: 1, }}>
                        <SvgIcon
                            name="chevron-right"
                        />
                    </View>
                    <View style={{ flex: 2, alignItems: 'center', }}>
                        <SvgIcon
                            name="chevron-right"
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <SvgIcon
                            name="chevron-right"
                        />

                    </View>
                </View>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.row}>
                        <View style={{ flex: 1, flexDirection: 'row', minHeight: 100, backgroundColor: '#011A15', borderColor: theme.Colors.primaryDark, borderWidth: 1, borderRadius: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <SvgIcon
                                    name="chevron-right"
                                />
                            </View>

                            <View style={{ flex: 1, padding: 20 }}>
                                <Text style={{ fontSize: 20, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Title</Text>
                                <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', }}>Subtitle</Text>
                            </View>
                            <View style={{ height: '70%', borderWidth: .3, borderColor: theme.Colors.secondary, alignSelf: 'center' }} />
                            <View style={{ flex: 2, padding: 20 }}>
                                <Text style={{ fontSize: 20, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Title</Text>
                                <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', }}>Subtitle</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={{ flex: 1, minHeight: 100, flexDirection: 'row', backgroundColor: '#10675F', borderColor: theme.Colors.secondary, borderWidth: 1, borderRadius: 20, overflow: 'hidden' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FBA12C" }}>
                                <SvgIcon
                                    name="chevron-right"
                                />
                            </View>
                            <View style={{ flex: 2, padding: 20 }}>
                                <Text style={{ fontSize: 20, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Title</Text>
                                <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', }}>Subtitle</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <SvgIcon
                                    name="chevron-right"
                                />
                            </View>

                        </View>
                    </View>


                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 20, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Up coming Events</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>My Family Events</Text>
                        <View style={{
                            minHeight: 100,
                            flex: 1, flexDirection: 'row',
                            backgroundColor: '#10675F', borderColor: 'white', borderWidth: 1, borderRadius: 20, overflow: 'hidden'
                        }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <SvgIcon
                                    name="chevron-right"
                                />
                            </View>

                            <View style={{ flex: 2, padding: 20 }}>
                                <Text style={{ fontSize: 20, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Title</Text>
                                <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', }}>Subtitle</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <SvgIcon
                                    name="chevron-right"
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Friends Celebration</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                            {Array.from({ length: 20 }).map((item, i) => {
                                return <View key={i} style={{ height: 88, width: 80, backgroundColor: theme.Colors.primary, marginHorizontal: 10, borderRadius: 10 }} />
                            })}
                        </ScrollView>
                    </View>

                    <View style={styles.row}>
                        <Text style={{ fontSize: 20, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Start Invesment</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Friends Celebration</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                            {Array.from({ length: 20 }).map((item, i) => {
                                return <View key={i} style={{ height: 88, width: 80, backgroundColor: theme.Colors.primary, marginHorizontal: 10, borderRadius: 10 }} />
                            })}
                        </ScrollView>
                    </View>

                    <View style={styles.row}>
                        <View style={{
                            minHeight: 100,
                            flex: 1, flexDirection: 'row',
                            backgroundColor: '#011A15', borderWidth: 1, borderRadius: 20, overflow: 'hidden'
                        }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <SvgIcon
                                    name="chevron-right"
                                />
                            </View>

                            <View style={{ flex: 2, padding: 20 }}>
                                <Text style={{ fontSize: 20, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>Title</Text>
                                <Text style={{ fontSize: 14, marginBottom: 10, color: 'white', }}>Subtitle</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <SvgIcon
                                    name="chevron-right"
                                />
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default MartialStatusScreen;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        padding: 20
    }
});
