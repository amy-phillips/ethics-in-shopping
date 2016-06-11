// data from ethical consumer website (http://www.ethicalconsumer.org/shoppingethically/palmoilfreelist.aspx)
// - TODO update this to use data from the database at http://www.corporatecritic.org/



var gGoodProducts = [
// biscuits
{ company: "Island Bakery", products: [] },
//Waitrose Duchy Organic all biscuits
//Co-op: All Butter Shortbread Fingers, Jaffa Cakes, Truly Irresistible Cookies
{ company: "Bahlsen", products: ["Choco Leibniz Biscuits"] }, 
{ company: "Walkers", products: ["Shortbread"] }, 
{ company: "Walkers", products: ["All Butter Sultana Biscuits"] },
{ company: "Walkers", products: ["Chocolate Chip"] },
//Waitrose: All Butter Cookies, Milk Chocolate & Chocolate Chip Cookies, Scottish Shortbread, Belgian dark chocolate thins, Viennese swirls & fingers, Seriously shortbread, Seriously chocolate and ginger biscuits, Seriously triple chocolate, Continental milk chocolate butter biscuits, Continental dark chocolate butter biscuits
{ company: "McVitie's", products: ["Rich Tea"] },
{ company: "Mcvitie's", products: ["Light Rich Tea"] },
{ company: "McVitie's", products: ["Light Digestive Biscuits"] },
{ company: "Sainsbury's", products: ["Shortbread"] }, // (except Basics) see BadProducts
{ company: "Sainsbury's", products: ["Cookies, Taste the Difference", "Cookies"] },
{ company: "Sainsbury's Cookies", products: ["Taste the Difference"] }, // these two entries should cover all taste the diff cookies
{ company: "Sainsbury's", products: ["SO Organic chocolate chip cookies","SO Organic dark chocolate orange","Flapjack Cookies","Jaffa Cakes","Almond Cantuccini"] }, 
//M&S: Shortbread Rounds & Fingers, All Butter Dunkers, All Butter Cookies, All Butter Biscuits, All Butter Battenberg Squares, Viennese Swirls, Viennese Chocolate Dipped Fingers, Roly Poly Swirls, Mini Oat, Belgian Chocolate Chunk Cookies

//Use certified sustainable palm oil - 
{ company: "Nairn's", products: ["Oatcake","Biscuit"] },
{ company: "Bahlsen", products: ["Biscuit"] },
{ company: "Walkers", products: ["Biscuit"] },
{ company: "Hill Biscuits", products: [] },
{ company: "Burton's Biscuits", products: [] },
{ company: "Mrs Crimble's", products: ["Macaroon","Bakewell"] },
{ company: "Mrs. Crimble's", products: ["Macaroon","Bakewell"] },
{ company: "Crawfords", products: ["Biscuit"] },
{ company: "McVitie's", products: ["Biscuit","Digestive","Biscuits","Digestives"] },
{ company: "Oreo", products: ["Biscuit"] },
{ company: "Cadbury", products: ["Biscuit"] },
{ company: "Sainsbury's", products: ["Biscuit","Digestive","Biscuits","Digestives"] },

// pet food - palm oil free
{ company: "Ami", products: [] },
{ company: "Benevo", products: [] },
{ company: "Yarrah", products: [] },
{ company: "Burns", products: [] },
{ company: "Meowing Heads", products: [] },
{ company: "Harringtons", products: [] },
{ company: "Wagg", products: [] },
{ company: "Barking Heads", products: [] },
{ company: "V-Dog", products: [] },

// pet food - Use certified sustainable palm oil
{ company: "Hill’s", products: [] },
{ company: "Felix", products: [] },
{ company: "Go-Cat", products: [] },
{ company: "Purina", products: [] },
{ company: "Gourmet", products: [] },
{ company: "Bakers", products: [] },
{ company: "Bonio", products: [] },
{ company: "Winalot", products: [] },
{ company: "Whiskas", products: [] },
{ company: "Sheba", products: [] },
{ company: "Kitekat", products: [] },
{ company: "James Wellbeloved", products: [] },
{ company: "Royal Canin", products: [] },
{ company: "Pal", products: [] },
{ company: "Pedigree", products: [] },
{ company: "Cesar", products: [] },
{ company: "Chappie", products: [] },
//{ company: "Sainsbury's", products: [] }, // hmm read out category?
 
// nut butters
{ company: "Essential", products: [] },
{ company: "Biona", products: [] },
{ company: "Suma", products: [] },
{ company: "Meridian", products: [] },
{ company: "Whole Earth", products: [] },
{ company: "Sun Pat", products: [] }, // uses peanut oil

// chocolate spread
// Waitrose Seriously Chocolatey
// Use certified sustainable palm oil - 
{ company: "Essential", products: [] },
{ company: "Plamil", products: [] },
{ company: "Biona", products: [] },
{ company: "Traidcraft", products: [] },
{ company: "Vivani", products: [] },
{ company: "Nutella", products: [] },
{ company: "Cadbury", products: ["Chocolate Spread"] },
{ company: "Sainsbury's", products: ["Chocolate Spread", "Caramel Spread", "Chocolate Swirl Spread"] },
//Waitrose, Co-op, M&S

//Boxes of chocolates and gift chocolates
{ company: "Divine", products: [] }, //After Dinner thins, Chocolate Bar Selection, Belgian Chocolate Collection
{ company: "Booja Booja", products: [] },
{ company: "Montezuma", products: [] },
{ company: "Vivani", products: [] },
//Co-op: 24 Assorted Chocolate Truffles, Chocolate Coins, Truly Irresistible Milk Chocolate Truffles gift cube, Truly Irresistible Mint Selection, Loved By Us Belgian Chocolate Pralines,  Loved By Us Irish Cream Liqueurs
//M&S: Sequin Star/Tree with Truffles, Sparkling Wine Truffles, Dulce de Leche Truffles, Marc de Champagne Truffles, Mixologist's Box, Chocolate filled Christmas Crackers, Gastronomic Collection, Sparkling Caramels, Marzipan Collection, Italian Gianduiotto
//Waitrose: Dark Chocolate Mint Creams, Dark Chocolate Mint Thins, Chocolate Mint Collection, Chocolate Ginger, Seriously Chocolatey milk chocolate truffles, Seriously Chocolatey Marc de Champagne dark truffles
{ company: "Sainsbury's", products: ["After Dinner Mint Thins", "Dark Chocolate Orange Thins", "Taste the Difference Belgian Chocolate Cranberry and Pistachio Wreath", "Belgian Chocolate Seashells", "Taste the Difference Belgian Marzipan Assortment", "Crunchy Mint Sticks", "Crunchy Orange Sticks", "Milk Chocolate Brazils", "Milk Chocolate Honeycomb", "Taste the Difference Swiss Hazelnut Praline Truffles", "Taste the Difference Swiss Milk Choc Baubles", "Taste the Difference Swiss Milk Choc Tree Decorations"] },
{ company: "Nestle", products: ["After Eight mints"] },
{ company: "Terry's", products: ["Chocolate Orange Plain"] },
{ company: "Toblerone", products: [] },
{ company: "Guylian", products: ["Seashells", "Dark Chocolate Sea Horses", "Pearles d'Ocean tin"]},
{ company: "Lindt", products: ["hello"] },

{ company: "Cocoa Loco", products: [] },
{ company: "Ferrero Rocher", products: [] },
{ company: "Raffaello", products: [] },
//Nestle brands
{ company: "After Eight", products: [] },
{ company: "Black Magic", products: [] },
{ company: "Dairy Box", products: [] },
{ company: "Quality Street", products: [] },
//Mondelez brands
{ company: "Green & Black's", products: [] },
{ company: "Cadbury", products: ["Milk Tray", "Roses", "Heroes"] },
{ company: "Terry's", products: ["Chocolate Orange", "All Gold"] },
{ company: "Toblerone", products: [] },
{ company: "Celebrations", products: ["240g", "Mini Pack"] }, // to avoid grabbing all things with celebbrations in the title!
{ company: "Lindt", products: ["Lindor"] }
//Waitrose,Co-op,M&S,Sainsbury's

];

var gBadProducts = [
{ company: "Sainsbury's", products: ["Shortbread Fingers, Basics"] }, 

// pet food
{ company: "Applaws", products: [] }, 
{ company: "Encore", products: [] }, 
{ company: "Butcher's", products: [] }, 
{ company: "Hi-Life", products: [] }, 
{ company: "Eukanuba", products: [] }, 
{ company: "Iams", products: [] }, 
//Tesco, Morrisons, ASDA, Aldi, Lidl

//Boxes of chocolates and gift chocolates
{ company: "Thorntons", products: [] }, 
{ company: "Elizabeth Shaw", products: [] }
//ASDA,Morrisons,Tesco,Aldi,Lidl,Iceland 
  
];
