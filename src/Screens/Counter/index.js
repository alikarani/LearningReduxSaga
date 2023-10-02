// Hanif Hasan

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
            {/* <ScrollView
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
            </ScrollView> */}

            <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={'grey'}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />

          <TextInput
            placeholderTextColor={'grey'}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              Validation()
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onGoogleButtonPress()}
          >
            <Text style={{ color: 'grey' }}>Login with Google</Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 14,
              color: '#595958',
              padding: 6,

              justifyContent: 'center',
              textAlign: 'center',
              fontWeight: '400',
            }}>
            Are you new?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 16,
                color: '#0c54a3',
                fontWeight: '500',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              Create account
            </Text>
          </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}
export default Counter;