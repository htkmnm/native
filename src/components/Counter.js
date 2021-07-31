import React from 'react';
import { View, Text, Button } from 'react-native';

const Counter = (props) => {
    console.log(props.count)
    const increment = () => {
        props.setCount(() => props.count + 1)
    }
    return (
        <View>
            <Text>いいね！:{props.count}</Text>
            <Button onPress={increment} title='いいね！' />
        </View>
    );
}

export default Counter;
