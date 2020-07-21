import {combineReducers} from 'redux';

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const initialStateLogin = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
};

const LoginReducer = (state = initialStateLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
