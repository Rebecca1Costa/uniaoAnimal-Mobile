import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    Dimensions // Importar Dimensions para acessar a largura da tela
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from "react-i18next";

export default function Welcome() {
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
                    style={{ width: '80%', aspectRatio: 1 }} // Definir largura e proporção de imagem
                    resizeMode="contain" // Usar resizeMode "contain" para evitar cortes
                />
            </View>

            <View style={styles.languages}>
                <TouchableOpacity
                    onPress={() => changeLanguage('en')}
                    style={styles.langButton}
                >
                    <Text style={styles.langText}>Inglês</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => changeLanguage('pt')}
                    style={styles.langButton}
                >
                    <Text style={styles.langText}>Português (Brasil)</Text>
                </TouchableOpacity>
            </View>

            <Animatable.View delay={800} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>{t('Na jornada da adoção, não apenas salvamos vidas, mas também encontramos nossa própria redenção. Adote um animal e escreva uma história de amor e compaixão que ecoará para sempre.')}</Text>
                <Text style={styles.text}>{t('Faça o login para começar essa nova história!')}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>{t('Acessar')}</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    languages: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        paddingVertical: 10 
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
    containerLogo: {
        flex: 0.3, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    containerForm: {
        flex: 0.7, 
        backgroundColor: '#0077b6',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: '5%'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12,
        color: '#FFF'
    },
    text: {
        color: '#a1a1a1',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 12,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#0077b6',
        fontWeight: 'bold'
    }
})
