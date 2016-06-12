// data from ethical consumer website (http://www.ethicalconsumer.org/shoppingethically/palmoilfreelist.aspx)
// - TODO update this to use data from the database at http://www.corporatecritic.org/


HoverTextEnum = {
    biscuits_nopalm : ' is palm oil free.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    biscuits_organic : ' uses organic palm oil.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    biscuits_fairpalm : ' uses FairPalm palm oil.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    biscuits_sustainable : ' uses sustainable palm oil.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    biscuits_bad : ' uses unsustainable palm oil.  For more details and a list of more ethical alternatives click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    
    petfood_nopalm : ' is palm oil free.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    petfood_sustainable : ' uses sustainable palm oil.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    petfood_bad : ' uses unsustainable palm oil.  For more details and a list of more ethical alternatives click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',

    nutbutter_nopalm : ' is palm oil free.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    nutbutter_sustainable : ' uses sustainable palm oil.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',

    chocspread_nopalm : ' is palm oil free.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    chocspread_sustainable : ' uses sustainable palm oil.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    chocspread_bad : ' uses unsustainable palm oil.  For more details and a list of more ethical alternatives click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',

    chocs_nopalm : ' is palm oil free.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    chocs_sustainable : ' uses sustainable palm oil.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    chocs_organic : ' uses organic palm oil.  For more details click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',
    chocs_bad : ' uses unsustainable palm oil.  For more details and a list of more ethical alternatives click the extension icon in the top right of your browser and follow the link to the Ethical Consumer website',

}

var gGoodProducts = [
/******************************************************************************************************
Biscuits
 
Palm oil free biscuits:
Most likely those biscuits that are 'all butter' or more expensive 'cookies'.
Island Bakery (all organic): all biscuits; 
Waitrose Duchy Organic (all organic):  all biscuits
Co-op: All Butter Shortbread Fingers, Jaffa Cakes, Truly Irresistible Cookies
Bahlsen: Choco Leibniz Dark, Milk, Chocolate Orange; Butter Biscuits; 
Walkers: Shortbread, All Butter Sultana Biscuits, Chocolate Chip; 
Waitrose: All Butter Cookies, Milk Chocolate & Chocolate Chip Cookies, Scottish Shortbread, Belgian dark chocolate thins, Viennese swirls & fingers, Seriously shortbread, Seriously chocolate and ginger biscuits, Seriously triple chocolate, Continental milk chocolate butter biscuits, Continental dark chocolate butter biscuits
McVitie's: Rich Tea, Digestives Light; 
Sainsbury's: Shortbread (except Basics), Taste the Difference Cookies, SO Organic chocolate chip cookies, SO Organic dark chocolate orange, Flapjack Cookies, Jaffa Cakes, Almond Cantuccini
M&S: Shortbread Rounds & Fingers, All Butter Dunkers, All Butter Cookies, All Butter Biscuits, All Butter Battenberg Squares, Viennese Swirls, Viennese Chocolate Dipped Fingers, Roly Poly Swirls, Mini Oat, Belgian Chocolate Chunk Cookies
 
Best company rating for palm oil:
Palm oil free company - Island Bakery
Use organic palm oil - Against the Grain, Biona, Doves Farm, Duchy Originals
Use FairPalm - Traidcraft
Use certified sustainable palm oil - Nairn's, Bahlsen, Walkers, Hill Biscuits, M&S, Co-op, Sainsbury's, Waitrose, Burton's Biscuits, Mrs Crimble's, Crawfords, McVities, Oreo, Cadbury's 
 
Worst company rating for palm oil:
ASDA, Morrisons, Tesco, Aldi, Lidl, Iceland
*/
{ company: ["Island Bakery"], products: [], hover: HoverTextEnum.biscuits_nopalm },
//Waitrose Duchy Organic all biscuits
//Co-op: All Butter Shortbread Fingers, Jaffa Cakes, Truly Irresistible Cookies
{ company: ["Bahlsen"], products: ["Leibniz"], hover: HoverTextEnum.biscuits_nopalm }, 
{ company: ["Walkers"], products: ["Shortbread","All Butter Sultana Biscuits","Chocolate Chip"], hover: HoverTextEnum.biscuits_nopalm }, 
//Waitrose: All Butter Cookies, Milk Chocolate & Chocolate Chip Cookies, Scottish Shortbread, Belgian dark chocolate thins, Viennese swirls & fingers, Seriously shortbread, Seriously chocolate and ginger biscuits, Seriously triple chocolate, Continental milk chocolate butter biscuits, Continental dark chocolate butter biscuits
{ company: ["McVitie's","Mcvities"], products: ["Rich Tea","Light Digestive Biscuits"], hover: HoverTextEnum.biscuits_nopalm },
{ company: ["Sainsbury's"], products: ["Shortbread","Cookies, Taste the Difference", "Cookies","SO Organic chocolate chip cookies","SO Organic dark chocolate orange","Flapjack Cookies","Jaffa Cakes","Almond Cantuccini"], hover: HoverTextEnum.biscuits_nopalm }, // (except Basics) see BadProducts
{ company: ["Sainsbury's Cookies"], products: ["Taste the Difference"], hover: HoverTextEnum.biscuits_nopalm }, // these two entries should cover all taste the diff cookies 
//M&S: Shortbread Rounds & Fingers, All Butter Dunkers, All Butter Cookies, All Butter Biscuits, All Butter Battenberg Squares, Viennese Swirls, Viennese Chocolate Dipped Fingers, Roly Poly Swirls, Mini Oat, Belgian Chocolate Chunk Cookies

//Use organic palm oil -
{ company: ["Against the Grain"], products: [], hover: HoverTextEnum.biscuits_organic },
{ company: ["Biona"], products: [], hover: HoverTextEnum.biscuits_organic },
{ company: ["Doves Farm"], products: [], hover: HoverTextEnum.biscuits_organic },
{ company: ["Duchy Originals"], products: [], hover: HoverTextEnum.biscuits_organic },

//Use FairPalm - Traidcraft
{ company: ["Traidcraft"], products: [], hover: HoverTextEnum.biscuits_fairpalm },

//Use certified sustainable palm oil - 
{ company: ["Nairn's"], products: ["Oatcake","Biscuit"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Bahlsen"], products: ["Biscuit"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Walkers"], products: ["Biscuit"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Hill Biscuits"], products: [], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Burton's Biscuits"], products: [], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Mrs Crimble's"], products: ["Macaroon","Bakewell"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Mrs. Crimble's"], products: ["Macaroon","Bakewell"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Crawfords"], products: ["Biscuit"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["McVitie's"], products: ["Biscuit","Digestive","Biscuits","Digestives"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Oreo"], products: ["Biscuit"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Cadbury"], products: ["Biscuit"], hover: HoverTextEnum.biscuits_sustainable },
{ company: ["Sainsbury's"], products: ["Biscuit","Digestive","Biscuits","Digestives"], hover: HoverTextEnum.biscuits_sustainable },

/******************************************************************************************************
Pet food
 
Best company rating for palm oil:
Palm oil free company - Ami, Benevo, Yarrah, Burns, Meowing Heads, Harringtons, Wagg, Barking Heads, V-Dog
Use certified sustainable palm oil - Hill’s, Nestlé Purina brands (Felix, Go-Cat, Purina, Gourmet, Bakers, Bonio, Winalot), Mars brands (Whiskas, Sheba, Kitekat, James Wellbeloved, Royal Canin, Pal, Pedigree, Cesar, Chappie), Sainsbury's, Waitrose, the Co-op
 
Worst company rating for palm oil:
Applaws, Encore, Butcher's, Hi-Life, Eukanuba, Iams, Tesco, Morrisons, ASDA, Aldi, Lidl
 */
{ company: ["Ami"], products: [], hover: HoverTextEnum.petfood_nopalm },
{ company: ["Benevo"], products: [], hover: HoverTextEnum.petfood_nopalm },
{ company: ["Yarrah"], products: [], hover: HoverTextEnum.petfood_nopalm },
{ company: ["Burns"], products: [], hover: HoverTextEnum.petfood_nopalm },
{ company: ["Meowing Heads"], products: [], hover: HoverTextEnum.petfood_nopalm },
{ company: ["Harringtons"], products: [], hover: HoverTextEnum.petfood_nopalm },
{ company: ["Wagg"], products: [], hover: HoverTextEnum.petfood_nopalm },
{ company: ["Barking Heads"], products: [], hover: HoverTextEnum.petfood_nopalm },
{ company: ["V-Dog"], products: [], hover: HoverTextEnum.petfood_nopalm },

{ company: ["Hill’s"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Felix"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Go-Cat"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Purina"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Gourmet"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Bakers"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Bonio"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Winalot"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Whiskas"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Sheba"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Kitekat"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["James Wellbeloved"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Royal Canin"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Pal"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Pedigree"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Cesar"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Chappie"], products: [], hover: HoverTextEnum.petfood_sustainable },
{ company: ["Sainsbury's"], products: ["Delicious Collection"], hover: HoverTextEnum.petfood_sustainable },
 
/******************************************************************************************************
Palm oil free nut butters:
Essential (organic): all
Biona (organic): all
Suma (organic): all
Meridian: all, some organic
Whole Earth: 100% Peanuts organic
 
Best company rating for palm oil:
Palm oil free company - Meridian
Use certified sustainable palm oil - Essential (organic), Biona (organic), Suma, Whole Earth, Sainsbury's, Waitrose, Co-op, M&S
*/
{ company: ["Essential"], products: [], hover: HoverTextEnum.nutbutter_nopalm },
{ company: ["Biona"], products: [], hover: HoverTextEnum.nutbutter_nopalm },
{ company: ["Suma"], products: [], hover: HoverTextEnum.nutbutter_nopalm },
{ company: ["Meridian"], products: [], hover: HoverTextEnum.nutbutter_nopalm },
{ company: ["Whole Earth"], products: [], hover: HoverTextEnum.nutbutter_nopalm },
{ company: ["Sun Pat"], products: [], hover: HoverTextEnum.nutbutter_nopalm }, // uses peanut oil

{ company: ["Sainsbury's"], products: ["Peanut Butter"], hover: HoverTextEnum.nutbutter_sustainable },

/******************************************************************************************************
Chocolate spread
 
Palm oil free chocolate spreads:
Very hard to find.
Waitrose Seriously Chocolatey
 
Best company rating for palm oil:
Use certified sustainable palm oil - Essential (Fairtrade & organic), Plamil (organic & vegan), Biona (organic), Traidcraft (FairPalm), Vivani (organic), Nutella, Cadbury, Sainsbury's, Waitrose, Co-op, M&S
*/
{ company: ["Essential"], products: [], hover: HoverTextEnum.chocspread_sustainable },
{ company: ["Plamil"], products: [], hover: HoverTextEnum.chocspread_sustainable },
{ company: ["Biona"], products: [], hover: HoverTextEnum.chocspread_sustainable },
{ company: ["Traidcraft"], products: [], hover: HoverTextEnum.chocspread_sustainable },
{ company: ["Vivani"], products: [], hover: HoverTextEnum.chocspread_sustainable },
{ company: ["Nutella"], products: [], hover: HoverTextEnum.chocspread_sustainable },
{ company: ["Cadbury"], products: ["Chocolate Spread"], hover: HoverTextEnum.chocspread_sustainable },
{ company: ["Sainsbury's"], products: ["Chocolate Spread", "Caramel Spread", "Chocolate Swirl Spread"], hover: HoverTextEnum.chocspread_sustainable },
//Waitrose, Co-op, M&S

/******************************************************************************************************
Boxes of chocolates and gift chocolates
 
Palm oil free boxes of chocolates:
Divine (Fairtrade): all chocolate (After Dinner thins, Chocolate Bar Selection, Belgian Chocolate Collection) - go to online shop >
Booja Booja (organic & vegan): all chocolate (truffles)
Montezuma (organic): all gift chocolate - go to online shop >
Vivani (organic): all gift chocolate (mini bars gift tins)
Co-op: 24 Assorted Chocolate Truffles, Chocolate Coins, Truly Irresistible Milk Chocolate Truffles gift cube, Truly Irresistible Mint Selection, Loved By Us Belgian Chocolate Pralines,  Loved By Us Irish Cream Liqueurs
M&S: Sequin Star/Tree with Truffles, Sparkling Wine Truffles, Dulce de Leche Truffles, Marc de Champagne Truffles, Mixologist's Box, Chocolate filled Christmas Crackers, Gastronomic Collection, Sparkling Caramels, Marzipan Collection, Italian Gianduiotto
Waitrose: Dark Chocolate Mint Creams, Dark Chocolate Mint Thins, Chocolate Mint Collection, Chocolate Ginger, Seriously Chocolatey milk chocolate truffles, Seriously Chocolatey Marc de Champagne dark truffles
Sainsbury's: After Dinner Mint Thins, Dark Chocolate Orange Thins, Taste the Difference Belgian Chocolate Cranberry and Pistachio Wreath, Belgian Chocolate Seashells, Taste the Difference Belgian Marzipan Assortment, Crunchy Mint Sticks, Crunchy Orange Sticks, Milk Chocolate Brazils, Milk Chocolate Honeycomb, Taste the Difference Swiss Hazelnut Praline Truffles, Taste the Difference Swiss Milk Choc Baubles, Taste the Difference Swiss Milk Choc Tree Decorations
Nestle: After Eight mints
Mondelez: Terry's Chocolate Orange Plain, Toblerone (all varieties)
Guylian: Seashells, Dark Chocolate Sea Horses, Pearles d'Ocean tin
Lindt: HELLO Just for You

Best company rating for palm oil:
Booja Booja (organic, palm oil free company),
Divine (Fairtrade, palm oil free company),
Cocoa Loco (organic),
Montezuma (organic),
Vivani (organic),
Ferrero Rocher, Raffaello,
Nestle brands (After Eight, Black Magic, Dairy Box, Quality Street),
Mondelez brands (Green & Black's Organic Collection, Milk Tray, Roses, Heroes, Terry's Chocolate Orange, Terry's All Gold, Toblerone),
Mars brands (Celebrations),
Guylian,
Lindt: Lindor, Lindt
Waitrose,
Co-op,
M&S,
Sainsbury's

Worst company rating for palm oil:
Thorntons,
Elizabeth Shaw,
ASDA,
Morrisons,
Tesco,
Aldi,
Lidl,
Iceland
*/
// palm oil free
{ company: ["Divine"], products: [], hover: HoverTextEnum.chocs_nopalm }, //After Dinner thins, Chocolate Bar Selection, Belgian Chocolate Collection
{ company: ["Booja Booja"], products: [], hover: HoverTextEnum.chocs_nopalm },
{ company: ["Montezuma"], products: [], hover: HoverTextEnum.chocs_nopalm },
{ company: ["Vivani"], products: [], hover: HoverTextEnum.chocs_nopalm },
//Co-op: 24 Assorted Chocolate Truffles, Chocolate Coins, Truly Irresistible Milk Chocolate Truffles gift cube, Truly Irresistible Mint Selection, Loved By Us Belgian Chocolate Pralines,  Loved By Us Irish Cream Liqueurs
//M&S: Sequin Star/Tree with Truffles, Sparkling Wine Truffles, Dulce de Leche Truffles, Marc de Champagne Truffles, Mixologist's Box, Chocolate filled Christmas Crackers, Gastronomic Collection, Sparkling Caramels, Marzipan Collection, Italian Gianduiotto
//Waitrose: Dark Chocolate Mint Creams, Dark Chocolate Mint Thins, Chocolate Mint Collection, Chocolate Ginger, Seriously Chocolatey milk chocolate truffles, Seriously Chocolatey Marc de Champagne dark truffles
{ company: ["Sainsbury's"], products: ["After Dinner Mint Thins", "Dark Chocolate Orange Thins", "Taste the Difference Belgian Chocolate Cranberry and Pistachio Wreath", "Belgian Chocolate Seashells", "Taste the Difference Belgian Marzipan Assortment", "Crunchy Mint Sticks", "Crunchy Orange Sticks", "Milk Chocolate Brazils", "Milk Chocolate Honeycomb", "Taste the Difference Swiss Hazelnut Praline Truffles", "Taste the Difference Swiss Milk Choc Baubles", "Taste the Difference Swiss Milk Choc Tree Decorations"], hover: HoverTextEnum.chocs_nopalm },
{ company: ["Nestle"], products: ["After Eight mints"], hover: HoverTextEnum.chocs_nopalm },
{ company: ["Terry's"], products: ["Chocolate Orange Plain"], hover: HoverTextEnum.chocs_nopalm },
{ company: ["Toblerone"], products: [], hover: HoverTextEnum.chocs_nopalm },
{ company: ["Guylian"], products: ["Seashells", "Dark Chocolate Sea Horses", "Pearles d'Ocean tin"], hover: HoverTextEnum.chocs_nopalm },
{ company: ["Lindt"], products: ["hello"], hover: HoverTextEnum.chocs_nopalm },

{ company: ["Cocoa Loco"], products: [], hover: HoverTextEnum.chocs_organic },
{ company: ["Ferrero Rocher"], products: [], hover: HoverTextEnum.chocs_sustainable },
{ company: ["Raffaello"], products: [], hover: HoverTextEnum.chocs_sustainable },
//Nestle brands
{ company: ["After Eight"], products: [], hover: HoverTextEnum.chocs_sustainable },
{ company: ["Black Magic"], products: [], hover: HoverTextEnum.chocs_sustainable },
{ company: ["Dairy Box"], products: [], hover: HoverTextEnum.chocs_sustainable },
{ company: ["Quality Street"], products: [], hover: HoverTextEnum.chocs_sustainable },
//Mondelez brands
{ company: ["Green & Black's"], products: [], hover: HoverTextEnum.chocs_sustainable },
{ company: ["Cadbury"], products: ["Milk Tray", "Roses", "Heroes"], hover: HoverTextEnum.chocs_sustainable },
{ company: ["Terry's"], products: ["Chocolate Orange", "All Gold"], hover: HoverTextEnum.chocs_sustainable },
{ company: ["Toblerone"], products: [], hover: HoverTextEnum.chocs_sustainable },
{ company: ["Celebrations"], products: ["240g", "Mini Pack"], hover: HoverTextEnum.chocs_sustainable }, // to avoid grabbing all things with celebbrations in the title!
{ company: ["Lindt"], products: ["Lindor"], hover: HoverTextEnum.chocs_sustainable }
//Waitrose,Co-op,M&S,Sainsbury's

];

var gBadProducts = [
{ company: ["Sainsbury's"], products: ["Shortbread Fingers, Basics"], hover: HoverTextEnum.biscuits_bad }, 
{ company: ["Tesco"], products: ["Biscuits","Mini Shortbread Bites",], hover: HoverTextEnum.biscuits_bad },

// pet food
{ company: ["Applaws"], products: [], hover: HoverTextEnum.petfood_bad }, 
{ company: ["Encore"], products: ["Cat","Kitten","Puppy","Dog","Chicken","Selection","Salmon"], hover: HoverTextEnum.petfood_bad }, 
{ company: ["Butcher's","Butchers"], products: ["Tripe", "Recipes Variety","Jelly","Country Stews","Lean & Tasty","Lean And Tasty","Choice Senior","Meaty Stews","Choice Chicken","Succulent Feasts","Puppy","Superior Chunks","Simply Gentle","Choice, Superior","Original Recipes","Classic Meat Variety","Classic Fish Variety","Meaty Stew Selection","Rustic Feasts","Supreme Feasts","Choice Beef 150G"], hover: HoverTextEnum.petfood_bad }, 
{ company: ["Classic Fish Variety"], products: [], hover: HoverTextEnum.petfood_bad }, // tesco doesn't put Butcher's in the text for this one :(
{ company: ["Classic Mixed Variety"], products: [], hover: HoverTextEnum.petfood_bad }, // tesco doesn't put Butcher's in the text for this one :(
{ company: ["HiLife"], products: [], hover: HoverTextEnum.petfood_bad }, 
{ company: ["Eukanuba"], products: [], hover: HoverTextEnum.petfood_bad }, 
{ company: ["Iams"], products: [], hover: HoverTextEnum.petfood_bad }, 
//Tesco, Morrisons, ASDA, Aldi, Lidl

{ company: ["Tesco"], products: ["Chocolate Spread"], hover: HoverTextEnum.chocspread_bad },


//Boxes of chocolates and gift chocolates
{ company: ["Thorntons"], products: [], hover: HoverTextEnum.chocs_bad }, 
{ company: ["Elizabeth Shaw"], products: [], hover: HoverTextEnum.chocs_bad },
{ company: ["Tesco"], products: ["Swiss Chocolate Collection","Finest Swiss Chocolate Orange","Chocolate Malted Milk Biscuits","Chocolate Chip Cookies"], hover: HoverTextEnum.chocs_bad }
//ASDA,Morrisons,Tesco,Aldi,Lidl,Iceland 
  
];
