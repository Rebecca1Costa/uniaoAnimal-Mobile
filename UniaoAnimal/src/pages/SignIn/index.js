import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    Dimensions
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from "react-i18next";

const SignIn = () => {
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();

    const changeLanguage = value => {
        i18n.changeLanguage(value)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/uniao.png')}
                    style={{ width: '50%', aspectRatio: 1 }}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}> {t('Bem-vindo')} (a) </Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.formContent}>
                    <Text style={styles.title}>{t('Email')}</Text>
                    <TextInput
                        placeholder={t('Digite um email...')}
                        style={styles.input}
                    />

                    <Text style={styles.title}>{t('Senha')}</Text>
                    <TextInput
                        placeholder={t('Sua senha')}
                        style={styles.input}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{t('Acessar')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.registerText}>{t('Não possui uma conta? Cadastre-se')}</Text>
                    </TouchableOpacity>
                </Animatable.View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerLogo: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%' // Adicionado espaçamento superior
    },
    containerHeader: {
        marginTop: 20,
        marginBottom: 10,
        paddingStart: 20,
    },
    message: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#0077b6',
        flex: 0.7,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
        color: '#FFF'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 10,
        fontSize: 16,
        color: '#FFF'
    },
    button: {
        backgroundColor: '#FFF',
        borderRadius: 4,
        paddingVertical: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#0077b6',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 10,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1'
    },
    language: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    langButton: {
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        borderColor: '#00b4d8'
    },
    langText: {
        color: '#00b4d8'
    },
    formContent: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignIn;
