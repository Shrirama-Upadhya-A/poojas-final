var fbRef = db.ref().child("Products").child("Flowers").child("Specials");
    // removed the storage reference
    fbRef.on("child_added", snap => {
    var name = snap.child("name").val();
    var des = snap.child("des").val();
    var price = snap.child("price").val();
    // var description = snap.child("des").val();
    // var image = snap.child("image").val();
    var code = snap.child("code").val();
    var number = snap.key;
    console.log(name)

    
    $("#flowerDailySpec").append("<tr><td data-th='Ref. ID'>"+code+"</td><td data-th='Product Name'>"+name+"</td><td data-th='Cost'>"+price+"</td><td data-th='View'><a href='productpage.html'><button type='button' style='width: 5vw;' class='btn btn-danger' onClick='flowerDailySpecials(\""+number+"\")'>VIEW</button></a></td></tr>");    
    });