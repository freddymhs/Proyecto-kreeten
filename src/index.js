import firebase from './libs/Firebase';

export const register =()=>{
  firebase
    .auth()
    .createUserWithEmailAndPassword('fmarcosdev@gmail.com', 'password')
    .catch(function (error) { console.log('error:',error) });
}

export const login =()=>{
  firebase.auth().signInWithEmailAndPassword('fmarcosdev@gmail.com', 'password')
  .then((userCredential) => {
    console.log('user:',userCredential.user);
  })
  .catch((error) => {
    console.log('error:',error);
  });
}




export const logout=()=>{
  firebase.auth().signOut().then(function() {
  console.log('adios !!!');
  
}, function(error) {
  console.log('error:',error);
  
});
}