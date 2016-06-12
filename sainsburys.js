


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

function SetItemBackgrounds() {
    var products = $('.product');
    products.each(function(){
        // grab the brand text from the label
        var brandname = $(this).find(".productNameAndPromotions").text();

        // set bg colour based on goodness
        var company = TitleContainsACompany(brandname, gBadProducts);
        if(company) {
            console.log(brandname + " is a baddie");
            $(this).css('background-color', 'tomato');
            $(this).attr('title', GetHoverText(company));
        } else {
            company = TitleContainsACompany(brandname, gGoodProducts);
            if(company) {
                console.log(brandname + " is a goodie");
                $(this).css('background-color', 'lawngreen'); 
                $(this).attr('title', GetHoverText(company));
            } 
        }
    });
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

