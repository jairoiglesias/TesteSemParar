import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImageConfirmPayment from '../../assets/confirmPayment.png'

const PaymentConfirmScreen = params => {

    const CustomButtom = () => {

        return <TouchableOpacity
            onPress={handleBuy}
            style={styles.buttonContainer}
        >
            <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>

    }


    return <View>
        <View style={{
            // flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100
        }}>
            <Text style={{fontSize: 24, color: '#707070'}}>Sucesso!</Text>
            <Text style={{fontSize: 24, color: '#707070'}}>Compra concluida</Text>
        </View>
        <Image 
            source={ImageConfirmPayment}
            style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                marginTop: 30
            }}
        />
        <View style={{
            // flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100
        }}>
            <Text style={{fontSize: 14, color: '#707070', width: '70%', textAlign:'center'}}>Você receberá um email com os detalhes da sua compra</Text>
            
        </View>
        <CustomButtom />
    </View>
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        width: '100%',
        marginVertical: 10
    },
    buttonContainer: {
        backgroundColor: '#FF8686',
        width: '80%',
        alignSelf: 'center',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: 'white'
    },

})

export default PaymentConfirmScreen;
