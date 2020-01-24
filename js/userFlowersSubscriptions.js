var fbRef = db.ref().child("Products").child("Flowers").child("Subscriptions");
    // removed the storage reference
    fbRef.on("child_added", snap => {
    var name = snap.child("name").val();
    var des = snap.child("des").val();
    var price = snap.child("price").val();
    // var description = snap.child("des").val();
    var image = snap.child("image").val();
    // var code = snap.child("code").val();
    var number = snap.key;
    document.getElementById("card1").innerHTML +=  `<li class="cards_item" onclick="flowerSubscription('${number}')">
        <div class="card">
        <div class="card_image"><img src="${image}"></div>
        <div class="card_content">
        <h2 class="card_title">${name}
    <br> (hindi)
    </h2>
    <p class="card_text">&#8377;${price}</p>
        <button class="btn card_btn">Add To Cart</button>

    </div>
    </div>
    </li>`    });