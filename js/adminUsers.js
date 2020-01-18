// const usersData = document.getElementById("adminUsers");
// usersData.addEventListener('click', (e) => {
    // e.preventDefault();
    // console.log("LOLOLOLOLOL");
    var fbRef = db.ref().child("Users");
    // removed the storage reference
    fbRef.on("child_added", snap => {
    var name = snap.child("username").val();
    var email = snap.child("useremail").val();
    var number = snap.child("usernumber").val();
    // var description = snap.child("des").val();
    // var image = snap.child("image").val();
    var id = snap.key;
    
    $("#tableBody").append("<tr><td data-th='Ref. ID'>"+ id +"</td><td data-th='Name'>"+name+"</td><td data-th='Phone Number'>"+number+"</td><td data-th='Email ID'>"+email+"</td><td data-th='View'><button type='button' style='width: 5vw;' class='btn btn-danger' onClick='myFunction(\""+name+"\",\""+email+"\",\""+id+"\")'>VIEW</button></td></tr>");

    
    });

// });