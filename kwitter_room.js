var firebaseConfig = {
      apiKey: "AIzaSyDg2_RbfBvCqBmV-Fs2FN1iFHN9Kax96A8",
      authDomain: "kwitter-867af.firebaseapp.com",
      databaseURL: "https://kwitter-867af-default-rtdb.firebaseio.com",
      projectId: "kwitter-867af",
      storageBucket: "kwitter-867af.appspot.com",
      messagingSenderId: "368956388098",
      appId: "1:368956388098:web:e173c6f7e58ae91485881b",
      measurementId: "G-68KK4PE3B6"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "WELCOME "+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name : " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row; 
      });
});
}
getData();

function redirectToRoomName(name)
{
      console.log("name");
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}