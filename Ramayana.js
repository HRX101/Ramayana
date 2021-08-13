var firebaseConfig = {
    apiKey: "AIzaSyCk-yOIeaXIFX7LjCTQEfwjiPsQQMOel2w",
    authDomain: "ramayana-78168.firebaseapp.com",
    databaseURL: "https://ramayana-78168-default-rtdb.firebaseio.com",
    projectId: "ramayana-78168",
    storageBucket: "ramayana-78168.appspot.com",
    messagingSenderId: "170395780679",
    appId: "1:170395780679:web:feda3a9924f4edb2421362",
    measurementId: "G-40GEQCJPCG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var messagesref=firebase.database().ref('message');
document.getElementById('form').addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    var name=getInputVal('name');
    var email=getInputVal('email');
    var phone=getInputVal('phone');
    var Field=getInputVal('Field');
  
    
    savemessage(name,email,phone,Field);
    
    document.querySelector('.alert').style.display="block";
    setTimeout(function(){
        document.querySelector('.alert').style.display="none";  
    },3000)
}
function getInputVal(id){
    return document.getElementById(id).value;
}
function savemessage(name,email,phone,Field){
    var messageref1=messagesref.push();
    messageref1.set({
        name:name,
        email:email,
        phone:phone,
        Field:Field
    })
}

var nam1=getInputVal('email');
/*
messagesref.on('value', function(snapshot) {
    if (snapshot.exists())
       alert ("exist");
    else
       alert ("not exist");
 });
*/