


function SetItemBackgrounds() {
    // search results or multiple results
    var products = $('.gridItem');
    products.each(function(){
        // grab the brand text from the label
        var brandname = $(this).find(".productNameAndPromotions").text();

        SetBackground(brandname, $(this));
    });

    // product details for one product
    var pdp = $('.productSummary');
    var product = pdp.find('.productTitleDescriptionContainer');
    if(pdp && product) {
        SetBackground(product.text(), pdp);
    }

    BiggifyPalmOil();
}

function BiggifyPalmOil() {
    var ingredients = $('.productIngredients');
    if(ingredients.length == 0)
        ingredients = $('.productText');

    if(ingredients.length == 0)
        return;

    palm = ingredients.find("li:contains('Palm')");
    if(palm.length == 0)
        palm = ingredients.find("p:contains('Palm')");

    if(palm) {
        palm.css({ 'color': 'red', 'font-size': '150%' });
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
        // we run our code to set bg colours periodically to deal with users filtering etc
        setInterval(SetItemBackgrounds, 2000);
    }

}

waitForReady();

