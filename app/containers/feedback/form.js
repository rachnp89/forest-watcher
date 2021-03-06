import { connect } from 'react-redux';
import { finishFeedback, getQuestions } from 'redux-modules/feedback';

import ReportsForm from 'components/feedback/form';

function getAnswers(forms, formName) {
  if (!forms) return null;
  if (forms[formName] && forms[formName].values) return forms[formName].values;
  return {};
}

function mapStateToProps(state, { feedback }) {
  return {
    form: feedback,
    questions: state.feedback[feedback].questions || [],
    answers: getAnswers(state.form, feedback)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    finishFeedback: (type) => {
      dispatch(finishFeedback(type));
    },
    getQuestions: (type) => {
      dispatch(getQuestions(type));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportsForm);
