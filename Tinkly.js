// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA_nAbQzC_rQHQI9jnfuH8KGk_CrvcxWnY",
  authDomain: "tinkly-2094b.firebaseapp.com",
  databaseURL: "https://tinkly-2094b-default-rtdb.firebaseio.com",
  projectId: "tinkly-2094b",
  storageBucket: "tinkly-2094b.appspot.com",
  messagingSenderId: "497101841423",
  appId: "1:497101841423:web:6f78a39a0a520511acef7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FIREBASE LINKS on top

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Tinkly_room.html";
}