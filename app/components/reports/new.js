import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

import StepsSlider from 'components/common/steps-slider';
import getInputForm from 'components/common/form-inputs';
import ActionButton from 'components/common/action-button';
import styles from './styles';

function checkEmptyAnswer(answer) {
  if (!answer) return true;
  switch (answer.constructor) {
    case Array:
      return answer.length <= 0;
    case String:
      return answer === '';
    case Object:
      return Object.keys(answer) <= 0;
    default:
      return true;
  }
}

function getBtnTextByType(type) {
  switch (type) {
    case 'text':
      return 'Please write something';
    case 'radio':
      return 'Choose one option to continue';
    case 'select':
      return 'Choose at least one option to continue';
    default:
      return 'Please, answer the question';
  }
}

class Reports extends Component {
  constructor() {
    super();

    this.state = {
      page: 0
    };
  }

  componentWillMount() {
    this.props.getQuestions();
  }

  goToNextPage = () => {
    if (this.state.page < (this.props.questions.length - 1)) {
      this.setState((prevState) => ({
        page: prevState.page + 1
      }));
    } else {
      // TODO: save report
      console.log('TODO: save report', this.props.answers);
      // this.props.saveReport();
      this.props.goBack();
    }
  }

  render() {
    const { questions, answers } = this.props;
    if (!questions || !questions.length) return null;
    const question = questions[this.state.page];
    const answer = answers && answers[question._id];  // eslint-disable-line
    const disabled = checkEmptyAnswer(answer);
    const btnText = disabled ? getBtnTextByType(question.type) : 'Next';
    return (
      <View style={styles.container}>
        <StepsSlider
          page={this.state.page}
          onChangeTab={this.updatePage}
        >
          {questions.map((item, index) => (
            <View style={styles.container} key={index}>
              <Field
                name={item._id} // eslint-disable-line
                component={getInputForm}
                question={item}
              />
            </View>
          ))}
        </StepsSlider>
        <ActionButton style={styles.buttonPos} disabled={disabled} onPress={this.goToNextPage} text={btnText} />
      </View>
    );
  }
}

Reports.propTypes = {
  goBack: React.PropTypes.func.isRequired,
  getQuestions: React.PropTypes.func.isRequired,
  questions: React.PropTypes.array.isRequired,
  answers: React.PropTypes.object.isRequired
};

export default reduxForm({
  destroyOnUnmount: false
})(Reports);
