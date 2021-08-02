//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyC6M_ilZY-P2hgaojTh2LCd0UaCd-myDt8",
  authDomain: "twitter-9521f.firebaseapp.com",
  databaseURL: "https://twitter-9521f-default-rtdb.firebaseio.com",
  projectId: "twitter-9521f",
  storageBucket: "twitter-9521f.appspot.com",
  messagingSenderId: "870193555623",
  appId: "1:870193555623:web:fb815d46164d925685d382"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "  +   user_name + " !";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}



function getData()
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;

      console.log("Room Name - " + room_names);

      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + room_names + "</div> <hr>";
      document.getElementById("output").innerHTML + row;
      
      });});}
      getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.locaion = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}