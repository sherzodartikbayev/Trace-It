import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCU-XANHFEI5RpCsFC9mgkEsF5VMHxYALc',
	authDomain: 'trace-it-a45f0.firebaseapp.com',
	projectId: 'trace-it-a45f0',
	storageBucket: 'trace-it-a45f0.firebasestorage.app',
	messagingSenderId: '677107925211',
	appId: '1:677107925211:web:8a19f28ce69d2b18634cfe',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
