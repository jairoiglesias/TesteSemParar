import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";
import { CreditCardInput, LiteCreditCardInput } from "react-native-vertical-credit-card-input"
import { useNavigation } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'

const PaymentScreen = params => {

    const navigation = useNavigation();
    const activeCourse = useSelector(state => state.course.activeCourse)

    const CustomButtom = () => {

        return <TouchableOpacity
            onPress={() => navigation.navigate('PaymentConfirm')}
            style={styles.buttonContainer}
        >
            <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>

    }

    const handleCredCardChange = credCardData => {
        console.log(credCardData)
    }

    return <View>
        <CreditCardInput
            onChange={handleCredCardChange}
            requiresName={true}
        />
        <View style={styles.line} />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
        }}>
            <Text>{activeCourse.name}</Text>
            <Text>{activeCourse.price}</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
        }}>
            <Text>Desconto 10%</Text>
            <Text>- {(activeCourse.price/100) * 10}</Text>
        </View>
        <View style={styles.line} />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
        }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#707070'}}>Total</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#707070'}}>{activeCourse.price-(activeCourse.price/100) * 10}</Text>
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

export default PaymentScreen;
