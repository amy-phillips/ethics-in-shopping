


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

