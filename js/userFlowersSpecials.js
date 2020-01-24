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
    console.log(name);


    document.getElementById("grid1").innerHTML += "<div class=\"product\"> <div class=\"make3D\"> <div class=\"product-front\"> <div class=\"shadow\"></div> <img src=\"https://firebasestorage.googleapis.com/v0/b/puja-sanskar.appspot.com/o/Products%2FFlowers%2FSubsriptions%2F1.jpg?alt=media&token=6666de84-f1ce-49e6-96bb-94cb977127f6\" alt=\"\" /> <div class=\"image_overlay\"></div> <div class=\"add_to_cart\">Add to cart</div> <a href=\"product.html\"> <div class=\"view_details2\">View Details</div> </a> <div class=\"stats\"> <div class=\"stats-container\"> <span class=\"product_price\">&#8377;12/day</span> <span class=\"product_name\">Seasonal Fresh Flowers</span> <p>(Hindi)</p> </div> </div> </div> </div> </div>"
    // `<div class="product"><div class="make3D"><div class="product-front"><div class="shadow"></div><img src="` + image + `" alt="" /><div class="image_overlay"></div><div class="add_to_cart">Add to cart</div><div class="view_details2" onClick = 'flowerSpecials("${number}")'>View Details</div><div class="stats"><div class="stats-container"><span class="product_price">&#8377; ${price} </span><span class="product_name">${name}</span></div></div></div><div class="product-back"><div class="shadow"></div><div class="carousel"><h2>hellasdfghjkljghasdfgyhuijofrdeo</h2></div><div class="flip-back"><div class="cy"></div><div class="cx"></div></div></div></div></div>`

});