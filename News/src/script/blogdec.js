import {initializeApp} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {getDatabase , set , ref, get} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js';
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';

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
    const database = getDatabase(app);
    const auth = getAuth(app);
    const token = localStorage.getItem('user');


    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const blogID = urlParams.get('id');
    console.log(blogID);

    
    if(token) {
        const currentBlogElement = document.getElementById("currentBlog");
        get(ref(database, 'Blog/' + blogID))
        .then((snapshot)=> {
            if(snapshot.exists()){
                const data = snapshot.val();
                console.log(data);
                const blogName = data.blogName;
                const blogContent = data.blogContent;
                currentBlogElement.innerHTML += `
                <div class="currentblogcontainer">
                    <div class="blog_content_container">
                    <div class="blog_desc_container">
                        <div class="blog_nav">
                            <div class="icon">
                                <img src="./src/img/icons.svg">
                            </div>
                            <div class="date">
                                <span>12-04-2022</span>
                            </div>
                        </div>
                        <div class="blog-content">
                            <h1>
                            ${blogName}
                            
                            </h1>
                            <p>
                            ${blogContent}
                            </p>
                        </div>
                        
                    </div>
                    <div class="blog_img_container">
                        <img src="./src/img/blog_img.png" alt="">
                    </div>
                </div>
            </div>
                `
            }
        })
    }




