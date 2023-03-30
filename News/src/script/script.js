import {initializeApp} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {getDatabase , set , ref, get} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';

const firebaseConfig = {

    apiKey: "AIzaSyAeJuScUZ2fEvlmQ51ay3nSGjZpRgHutgI",

    authDomain: "comm101-6372b.firebaseapp.com",

    projectId: "comm101-6372b",

    storageBucket: "comm101-6372b.appspot.com",

    messagingSenderId: "211097342745",

    appId: "1:211097342745:web:189d0bed82e6bc01a5eb88"

    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const SignIn = document.getElementById('SignIn');
SignIn.addEventListener('click' , (e) => {
    e.preventDefault();
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    signInWithEmailAndPassword(auth , email , password)
    .then((res) => {
        const user = res.user;
        console.log(user);
        localStorage.setItem('user' ,user.accessToken );
        localStorage.setItem('uid', user.uid); 
        const UserDAta = user.providerData[0]
        console.log(UserDAta);
        // navigate to home page
        window.location.href = 'blog-post.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

})

// const token = localStorage.getItem('user');

// if(token){
//         const SignedAcc = document.getElementById('SignedAcc');
//         SignedAcc.style.display = 'none';
//         const SignUp = document.getElementById('SingUpAcc');
//         SignUp.style.display = 'none';    
//         const Card = document.getElementById('personalInfo');
//         Card.style.display = 'block';
//         const uid = localStorage.getItem('uid');
//         get(ref(database, 'Users/' + uid)).then((snapshot) => {
//             if (snapshot.exists()) {
//                 const user = snapshot.val()
//                 console.log(user);

//         Card.innerHTML = `
//         <div class="card-body">
//                 <h5 class="card-title">${user.name} </h5>
//                 <h6 class="card-title">${user.email} </h6>
//                 <h6 class="card-title">${user.address} </h6>
//                 <h6 class="card-title">${user.phone} </h6>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//         `
        
//             } else {
//                 console.log("No data available");
//             }
//         }).catch((error) => {
//             console.error(error);
//         });

//     }
//     else{
//         const SignedAcc = document.getElementById('SignedAcc');
//         SignedAcc.style.display = 'block';
//         const SignUp = document.getElementById('SingUpAcc');
//         SignUp.style.display = 'block';    
//         const Card = document.getElementById('personalInfo');
//         Card.style.display = 'none';
//     }