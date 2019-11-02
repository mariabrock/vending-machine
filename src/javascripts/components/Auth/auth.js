import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import utilities from '../../helpers/utilities';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<button id="google-auth" class="btn btn-danger">
    <img src="https://thinkingcap.blob.core.windows.net/learnerview/00000000-0000-0000-0000-000000000000/advanced/integration_googlesignin.png" />
  </button>`;

  // /* <img src=${monkeyBut} /> */

  utilities.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
