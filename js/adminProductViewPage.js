var fbRef = db.ref().child("Products").child("Flowers").child("Subscriptions");
    // removed the storage reference
    fbRef.on("child_added", snap => {
        console.log(id+"::::"+snap.key);
        if(id == snap.key){
            var name = snap.child("name").val();
            var des = snap.child("des").val();
            var price = snap.child("price").val();
            var id = snap.child("code").val();
            console.log(name);
            fbAddressRef = db.ref().child("Products").child("Flowers").child("Subscriptions").child(id).child("Pics");
            fbAddressRef.on("child_added",addressSnap=>{
                console.log(addressSnap);
                var image = addressSnap.child("image").val();
                
                document.getElementById("NameDiv").innerHTML += "<h2>Name:</h2><p>"+name+"</p><h2>Description:</h2><p>"+des+"</p><h2>Cost:</h2> <p>&#8377;"+price+"</p><h2>Images:</h2>";
                document.getElementById("FlowerImagesDiv").innerHTML = "<img src="+image+">";
            });
        }    
        // $("#tableBody").append("<tr><td data-th='Ref. ID'>"+ id +"</td><td data-th='Name'>"+name+"</td><td data-th='Phone Number'>"+number+"</td><td data-th='Email ID'>"+email+"</td><td data-th='View'><button type='button' style='width: 5vw;' class='btn btn-danger' onClick='myFunction(\""+name+"\",\""+email+"\",\""+id+"\")'>VIEW</button></td></tr>");

    
    });