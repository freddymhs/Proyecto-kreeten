//importando FIREBASE y algunos de sus MODULOS
//Los modulos permiten hacer autenticacion , conectarse a reatime database, firestore y otros que se ven en la pagina web
import * as firebase from 'firebase'; // impartamos lo instalado 'yarn add firebase'
import '@firebase/auth'; // modulo extra que quiero usar ahora para revisar mi conexion

//intentar inicializar FIREBASE
try {
 firebase.initializeApp({ // se inicializare FIREBASE
    apiKey: "AIzaSyBOYgaU89Ovsmu404cDlLYGPQcIF5Xnup8",
    authDomain: "kreeten-c0c70.firebaseapp.com",
    projectId: "kreeten-c0c70",
    storageBucket: "kreeten-c0c70.appspot.com",
    messagingSenderId: "103552299304",
    appId: "1:103552299304:web:a71855053da06f2ced201d"
 });
} catch (err) {
 //ERROR Si FIREBASE YA ESTABA INICIALIZADO
 if (!/already exists/.test(err.message)) {
   console.error('Firebase initialization error', err.stack);
 }
}

export default firebase; // esto importaremos desde otro archivo