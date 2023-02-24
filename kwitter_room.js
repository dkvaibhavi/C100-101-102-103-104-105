
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCDENeLeYd8cgia5cqhKYtPsfIPTQ2HGrw",
      authDomain: "picnic-backpack-checklis-d3187.firebaseapp.com",
      databaseURL: "https://picnic-backpack-checklis-d3187-default-rtdb.firebaseio.com",
      projectId: "picnic-backpack-checklis-d3187",
      storageBucket: "picnic-backpack-checklis-d3187.appspot.com",
      messagingSenderId: "6489784919",
      appId: "1:6489784919:web:0ad23fb182252c93db1912",
      measurementId: "G-BBZKWG31DV"
    }
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();


function addRoom(){


    room_name =  document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";

      

}

function redirectToRoomName(name){


      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";

}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"

}
