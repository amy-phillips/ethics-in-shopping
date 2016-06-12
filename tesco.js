

function SetItemBackgrounds() {
    // search results or multiple results
    var products = $('.product');
    products.each(function(){
        // grab the brand text from the label
        var brandname = $(this).find("[data-title='true']").text();
        SetBackground(brandname, $(this));
    });

    // product details for one product
    var pdp = $('.descriptionDetails');
    var product = pdp.find('.desc');
    if(pdp && product) {
        SetBackground(product.text(), pdp);
    }
}

function BiggifyPalmOil() {
    var ingredients = $('.content');
    if(!ingredients)
        return;

    palm = ingredients.find("p:contains('Palm')")
    if(palm) {
        palm.css({ 'color': 'red' });
    }
}

function waitForReady(){

    // ensure document readystate is complete before messing with colours
    if( document.readyState !== 'complete'){
        setTimeout(function(){
            waitForReady();
        }, 10 );
    }
    else{
        BiggifyPalmOil();


        // we run our code to set bg colours periodically to deal with users filtering etc
        setInterval(SetItemBackgrounds, 2000);
    }

}

waitForReady();

