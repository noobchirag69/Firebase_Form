// Importing Firebase through CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// Configuring Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAWrFn7huN15Tp00HgVOYRbhIo1fTk7uC0",
    authDomain: "fir-form-62cc1.firebaseapp.com",
    projectId: "fir-form-62cc1",
    storageBucket: "fir-form-62cc1.appspot.com",
    messagingSenderId: "815046885552",
    appId: "1:815046885552:web:f67f284f4f476cfcffbb75"
};

// Initiating Firebase
const app = initializeApp(firebaseConfig);

// Referencing the Realtime Database
const formDB = getDatabase(app);

// Function to Submit the Form Data 
const form = document.querySelector('#contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Getting the Form Data
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    // Saving in Database
    saveMessages(name, email, message);

    // Alert
    const alert = document.querySelector('.alert');

    // Triggering the Alert
    alert.style.display = 'block';

    // Removing the Alert
    setTimeout(() => {
        alert.style.display = 'none';
    }, 2000);

    // Reset Form
    form.reset();
});

// Function to Save the Form Data inside the Database
function saveMessages(name, email, message) {
    const messages = ref(formDB, 'messages');
    const newMessage = push(messages);
    set(newMessage, {
        name: name,
        email: email,
        message: message
    });
};