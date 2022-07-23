import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDnF_D8XSTq9qd0MWnC_6mPufLYtbgSIWQ',
  authDomain: 'fir-iziclone-upload.firebaseapp.com',
  projectId: 'fir-iziclone-upload',
  storageBucket: 'fir-iziclone-upload.appspot.com',
  messagingSenderId: '882942169081',
  appId: '1:882942169081:web:db0258b30057edbd8f3728',
  measurementId: 'G-3Y86DYK48P',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
