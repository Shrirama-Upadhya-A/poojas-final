var fbRef = db.ref().child("Products").child("Puja Essentials").child("Brass Utensils");
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


    document.getElementById("brass").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Brass Utensils')">
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
var fbRef = db.ref().child("Products").child("Puja Essentials").child("Copper Utensils");
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


    document.getElementById("copper").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Copper Utensils')">
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
var fbRef = db.ref().child("Products").child("Puja Essentials").child("Kasa Utensils");
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


    document.getElementById("kasa").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Kasa Utensils')">
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
var fbRef = db.ref().child("Products").child("Puja Essentials").child("Silver Utensils");
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


    document.getElementById("silver").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Silver Utensils')">
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


    document.getElementById("card2").innerHTML += `<li class="cards_item" onclick="pujaEssentials('${number}','Samagris')">
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

var fbRef = db.ref().child("Products").child("Puja Essentials").child("Asanas");
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


    document.getElementById("asanas").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Asanas')">
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
var fbRef = db.ref().child("Products").child("Puja Essentials").child("Chunris");
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


    document.getElementById("chunris").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Chunris')">
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
var fbRef = db.ref().child("Products").child("Puja Essentials").child("Mukuts");
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


    document.getElementById("mukuts").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Mukuts')">
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
var fbRef = db.ref().child("Products").child("Puja Essentials").child("Vastras");
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


    document.getElementById("vastra").innerHTML +=  `<li class="cards_item" onclick="pujaEssentials('${number}','Vastras')">
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


    document.getElementById("card4").innerHTML += `<li class="cards_item" onclick="pujaEssentials('${number}', 'Mandirs')">
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


    document.getElementById("card5").innerHTML += `<li class="cards_item" onclick="pujaEssentials('${number}','Idols')">
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