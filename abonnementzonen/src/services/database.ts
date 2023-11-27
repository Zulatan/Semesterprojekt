import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';

// const baseUrl = 'http://localhost:8080/api';

const app = initializeApp(environment.firebaseConfig);
