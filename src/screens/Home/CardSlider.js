import React, {useState, useEffect} from 'react';
import { Text, View , StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'

const SCREEN_WIDTH = Dimensions.get('window').width

const CardSlider = props => {

    const [activeSlide, setActiveSlide] = useState(0)

    const navigation = useNavigation();

    const courses = useSelector(state => state.course.courses)
    const dispatch = useDispatch()

    const CustomPagination = () => {
        
        return <Pagination
              dotsLength={courses.length}
              activeDotIndex={activeSlide}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  marginBottom: 20,
                  backgroundColor: '#FF8686'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
        />
        
    }

    const CustomButtom = props => {

        return <TouchableOpacity
            onPress={() => handleBuy(props.item)}
            style={styles.buttonContainer}
        >
            <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>

    }

    handleBuy = item => {
        dispatch({
            type: 'ACTIVE_CURSE',
            payload: item
        })
        navigation.navigate('Payment')
        
    }

    handleCarouselRenderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.name}>{ item.name }</Text>
                {item.description.split('\n').map(descriptionItem => {
                    return <Text style={styles.descriptionItem}>{descriptionItem}</Text>
                })}
                <View style={styles.durationContainer}>
                    <Text>Duração: </Text>
                    <Text>{item.duration}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text>Investimento: </Text>
                    <Text style={styles.priceItem}>R$ {item.price}</Text>
                </View>
                <CustomButtom item={item}/>
            </View>
        );
    }

    return <>
        <Carousel  
            data={courses}
            renderItem={handleCarouselRenderItem}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={SCREEN_WIDTH - 120}
            onSnapToItem={(index) => setActiveSlide(index) }
            
        />
        <CustomPagination />
    </>

}

const styles = StyleSheet.create({
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
    name: {
        fontSize: 24,
        width: 170,
        color: '#707070',
        marginVertical: 24,
        marginHorizontal: 24
    },
    descriptionItem: {
        fontSize: 14,
        color: '#707070',
        marginHorizontal: 10
    },
    durationContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 20
    },
    priceContainer: {
        marginHorizontal: 10,
        marginVertical: 20,
        alignSelf: 'center'
    },
    priceItem: {
        color: '#7BBDF5',
        fontSize: 30
    },
    buttonContainer: {
        backgroundColor: '#FF8686',
        width: 150,
        alignSelf: 'center',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: 'white'
    }
})

export default CardSlider