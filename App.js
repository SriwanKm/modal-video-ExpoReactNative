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
    Dimensions,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const image = {uri: "https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/anoceanofsky.jpg"};
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function App() {
    const [dimensions, setDimensions] = useState({window, screen});
    const onChange = ({window, screen}) => {
        setDimensions({window, screen});
    };

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    });

    const isPortrait = () => {
        return dimensions.screen.height > dimensions.screen.width
    }

    const pressed = () => {
        console.log("I'm pressed")
    }

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
        paddingBottom: 250,
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
});
