var fbRef = db.ref().child("Products").child("Pandits").child("Normal");
    // removed the storage reference
fbRef.on("child_added", snap => {
var name = snap.child("name").val();
var des = snap.child("des").val();
var price = snap.child("price").val();
// var description = snap.child("des").val();
var image = snap.child("image").val();
// var code = snap.child("code").val();
var number = snap.key;
document.getElementById("lol3").innerHTML +=  `<div class="product">
    <div class="make3D">
        <div class="product-front">
            <div class="shadow"></div>
            <img src="`+image+`" alt="" />
            <div class="image_overlay"></div>
            <div class="add_to_cart">Add to cart</div>
                <div class="view_details2" onClick='pundits("`+number+`","Normal")'>View Details</div>
            
            <div class="stats">
                <div class="stats-container">
                    <span class="product_price">&#8377;`+price+`</span>
                    <span class="product_name">`+name+`</span>
                   

                </div>
            </div>
        </div>

        <div class="product-back">
            <div class="shadow"></div>
            <div class="carousel">
                <h2>hellasdfghjkljghasdfgyhuijofrdeo</h2>
            </div>
            <div class="flip-back">
                <div class="cy"></div>
                <div class="cx"></div>
            </div>
        </div>
    </div>
</div> `  
// $("#NormalPandits").append("<tr><td data-th='Ref. ID'>"+number+"</td><td data-th='Product Name'>"+name+"</td><td data-th='Cost'>"+price+"</td><td data-th='View'><button type='button' style='width: 5vw;' class='btn btn-danger' onClick='flowerDailySubscriptions(\""+number+"\")'>VIEW</button></td></tr>");    
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fbRef = db.ref().child("Products").child("Pandits").child("Recommended");
// removed the storage reference
fbRef.on("child_added", snap => {
var name = snap.child("name").val();
var des = snap.child("des").val();
var price = snap.child("price").val();
// var description = snap.child("des").val();
var image = snap.child("image").val();
// var code = snap.child("code").val();
var number = snap.key;
document.getElementById("lol4").innerHTML +=  `<div class="product">
    <div class="make3D">
        <div class="product-front">
            <div class="shadow"></div>
            <img src="`+image+`" alt="" />
            <div class="image_overlay"></div>
            <div class="add_to_cart">Add to cart</div>
                <div class="view_details2" onClick='pundits("`+number+`","Recommended")'>View Details</div>
            
            <div class="stats">
                <div class="stats-container">
                    <span class="product_price">&#8377;`+price+`</span>
                    <span class="product_name">`+name+`</span>
              

                </div>
            </div>
        </div>

        <div class="product-back">
            <div class="shadow"></div>
            <div class="carousel">
                <h2>hellasdfghjkljghasdfgyhuijofrdeo</h2>
            </div>
            <div class="flip-back">
                <div class="cy"></div>
                <div class="cx"></div>
            </div>
        </div>
    </div>
</div> `  
// $("#RecommendedPandits").append("<tr><td data-th='Ref. ID'>"+number+"</td><td data-th='Product Name'>"+name+"</td><td data-th='Cost'>"+price+"</td><td data-th='View'><button type='button' style='width: 5vw;' class='btn btn-danger' onClick='flowerDailySubscriptions(\""+number+"\")'>VIEW</button></td></tr>");    
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fbRef = db.ref().child("Products").child("Pandits").child("Anusthans");
// removed the storage reference
fbRef.on("child_added", snap => {
var name = snap.child("name").val();
var des = snap.child("des").val();
var price = snap.child("price").val();
// var description = snap.child("des").val();
var image = snap.child("image").val();
// var code = snap.child("code").val();
var number = snap.key;
document.getElementById("lol5").innerHTML +=  `<div class="product">
    <div class="make3D">
        <div class="product-front">
            <div class="shadow"></div>
            <img src="`+image+`" alt="" />
            <div class="image_overlay"></div>
            <div class="add_to_cart">Add to cart</div>
                <div class="view_details2" onClick='pundits("`+number+`","Anusthans")'>View Details</div>
            
            <div class="stats">
                <div class="stats-container">
                    <span class="product_price">&#8377;`+price+`</span>
                    <span class="product_name">`+name+`</span>
               

                </div>
            </div>
        </div>

        <div class="product-back">
            <div class="shadow"></div>
            <div class="carousel">
                <h2>hellasdfghjkljghasdfgyhuijofrdeo</h2>
            </div>
            <div class="flip-back">
                <div class="cy"></div>
                <div class="cx"></div>
            </div>
        </div>
    </div>
</div> `  
// $("#AnusthansPandits").append("<tr><td data-th='Ref. ID'>"+number+"</td><td data-th='Product Name'>"+name+"</td><td data-th='Cost'>"+price+"</td><td data-th='View'><button type='button' style='width: 5vw;' class='btn btn-danger' onClick='flowerDailySubscriptions(\""+number+"\")'>VIEW</button></td></tr>");    
});