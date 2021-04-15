import React, {useState, useEffect} from 'react';
import {
    TouchableHighlight,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    Alert,
    Modal,
    Pressable,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Video } from 'expo-av';


const image = {uri: "https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/anoceanofsky.jpg"};

export default function App() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const pressed = () => {
        console.log("I'm pressed")
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView>
            <LinearGradient colors={['#2c5fb8', '#9cc6f9']} style={styles.navContainer}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{flex: 1}}
                    data={[
                        {key: 'Home'},
                        {key: 'About'},
                        {key: 'Play Video'},
                        {key: 'Portfolio'},
                        {key: 'Services'},
                        {key: 'Contact'},
                    ]}
                    renderItem={({item}) => (
                        <View style={styles.navItem}>
                            <TouchableHighlight underlayColor="#fff" onPress={pressed}>
                                <Text style={styles.navText}>{item.key}</Text>
                            </TouchableHighlight>
                        </View>
                    )}
                />
            </LinearGradient>
            <View style={styles.line}/>
            <LinearGradient colors={['#053b7e', '#014c5c', '#014c5c']} style={styles.sectionCon}>

                <ImageBackground source={image} style={styles.img}>
                    <Text style={styles.header}>An Ocean of Sky</Text>
                    <Text style={styles.subHeader}>An XHTML 1.0 Strict Template by Bryant Smith</Text>

                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>

                                <View style={styles.modalView}>
                                    <Video
                                        ref={video}
                                        style={styles.video}
                                        source={{
                                            uri: 'https://player.vimeo.com/external/386628887.hd.mp4?s=ae3df9c72e0a7101078c7fcfd303be25802b377a&profile_id=174',
                                        }}
                                        useNativeControls
                                        resizeMode="contain"
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />
                                    <Pressable
                                        style={styles.button}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close Video</Text>
                                    </Pressable>
                                </View>

                            </View>
                        </Modal>
                        <Pressable
                            style={styles.button}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.textStyle}>Play Video</Text>
                        </Pressable>
                    </View>


                        {/*<View style={styles.buttons}>*/}
                        {/*    <Button*/}
                        {/*        title={status.isPlaying ? 'Pause' : 'Play'}*/}
                        {/*        onPress={() =>*/}
                        {/*            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()*/}
                        {/*        }*/}
                        {/*    />*/}
                        {/*</View>*/}
                </ImageBackground>

                <LinearGradient
                    colors={['#e5eefc', '#ffffff', '#ffffff', '#ffffff']}
                    style={styles.section}>
                    <View style={styles.subSection}>
                        <Text style={styles.sectionHeader}>The Title of an Article</Text>
                        <Text style={styles.p}>
                            You may use this template on any site, anywhere, for free just please leave the link back to
                            me
                            in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
                        </Text>

                        <Text style={styles.p}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque
                            vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor
                            sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet
                            imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis
                            risus
                            ut felis. Sed vehicula pellentesque quam.
                        </Text>
                        <Text style={styles.p}>
                            Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue
                            tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh,
                            dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque
                            venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue,
                            turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
                        </Text>
                    </View>

                    <View style={styles.subSection}>
                        <Text style={styles.sectionHeader}>So Many Titles, So Little Time.</Text>
                        <Text style={styles.p}>
                            You may use this template on any site, anywhere, for free just please leave the link back to
                            me
                            in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
                        </Text>

                        <Text style={styles.p}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque
                            vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor
                            sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet
                            imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis
                            risus
                            ut felis. Sed vehicula pellentesque quam.
                        </Text>
                        <Text style={styles.p}>
                            Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue
                            tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh,
                            dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque
                            venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue,
                            turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
                        </Text>
                    </View>

                    <View style={styles.subSection}>
                        <Text style={styles.sectionHeader}>Yet Another One!</Text>
                        <Text style={styles.p}>
                            You may use this template on any site, anywhere, for free just please leave the link back to
                            me
                            in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
                        </Text>

                        <Text style={styles.p}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque
                            vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor
                            sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet
                            imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis
                            risus
                            ut felis. Sed vehicula pellentesque quam.
                        </Text>
                        <Text style={styles.p}>
                            Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue
                            tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh,
                            dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque
                            venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue,
                            turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
                        </Text>
                    </View>
                </LinearGradient>
            </LinearGradient>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 25,

    },
    navText: {
        flex: 1,
        color: '#d7eaff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        padding: 10,

    },
    navItem: {
        marginHorizontal: 15,
    },
    img: {
        borderColor: '#fff',
        borderWidth: 10,
        borderTopWidth: 0,
        marginHorizontal: 20,
        marginBottom: 20,
        // paddingBottom: 120,
        paddingBottom: 200,

    },
    header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 26,
        marginHorizontal: 20,
        paddingTop: 12,
    },
    subHeader: {
        color: '#eaf0fc',
        fontSize: 15,
        marginHorizontal: 20,
        paddingBottom: 12,
        paddingLeft: 10,
    },
    video: {
        alignSelf: 'center',
        // width: 600,
        // height: 350,
        width: 330,
        height: 185,

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        borderTopColor: '#fff',
        borderTopWidth: 10,
    },
    sectionCon: {},
    section: {
        borderColor: '#fff',
        borderWidth: 9,
        margin: 20,
        paddingHorizontal: 10,
    },
    subSection: {
        paddingHorizontal: 12,
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 10,
    },
    p: {
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 25,
    },
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        // margin: 20,
        backgroundColor: "#000",
        padding: 9,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#ffffff",

    },
    textStyle: {
        color: "#0072ff",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});
