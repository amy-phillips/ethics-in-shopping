


chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    // debug div to display the source of the sainsburys web page
    //var srcbox = document.querySelector('#src');
    //srcbox.innerText = request.source;
    
    // find the Top Brands section and extract the brand names
    var brandsdiv = $('<div>' + request.source + '</div>').find('.topBrands');
   
    var brandlist = document.createElement('ul');
    brandsdiv.find("label").each(function(){
        // Create the list item:
        var item = document.createElement('li');

        var formatted_brand = CheckBrandEthics($(this).text());
        // Set its contents:
        item.appendChild(formatted_brand);

        // Add it to the list:
        brandlist.appendChild(item);
    });
 
    // to see this console you have to right-click on the extension window and select inspect
    console.log(brandlist);

    // display ethical ratings
    var messagebox = document.querySelector('#message');
    while (messagebox.firstChild) {
        messagebox.removeChild(messagebox.firstChild);
    }
    messagebox.appendChild(brandlist);
  }
});

function onWindowLoad() {

  var srcbox = document.querySelector('#src');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      srcbox.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

// check for ethics and format accordingly
function CheckBrandEthics(brand) {
    var span = document.createElement('span');

    // set colour based on goodness
    if(gGoodCompanies.includes(brand)) {
        span.style.color = "green";
    } else if(gBadCompanies.includes(brand)) {
        span.style.color = "red";
    }
    
    // set text to brand name
    span.appendChild(document.createTextNode(brand));
    return span;
}

window.onload = onWindowLoad;

