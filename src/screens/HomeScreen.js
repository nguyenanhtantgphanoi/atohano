import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width, height } = Dimensions.get('window');


const backgroundImage = require('../../assets/images/b2.webp');

const calendarData = {
    currentTime: '10:55 SA',
    dateGregorian: 'Thứ Ba, 25 Tháng Mười Một, 2025',
    dateLunar: 'Ngày 6, Tháng Mười (Âm lịch)',
    saintToday: 'THÁNH CATHERINE ALEXANDRIA, Trinh nữ & Tử đạo (Lễ nhớ)',
    feastToday: 'MÙA THƯỜNG NIÊN - Tuần XXXIV',
    bibleVerse: '“Vì nơi nào có hai ba người họp lại nhân danh Thầy, thì có Thầy ở giữa họ.”',
    bibleReference: 'Mt 18, 20',
};

export default function HomeScreen() {
    return (
        <View style={styles.fullScreenContainer}>
            <Image
                source={backgroundImage}
                style={styles.backgroundImage}
                blurRadius={1}
                onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
            />

            <View style={styles.overlay} />
            <SafeAreaView style={styles.contentSafeArea}>
                <ScrollView contentContainerStyle={styles.scrollContent}>

                    <View style={styles.headerBar}>
                        <Image source={require('../../assets/logo/lgo.png')} style={{ width: 72, height: 72 }} />
                        <View style={styles.headerIcons}>
                            <TouchableOpacity><Text style={styles.iconText}>🔔</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.iconText}>⚙️</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.mainCalendarBlock}>
                        <Text style={styles.dateGregorianText}>{calendarData.dateGregorian}</Text>
                        <Text style={styles.dateLunarText}>— {calendarData.dateLunar} —</Text>
                    </View>
                    <View style={styles.bibleVerseContainer}>
                        <Text style={styles.verseText}>{calendarData.bibleVerse}</Text>
                        <Text style={styles.referenceText}>{calendarData.bibleReference}</Text>
                    </View>

                    <View style={styles.feastInfoContainer}>
                        <Text style={styles.feastMainText}>{calendarData.feastToday}</Text>
                        <Text style={styles.saintTodayText}>{calendarData.saintToday}</Text>
                    </View>

                    <View style={{ height: 100 }} />

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    contentSafeArea: {
        flex: 1,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    scrollContent: {
        flexGrow: 1,
        paddingTop: 0,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    headerBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    timeText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    iconText: {
        fontSize: 24,
        color: 'white',
        marginLeft: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },

    mainCalendarBlock: {
        alignItems: 'center',
        marginTop: height * 0.1,
        marginBottom: 30,
    },
    dateGregorianText: {
        fontSize: 28,
        fontWeight: '900',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        textAlign: 'center',
    },
    dateLunarText: {
        fontSize: 18,
        color: '#FFD700',
        fontWeight: '500',
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    bibleVerseContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        marginVertical: 20,
    },
    verseText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'white',
        textAlign: 'center',
        lineHeight: 25,
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    referenceText: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '600',
    },
    feastInfoContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        minHeight: 100,
        marginTop: 10,
    },
    feastMainText: {
        fontSize: 16,
        color: '#ADD8E6',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    saintTodayText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 25,
    },
});