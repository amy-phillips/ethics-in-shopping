
/****************************************************** 
// shared functionality across the various websites
*******************************************************/


function TitleContainsACompany(title, companies) {
    var arrayLength = companies.length;
    for (var c = 0; c < arrayLength; c++) {
        // first check if the company name is in the item title
        var namesLength = companies[c].company.length;
        var found = false;
        for (var n = 0; n < namesLength; n++) {
            if(title.indexOf(companies[c].company[n]) != -1){
                found = true;
                break;
            } 
        }  
        if(!found) {
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
