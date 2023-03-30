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
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth(app);
const token = localStorage.getItem('user');

if(token){
    const blogDetails = document.getElementById('blogPost');
    get(ref(database, 'Blog/')).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(data);
            for (let key in data) {
                const blogName = data[key].blogName;
                const blogContent = data[key].blogContent;
                blogDetails.innerHTML += `
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
                        <span>
                            Read more ...
                        </span>
                    </div>
                    
                </div>
                <div class="blog_img_container">
                    <img src="./src/img/blog_img.png" alt="">
                </div>
            </div>
                `;
            }
        } else {
            console.log("No data available");
        }
    }
    ).catch((error) => {
        console.error(error);
    }
    );
}
