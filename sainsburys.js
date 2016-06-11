


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
            return true;
        
        for (var p = 0; p < prodLength; p++) {
            if(title.indexOf(companies[c].products[p]) != -1){
                return true;
            }
        }
    }

    return false;
}

function SetItemBackgrounds() {
    var products = $('.product');
    products.each(function(){
        // grab the brand text from the label
        var brandname = $(this).find(".productNameAndPromotions").text();

        // set bg colour based on goodness
        if(TitleContainsACompany(brandname, gBadProducts)) {
            console.log(brandname + " is a baddie");
            $(this).css('background-color', 'tomato');
        } else if(TitleContainsACompany(brandname, gGoodProducts)) {
            console.log(brandname + " is a goodie");
            $(this).css('background-color', 'lawngreen'); 
        } else {
            //console.log(brandname + " is unknown");
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

