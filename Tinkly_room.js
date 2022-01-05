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
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name", room_name);

    window.location = "Tinkly_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "Tinkly_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}
