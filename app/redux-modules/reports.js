import Config from 'react-native-config';
import RNFetchBlob from 'react-native-fetch-blob';

// Actions
const GET_QUESTIONS = 'report/GET_QUESTIONS';
const SAVE_REPORT = 'report/SAVE_REPORT';

// Reducer
const initialNavState = {
  forms: {},
  answers: {
    idForm: 'idAlert'
  }
};

export default function reducer(state = initialNavState, action) {
  switch (action.type) {
    case GET_QUESTIONS: {
      return Object.assign({}, state, { forms: action.payload });
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export function getQuestions() {
  return (dispatch, state) => {
    const url = `${Config.API_URL}/questionnaire/${Config.QUESTIONNARIE_ID}`;
    const fetchConfig = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${state().user.token}`
      }
    };
    fetch(url, fetchConfig)
      .then(response => {
        if (response.ok) return response.json();
        throw Error(response);
      })
      .then((data) => {
        let form = [];
        if (data && data.data && data.data[0]) form = data.data[0].attributes;
        form.questions = form.questions.sort((a, b) => parseInt(a.order, 10) - parseInt(b.order, 10));
        dispatch({
          type: GET_QUESTIONS,
          payload: form
        });
      })
      .catch((err) => {
        // TODO: handle error
        console.warn(err);
      });
  };
}

export function saveReport(report) {
  return (dispatch, state) => {
    console.warn('TODO: save report', report);
    const form = new FormData();
    const promises = [];
    const keys = [];
    Object.keys(report).forEach((key) => {
      if (report[key].indexOf('jpg') >= 0) { // TODO: improve this
        promises.push(RNFetchBlob.fs.readFile(report[key], 'base64'));
        keys.push(key);
      } else {
        form.append(key, report[key]);
      }
    });
    if (promises.length > 0) {
      Promise.all(promises).then((data) => {
        for (let i = 0, pLenght = promises.length; i < pLenght; i++) {
          form.append(keys[i], data[i]);
        }
      });
    }
    const url = `${Config.API_URL}/questionnaire/${Config.QUESTIONNARIE_ID}`;
    const fetchConfig = {
      headers: {
        Authorization: `Bearer ${state().user.token}`,
        'Content-Type': 'multipart/form-data'
      },
      method: 'POST',
      body: form
    };
    fetch(url, fetchConfig)
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response);
      })
      .then((data) => {
        console.log(data, 'form data response');
        return {
          type: SAVE_REPORT,
          payload: data
        };
      })
      .catch((err) => {
        console.log('TODO: handle error', err);
      });
  };
}
