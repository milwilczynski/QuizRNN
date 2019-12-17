import React from 'react';
import {
  View,
  Text,
  ProgressBarAndroid,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class QuizComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let answersArray = this.props.answers;
    let buttonList = [];
    for (let i = 0; i < answersArray.length; i++) {
      buttonList.push(
        <TouchableOpacity
          key={i}
          onPress={() => {
            this.props.func(i);
          }}
          style={styles.button}>
          <Text style={{color: 'white', textAlign: 'center'}}>{answersArray[i].content}</Text>
        </TouchableOpacity>,
      );
    }
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'aqua', marginLeft: 10}}>
            Question {this.props.currQuestion} of
            {' ' + this.props.amountofQuestions}
          </Text>
          <Text style={{color: '#eeeeee', marginRight: 10}}>
            {this.props.time}
          </Text>
        </View>

        <View style={styles.container}>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={this.props.progress}
            animating={true}
          />
        </View>

        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#eeeeee'}}>
            {this.props.question}
          </Text>
        </View>
        <View style={styles.buttonContainer}>{buttonList}</View>
        <View style={{flex: 2}}></View>
        <View>
          <Text style={{color: 'white'}}>Score: {this.props.score}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'aqua',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    minWidth: '45%',
    maxWidth: '45%',
    minHeight: '20%',
    maxHeight: '20%',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#393e46',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
});
