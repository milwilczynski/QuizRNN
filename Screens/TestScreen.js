import React from 'react';
import {
  View,
  Text,
  ProgressBarAndroid,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class TestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      time: 0,
    };
  }
  componentDidMount() {
    this.setState(() => ({
      time: this.props.test.duration,
    })),
      (this.interval = setInterval(
        () =>
          this.setState(prev => ({
            progress: prev.progress + 0.033,
            time: prev.time - 1,
          })),
        1000,
      ));
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.8}}>
        </View>
        {this.state.time <= 0 ? clearInterval(this.interval) : null}
        <View>
            <Text style={{color: 'aqua' }}>
              Question {this.props.currQuestion} of
              {' ' + this.props.amountofQuestions}
            </Text>
            <Text style={{color: '#eeeeee' }}>{this.state.time}</Text>
          <View>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={this.state.progress}
              animating={true}
            />
          </View>
        </View>
          <Text style={{color: '#eeeeee', fontSize: 14, textAlign: 'center'}}>
            {this.props.test.question}
          </Text>
          <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.buttons}>
                <Text style={{color:'#eeeeee'}}>{this.props.test.answers[0].content}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Text style={{color:'#eeeeee'}}>{this.props.test.answers[1].content}</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.buttons}>
                <Text style={{color:'#eeeeee'}}>{this.props.test.answers[2].content}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Text style={{color:'#eeeeee'}}>{this.props.test.answers[3].content}</Text>
              </TouchableOpacity>
          </View>
        <View style={{flex: 1}}>
        </View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#393e46',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
  },
  buttonsRow: {
    flex: 2,
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'aqua',
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
  },
});
