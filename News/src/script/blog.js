import {initializeApp} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {getDatabase , set , ref, get} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';
import { getStorage  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";
const firebaseConfig = {

    apiKey: "AIzaSyAeJuScUZ2fEvlmQ51ay3nSGjZpRgHutgI",

    authDomain: "comm101-6372b.firebaseapp.com",

    projectId: "comm101-6372b",

    storageBucket: "comm101-6372b.appspot.com",

    messagingSenderId: "211097342745",

    appId: "1:211097342745:web:189d0bed82e6bc01a5eb88"

    };
    const app = initializeApp(firebaseConfig);
    const storage = getStorage();
    const database = getDatabase(app);
    const auth = getAuth(app);
    const token = localStorage.getItem('user');

if(token){
    const blogSubmit  = document.getElementById('createBlog');
    blogSubmit.addEventListener('click' , (e) => {
        // e.preventDefault();
        const blogName = document.getElementById('blogName').value;
        const blogContent = document.getElementById('blogDesc').value;
        const blogImg = document.getElementById('blogImg').value;

        // set image to firebase storage
        const storageRef = ref(storage, 'Blog/' + blogImg);
        const file = document.getElementById('blogImg').files[0];
        const task = uploadBytes(storageRef, file);
        task.then((snapshot) => {
            console.log('Uploaded a blob or file!');
            localStorage.setItem('blogImg' , snapshot);
        }
        )
        .catch((error) => {
            console.log(error);
        }
        )

        console.log(blogName , blogContent, blogImg);
      
        // random number generator
        const uid = Math.floor(Math.
        random() * 10
        );
  
        set(ref(database, 'Blog/' + uid ), {
            blogName: blogName,
            blogContent: blogContent,
        }) 
        .then(() => {
            alert('Data saved successfully!');
        }
        )
        .catch((error) => {
            alert('Data could not be saved.' + error);
        }
        )
    }
    )
}
else{
    window.reload();
    window.location.href = 'login.html';
}

