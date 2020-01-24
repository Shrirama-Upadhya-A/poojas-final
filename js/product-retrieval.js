// var myData = localStorage['IDData'];
// console.log(myData);
// localStorage.removeItem('IDData'); // Clear the localStorage
//
// const iddd = JSON.parse(myData).id;
// console.log(iddd);
// var type = JSON.parse(myData).type;
// var mainType = JSON.parse(myData).mainType;
// document.getElementById("productTypeName").innerHTML = mainType + " : " + type;

var iddd = 1;
var type = "Anusthans";
var mainType = "Pandits";




function changeImage(im) {
    const activeImage = document.querySelector(".product-image .active");
    console.log({"active-image":activeImage});
    activeImage.src = im;
}


if (mainType == "Flowers") {
    var fbRef = db.ref().child("Products").child("Flowers").child(type);
    // removed the storage reference
    fbRef.on("child_added", snap => {
        console.log("ID::" + iddd + "::::" + "Snap.key ::" + snap.key);
        if (snap.key == iddd) {

            var name = snap.child("name").val();
            var des = snap.child("des").val();
            var price = snap.child("price").val();
            var code = snap.child("code").val();
            var image = snap.child("image").val();

            // document.getElementById("productName").innerHTML = name;
            document.getElementById("mainImage").innerHTML = "<img class='active' src=" + image + ">";
            var fff = 0;

            fbAddressRef = db.ref().child("Products").child("Flowers").child(type).child(iddd).child("Pics");
            fbAddressRef.on("child_added", addressSnap => {

                fff++;
                if (fff > 1) {

                    console.log(addressSnap);
                    var image = addressSnap.child("image").val();
                    document.getElementById("extraImages").innerHTML += "<li class='image-item'><img src=" + image + " onClick='changeImage(\""+ image +"\")'></li>";

                    fff += 1;
                }
            });
            document.getElementById("description").innerHTML += "<h1>" + name + "</h1><h3>&#8377;" + price + "</h3><div class='description'><p>" + des + "</p></div><button class=\"button\">Add To Cart</button>";

        }

    })
}
if (mainType == "Pandits") {
    var fbRef = db.ref().child("Products").child("Pandits").child(type);
    fbRef.on("child_added", snap => {
        console.log("ID::" + iddd + "::::" + "Snap.key ::" + snap.key);
        if (snap.key == iddd) {
            var name = snap.child("name").val();
            var des = snap.child("des").val();
            var price = snap.child("price").val();
            var code = snap.child("code").val();
            var image = snap.child("image").val();

            document.getElementById("mainImage").innerHTML = "<img class='active' src=" + image + ">";
            var fff = 0;

            fbAddressRef = db.ref().child("Products").child("Pandits").child(type).child(iddd).child("Pics");
            fbAddressRef.on("child_added", addressSnap => {

                fff++;
                if (fff > 1) {

                    console.log(addressSnap);
                    var image = addressSnap.child("image").val();
                    document.getElementById("extraImages").innerHTML += "<li class='image-item'><img src=" + image + " onClick='changeImage(\""+ image +"\")'></li>";

                    fff += 1;
                }
            });
            document.getElementById("description").innerHTML += "<h1>" + name + "</h1><h3>&#8377;" + price + "</h3><div class='description'><p>" + des + "</p></div><button class=\"button\">Add To Cart</button>";

        }

    });
}





