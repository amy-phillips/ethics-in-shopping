


function TitleContainsACompany(title, companies) {
    var arrayLength = companies.length;
    for (var c = 0; c < arrayLength; c++) {
        // first check if the company name is in the item title
        if(title.indexOf(companies[c].company) == -1){
            continue;
        }

        // next check we have at least one of the item names
        var prodLength = companies[c].products.length;
        if(prodLength == 0)
            return companies[c];
        
        for (var p = 0; p < prodLength; p++) {
            if(title.indexOf(companies[c].products[p]) != -1){
                return companies[c];
            }
        }
    }

    return null;
}

function GetHoverText(product) {
    return product.company + product.hover;
}

function SetBackground(brandname, div) {
    // set bg colour based on goodness
    var company = TitleContainsACompany(brandname, gBadProducts);
    if(company) {
        div.css('background-color', 'tomato');
        div.attr('title', GetHoverText(company));
    } else {
        company = TitleContainsACompany(brandname, gGoodProducts);
        if(company) {
            div.css('background-color', 'lawngreen'); 
            div.attr('title', GetHoverText(company));
        } 
    }
}

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

