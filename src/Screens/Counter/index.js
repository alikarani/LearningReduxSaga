import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    // useEffect(() => {
    //   },[]);
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);

    const increaseCounter = async () => {
        await dispatch({ type: 'INCREASE_COUNTER' });
    }
    const decreaseCounter = async () => {
        await dispatch({ type: 'DECREASE_COUNTER' });
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle='light-content' />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.outerContainer}>
                    <Text style={styles.text}>Counter</Text>
                    <View style={styles.innerCounter}>
                        <TouchableOpacity
                            onPress={increaseCounter}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterText}>
                            {counter}
                        </Text>
                        <TouchableOpacity
                            onPress={decreaseCounter}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Counter;