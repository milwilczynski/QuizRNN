import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultComponent = props => {
    return (
        <View style={styles.viewComponent}>
            <Text style={styles.text}>{props.item.nick}</Text>
            <Text style={styles.text}>{props.item.score}</Text>
            <Text style={styles.text}>{props.item.total}</Text>
            <Text style={styles.text}>{props.item.type}</Text>
            <Text style={styles.text}>{props.item.date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#eeeeee',
    },
    viewComponent: {
        margin: 10,
        padding: 5,
        borderRadius: 3,
        borderColor: '#00adb5',
        borderWidth: 1,
    }
});

export default ResultComponent;
