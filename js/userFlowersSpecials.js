var fbRef = db.ref().child("Products").child("Flowers").child("Specials");
    // removed the storage reference
    fbRef.on("child_added", snap => {
    var name = snap.child("name").val();
    var des = snap.child("des").val();
    var price = snap.child("price").val();
    // var description = snap.child("des").val();
    var image = snap.child("image").val();
    var code = snap.child("code").val();
    var number = snap.key;
    console.log(name)

    
    document.getElementById("columns2").innerHTML += "<figure><img src="+image+"><figcaption>"+name+"</figcaption><span class='price'>&#8377;"+price+"/Day</span><button class='button' onClick='flowerSpecials(\""+number+"\")'>Add To Cart</button></figure>";
    });