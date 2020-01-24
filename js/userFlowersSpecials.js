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


    document.getElementById("grid1").innerHTML += ` <div class="product">
                                <div class="make3D">
                                    <div class="product-front">
                                        <div class="shadow"></div>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/puja-sanskar.appspot.com/o/Products%2FFlowers%2FSubsriptions%2F1.jpg?alt=media&token=6666de84-f1ce-49e6-96bb-94cb977127f6" alt="" />
                                        <div class="image_overlay">
                                        <div class="add_to_cart">Add to cart</div>
                                        <a href="product.html">
                                            <div class="view_details2">View Details</div>
                                        </a>
                                        </div>
                                        <div class="stats">
                                            <div class="stats-container">
                                                <span class="product_price">&#8377;12/day</span>
                                                <span class="product_name">Seasonal Fresh Flowers</span>
                                                <p>(Hindi)</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`

}).then(function() {
    console.log("starting animation js");
    $(".largeGrid").click(function() {
        $(this).find('a').addClass('active');
        $('.smallGrid a').removeClass('active');

        $('.product').addClass('large').each(function() {});
        setTimeout(function() {
            $('.info-large').show();
        }, 200);
        setTimeout(function() {

            $('.view_details').trigger("click");
        }, 400);

        return false;
    });

    $(".smallGrid").click(function() {
        $(this).find('a').addClass('active');
        $('.largeGrid a').removeClass('active');

        $('div.product').removeClass('large');
        $(".make3D").removeClass('animate');
        $('.info-large').fadeOut("fast");
        setTimeout(function() {
            $('div.flip-back').trigger("click");
        }, 400);
        return false;
    });

    $(".smallGrid").click(function() {
        $('.product').removeClass('large');
        return false;
    });

    $('.colors-large a').click(function() { return false; });


    $('.product').each(function(i, el) {

        // Lift card and show stats on Mouseover
        $(el).find('.make3D').hover(function() {
            $(this).parent().css('z-index', "20");
            $(this).addClass('animate');
            $(this).find('div.carouselNext, div.carouselPrev').addClass('visible');
        }, function() {
            $(this).removeClass('animate');
            $(this).parent().css('z-index', "1");
            $(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
        });



        $('.add-cart-large').each(function(i, el) {
            $(el).click(function() {
                var carousel = $(this).parent().parent().find(".carousel-container");
                var img = carousel.find('img').eq(carousel.attr("rel"))[0];
                var position = $(img).offset();

                var productName = $(this).parent().find('h4').get(0).innerHTML;

                $("body").append('<div class="floating-cart"></div>');
                var cart = $('div.floating-cart');
                $("<img src='" + img.src + "' class='floating-image-large' />").appendTo(cart);

                $(cart).css({ 'top': position.top + 'px', "left": position.left + 'px' }).fadeIn("slow").addClass('moveToCart');
                setTimeout(function() { $("body").addClass("MakeFloatingCart"); }, 800);

                setTimeout(function() {
                    $('div.floating-cart').remove();
                    $("body").removeClass("MakeFloatingCart");


                    var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='" + img.src + "' alt='' /></div><span>" + productName + "</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";

                    $("#cart .empty").hide();
                    $("#cart").append(cartItem);
                    $("#checkout").fadeIn(500);

                    $("#cart .cart-item").last()
                        .addClass("flash")
                        .find(".delete-item").click(function() {
                        $(this).parent().fadeOut(300, function() {
                            $(this).remove();
                            if ($("#cart .cart-item").size() == 0) {
                                $("#cart .empty").fadeIn(500);
                                $("#checkout").fadeOut(500);
                            }
                        })
                    });
                    setTimeout(function() {
                        $("#cart .cart-item").last().removeClass("flash");
                    }, 10);

                }, 1000);


            });
        })


        $('.add_to_cart').click(function() {
            var productCard = $(this).parent();
            var position = productCard.offset();
            var productImage = $(productCard).find('img').get(0).src;
            var productName = $(productCard).find('.product_name').get(0).innerHTML;

            $("body").append('<div class="floating-cart"></div>');
            var cart = $('div.floating-cart');
            productCard.clone().appendTo(cart);
            $(cart).css({ 'top': position.top + 'px', "left": position.left + 'px' }).fadeIn("slow").addClass('moveToCart');
            setTimeout(function() { $("body").addClass("MakeFloatingCart"); }, 800);
            setTimeout(function() {
                $('div.floating-cart').remove();
                $("body").removeClass("MakeFloatingCart");


                var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='" + productImage + "' alt='' /></div><span>" + productName + "</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";

                $("#cart .empty").hide();
                $("#cart").append(cartItem);
                $("#checkout").fadeIn(500);

                $("#cart .cart-item").last()
                    .addClass("flash")
                    .find(".delete-item").click(function() {
                    $(this).parent().fadeOut(300, function() {
                        $(this).remove();
                        if ($("#cart .cart-item").size() == 0) {
                            $("#cart .empty").fadeIn(500);
                            $("#checkout").fadeOut(500);
                        }
                    })
                });
                setTimeout(function() {
                    $("#cart .cart-item").last().removeClass("flash");
                }, 10);

            }, 1000);
        });
    })
    });

