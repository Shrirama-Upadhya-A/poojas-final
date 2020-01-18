const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
   // console.log(email,password);

   auth.signInWithEmailAndPassword(email,password).then(cred =>{
       console.log(cred.user);

       loginForm.reset();
       auth.onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.
          console.log(user.uid);
          window.open("../poojas-final-master/access.html","_top");
        } else {
          // User not logged in or has just logged out.
        }
      });
       //redirect to admin/user/doctor page
    //    window.open("../Admin-Doctor-User/admin-doctor-user.html","_top");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
// Create a reference with an initial file path and name
// var storage = firebase.storage();
// // var pathReference = storage.ref('gs://puja-sanskar.appspot.com/Products/Flowers/E-commerce/1.jpg');
// // Create a reference from a Google Cloud Storage URI
// var gsReference = storage.refFromURL('gs://puja-sanskar.appspot.com/Products/Flowers/E-commerce/1.jpg')
// console.log(gsReference);

// // Create a reference from an HTTPS URL
// // Note that in the URL, characters are URL escaped!
// var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// storage.refFromURL('gs://puja-sanskar.appspot.com/Products/Flowers/E-commerce/'+i+'.jpg').getDownloadURL().then(function(url) {
//     // `url` is the download URL for 'images/stars.jpg'
  
//     // This can be downloaded directly:
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = function(event) {
//       var blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();
  
//     // Or inserted into an <img> element:
//     var img = document.getElementById('Title');
//     img.src = url;
//   }).catch(function(error) {
//     // Handle any errors
//   });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // var fbRef = db.ref().child("Products").child("Flowers").child("Specials");
    //removed the storage reference
    // fbRef.on("child_added", snap => {
    // var name = snap.child("name").val();
    // var price = snap.child("price").val();
    // var category = snap.child("code").val();
    // var description = snap.child("des").val();
    // var image = snap.child("image").val();
    // console.log("Image link : " + image)
    // $("#tableBody").append("<tr><td><img src=" + image + "></td><td>" + name + "</td><td>" + price + "</td><td>" + category + "</td><td>" + description + "</td></tr>" );
    // });

    });

});