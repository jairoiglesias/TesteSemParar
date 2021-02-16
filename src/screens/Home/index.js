import React, {useEffect} from 'react';
import { Text, View , StyleSheet} from 'react-native';

import CardSlider from './CardSlider'
import {useDispatch} from 'react-redux'

const Home = params => {

    const dispatch = useDispatch()

    const fetchCourses = async () => {

        const response = await fetch('https://desolate-brushlands-20405.herokuapp.com/api/v2/products')
        const courses = await response.json()

        dispatch({
            type: 'FETCH_COURSES',
            payload: courses
        })
    }

    useEffect(() => {
        fetchCourses()
    }, [])

    return <View style={styles.container}>
        <Text style={styles.title}>Conheça nossos cursos:</Text>
        <CardSlider />
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    slide: {
        backgroundColor: 'white',
        height: 400,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        marginHorizontal: 10
      
    },
    listItem: {
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    title: {
        fontSize: 32,
        width: 300,
        color: '#FF8686',
        marginVertical: 20
    },
})

export default Home
