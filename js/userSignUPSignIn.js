auth.onAuthStateChanged((user) => {
  if (user) {
    // User logged in already or has just logged in.
    console.log(user.uid);
    if (confirm("User : " + user.uid + "is already logged in!!\nPlease SignOut")) {
      auth.signOut().then(function() {
            console.log("Sign-out successful")
            alert("Sign-out successful")
            window.open("../index.html");
          }).catch(function(error) {
            console.log("Error happened")
          });
    } else {     
    }
  } else {
    console.log("No user logged in");
    // User not logged in or has just logged out.
  }
});

// var user = firebase.auth().currentUser;

// if (user) {console.log(user.uid);
//   if (confirm("User" + user.uid + "is already logged in!!\nPlease SignOut")) {
//     auth.signOut().then(function() {
//           console.log("Sign-out successful")
//           alert("Sign-out successful")
//           window.open("../poojas-final/index.html");
//         }).catch(function(error) {
//           console.log("Error happened")
//         });
//   } else {     
//   }
// } else {
//   // No user is signed in.
//   console.log("No user logged in");
// }

const loginForm = document.querySelector('#signInForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['signInEmail'].value;
    const password = loginForm['signInPassword'].value;
   // console.log(email,password);

   
   auth.signInWithEmailAndPassword(email,password).then(cred =>{
       console.log(cred.user);

       loginForm.reset();
      //  window.open("../poojas-final/index.html","_top");
       auth.onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.
          console.log(user.uid);
          window.open("../index.html","_top");
        } else {
          // User not logged in or has just logged out.
        }
      });
    });
});

const signUpForm = document.querySelector("#signUpForm");
signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    var email = signUpForm['email'].value;
    var password = signUpForm['password'].value;
    var number = signUpForm['number'].value;
    var name = signUpForm['name'].value;
    auth.createUserWithEmailAndPassword(email, password).then((cred)=> {
        console.log(cred.user);
        loginForm.reset();
        auth.onAuthStateChanged((user) => {
                if (user) {
                  // User logged in already or has just logged in.
                  console.log(user.uid);
                  db.ref('Users/' + user.uid).set({
                    username: name,
                    useremail: email,
                    userpassword : password,
                    usernumber : number
                  });
                } else {
                  // User not logged in or has just logged out.
                  console.log("LLLLLLLLLLLLLL");
                }
              });      
        window.open("../index.html","_top");
    });
});