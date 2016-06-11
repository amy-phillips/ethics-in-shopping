
/* doesn;t work yet - don;t understand the forms/checkboxes interaction
function SetBrandCheckboxes() {
    // find the Top Brands section and extract the brand names
    var brandsdiv = $('.topBrands');
    var checkboxes = brandsdiv.find(".checkboxes").find(".input");
    checkboxes.each(function(){
        // grab the brand text from the label
        var brandname = $(this).find("label").text();

        // set checkbox based on goodness
        if(gGoodCompanies.includes(brandname)) {
            console.log(brandname + " is a goodie");
            var checker = $(this).find("[type=checkbox]");
            checker.prop('checked', true);
           // checker.prop('defaultChecked', true);
            console.watch(checker, "checked");
        } else if(gBadCompanies.includes(brandname)) {
            console.log(brandname + " is a baddie");
            $(this).find("checkbox").prop('checked', false);
        } else {
            console.log(brandname + " is unknown");
            $(this).find("checkbox").prop('checked', false);
        }
    });

    // submit form with new checkboxes
    $(".shelfFilterOptions").submit();

}
*/

function TitleContainsACompany(title, companies) {
    var arrayLength = companies.length;
    for (var i = 0; i < arrayLength; i++) {
        if(title.indexOf(companies[i]) != -1){
            return true;
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
        if(TitleContainsACompany(brandname, gGoodCompanies)) {
            console.log(brandname + " is a goodie");
            $(this).css('background-color', 'lawngreen');
        
        } else if(TitleContainsACompany(brandname, gBadCompanies)) {
            console.log(brandname + " is a baddie");
            $(this).css('background-color', 'tomato');
           
        } else {
            console.log(brandname + " is unknown");
           
        }
    });
}

function waitForReady(){

    // ensure document readystate is complete before loading scripts
    if( document.readyState !== 'complete'){
        setTimeout(function(){
            waitForReady();
        }, 1 );
    }
    else{
        //SetBrandCheckboxes();    
        SetItemBackgrounds();
    }

}

waitForReady();

