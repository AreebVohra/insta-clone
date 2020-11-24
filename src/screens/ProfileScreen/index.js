import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Button } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default class ProfileScreen extends Component {
    state = {
        data: {
            postInfo: {
                images: [require('../../assets/profile.jpg'), require('../../assets/profile.jpg')]
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 20, flexDirection: 'row', backgroundColor: '#ffffff' }}>
                        <View style={styles.profileImage}>
                            <Image style={{ width: width * 0.2, height: width * 0.2, borderRadius: width * 0.5 }} source={require('../../assets/profile.jpg')} />
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 15 }}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>39</Text>
                                    <Text style={{ fontSize: 15 }}>Posts</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>339</Text>
                                    <Text style={{ fontSize: 15 }}>followers</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>393</Text>
                                    <Text style={{ fontSize: 15 }}>following</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2, paddingHorizontal: 20, flexDirection: 'column' }}>
                        <View style={{ flex: 1, marginVertical: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Areeb Vohra</Text>
                            <Text style={{ fontSize: 15 }}>Sky is the limit</Text>
                        </View>
                        <View style={{ flex: 1, marginVertical: 5, }}>
                            <TouchableOpacity style={{ flex: 1, borderWidth: 1, borderRadius: 10, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ margin: 2 }}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, marginVertical: 5, alignItems: 'flex-start' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image style={{ width: width * 0.15, height: width * 0.15, borderRadius: width * 0.5 }} source={require('../../assets/profile.jpg')} />
                                <Text>Story</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 5, marginTop: 45, borderTopColor: 'grey', borderTopWidth: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#DCDCDC', paddingVertical: 10 }}>
                            <View style={{ width: '50%', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="grid" size={30} color='#000' />
                            </View>
                            <View style={{ width: '50%', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="account-box-outline" size={30} color='#000' />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    gridImgContainer: {
        padding: 1,
        backgroundColor: '#CCC'
    },
    profileImage: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: width * 0.5,
        borderWidth: 1,
        marginRight: 10
    },
    image: {
        height: width * 0.33,
        width: width * 0.33
    }
});