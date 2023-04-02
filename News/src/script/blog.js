import {initializeApp} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {getDatabase , set , ref, get} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';
import { getStorage  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyAAylHkPAkFx3F2XKF7Ehq1yiarynsbWp8",
    authDomain: "blog-6a2cd.firebaseapp.com",
    databaseURL: "https://blog-6a2cd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blog-6a2cd",
    storageBucket: "blog-6a2cd.appspot.com",
    messagingSenderId: "412682685112",
    appId: "1:412682685112:web:c0bee9208bcffc3efc824d"
  };
    const app = initializeApp(firebaseConfig);
    const storage = getStorage();
    const database = getDatabase(app);
    const auth = getAuth(app);
    const token = localStorage.getItem('user');

if(token){
    const blogSubmit  = document.getElementById('createBlog');
    blogSubmit.addEventListener('click' , (e) => {
        e.preventDefault();
        const blogName = document.getElementById('blogName').value;
        const blogContent = document.getElementById('blogDesc').value;
        const blogImg = document.getElementById('blogImg').value;

        // // set image to firebase storage
        // const storageRef = ref(storage, 'Blog/' + blogImg);
        // const file = document.getElementById('blogImg').files[0];
        // const task = uploadBytes(storageRef, file);
        // task.then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        //     localStorage.setItem('blogImg' , snapshot);
        // }
        // )
        // .catch((error) => {
        //     console.log(error);
        // }
        // )

        // console.log(blogName , blogContent, blogImg);
      
        // random number generator
        const uid = Math.floor(Math.random() * 100);

  
        set(ref(database, 'Blog/' + uid ), {
            blogName: blogName,
            blogContent: blogContent,
        }) 
        .then(() => {
            alert('Data saved successfully!');
            window.location.href = 'index.html';
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

