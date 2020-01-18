var fbRef = db.ref().child("Users");
    // removed the storage reference
    fbRef.on("child_added", snap => {
        if(snap.key == id){
            var username = snap.child("username").val();
            var useremail = snap.child("useremail").val();
            var usernumber = snap.child("usernumber").val();
            var userDP = snap.child("pics").val();
            console.log(username);
            // document.getElementById("userDP").src = userDP;
            document.getElementById("userName").innerHTML = username;
            document.getElementById("userEmail").innerHTML = useremail;
            document.getElementById("userNumber").innerHTML = usernumber;
            document.getElementById("userID").innerHTML = id; 
            fbAddressRef = db.ref().child("Users").child(id).child("address");
            fbAddressRef.on("child_added",addressSnap=>{
                console.log(addressSnap);
                var area = addressSnap.child("area").val();
                var city = addressSnap.child("city").val();
                var number = addressSnap.child("number").val();
                var onee = addressSnap.child("onee").val();
                var pin = addressSnap.child("pin").val();
                var state = addressSnap.child("state").val();
                var twoo = addressSnap.child("twoo").val();
                var type = addressSnap.child("type").val();
                document.getElementById("addressDiv").innerHTML += "<p>"+onee+","+twoo+","+area+","+city+","+state+"-"+pin+"</p>";
            });
        }    
        // $("#tableBody").append("<tr><td data-th='Ref. ID'>"+ id +"</td><td data-th='Name'>"+name+"</td><td data-th='Phone Number'>"+number+"</td><td data-th='Email ID'>"+email+"</td><td data-th='View'><button type='button' style='width: 5vw;' class='btn btn-danger' onClick='myFunction(\""+name+"\",\""+email+"\",\""+id+"\")'>VIEW</button></td></tr>");

    
    });