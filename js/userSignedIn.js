auth.onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      var userIcon = document.getElementById("userIcon");
      userIcon.addEventListener('onclick',(e)=>{
        auth.signOut().then(function() {
            console.log("Sign-out successful.")
          }).catch(function(error) {
            console.log("Error happened")
          });
      })
    } else {
      console.log("No user logged in");
      // User not logged in or has just logged out.
    }
  });