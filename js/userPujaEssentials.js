// var fbRef = db.ref().child("Products").child("Puja Essentials").child("Utensils");
// // removed the storage reference
// fbRef.on("child_added", snap => {
//     var name = snap.child("name").val();
//     var des = snap.child("des").val();
//     var price = snap.child("price").val();
//     // var description = snap.child("des").val();
//     var image = snap.child("image").val();
//     var code = snap.child("code").val();
//     var number = snap.key;
//     console.log(name);
//
//
//     document.getElementById("card1").innerHTML +=  `<li class="cards_item" onclick="flowerSpecials('${number}')">
//         <div class="card">
//         <div class="card_image"><img src="${image}"></div>
//         <div class="card_content">
//         <h2 class="card_title">${name}
//     <br> (hindi)
//     </h2>
//     <p class="card_text">&#8377;${price}</p>
//         <button class="btn card_btn">Add To Cart</button>
//
//     </div>
//     </div>
//     </li>`
//
// });

var fbRef = db.ref().child("Products").child("Puja Essentials").child("Samagris");
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


    document.getElementById("card2").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Samagris')">
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
    </li>`

});

// var fbRef = db.ref().child("Products").child("Puja Essentials").child("Poshak");
// // removed the storage reference
// fbRef.on("child_added", snap => {
//     var name = snap.child("name").val();
//     var des = snap.child("des").val();
//     var price = snap.child("price").val();
//     // var description = snap.child("des").val();
//     var image = snap.child("image").val();
//     var code = snap.child("code").val();
//     var number = snap.key;
//     console.log(name);
//
//
//     document.getElementById("card3").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Poshak')">
//         <div class="card">
//         <div class="card_image"><img src="${image}"></div>
//         <div class="card_content">
//         <h2 class="card_title">${name}
//     <br> (hindi)
//     </h2>
//     <p class="card_text">&#8377;${price}</p>
//         <button class="btn card_btn">Add To Cart</button>
//
//     </div>
//     </div>
//     </li>`
//
// });

var fbRef = db.ref().child("Products").child("Puja Essentials").child("Mandirs");
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


    document.getElementById("card4").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}', 'Mandirs')">
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
    </li>`

});

var fbRef = db.ref().child("Products").child("Puja Essentials").child("Idols");
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


    document.getElementById("card5").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Idols')">
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
    </li>`

});