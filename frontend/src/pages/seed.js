const products = [
{
title:"iPhone 16 Pro",
description:"Apple flagship smartphone with A18 Pro chip",
price:129999,
stock:15,
category:"Mobile",
rating:5,
image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
},
{
title:"Samsung Galaxy S25 Ultra",
description:"Premium Android smartphone",
price:119999,
stock:20,
category:"Mobile",
rating:5,
image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
},
{
title:"Google Pixel 9 Pro",
description:"AI powered Google smartphone",
price:99999,
stock:12,
category:"Mobile",
rating:5,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},
{
title:"OnePlus 13",
description:"Fast flagship smartphone",
price:74999,
stock:18,
category:"Mobile",
rating:4,
image:"https://images.unsplash.com/photo-1580910051074-3eb694886505"
},
{
title:"Xiaomi 15 Ultra",
description:"Leica camera flagship",
price:69999,
stock:22,
category:"Mobile",
rating:4,
image:"https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2"
},
{
title:"MacBook Air M4",
description:"Apple laptop with M4 chip",
price:124999,
stock:10,
category:"Laptop",
rating:5,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},
{
title:"Dell XPS 15",
description:"Premium Windows ultrabook",
price:139999,
stock:9,
category:"Laptop",
rating:5,
image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
},
{
title:"HP Spectre x360",
description:"Convertible laptop",
price:114999,
stock:11,
category:"Laptop",
rating:4,
image:"https://images.unsplash.com/photo-1518770660439-4636190af475"
},
{
title:"Lenovo Legion 5",
description:"Gaming laptop with RTX graphics",
price:109999,
stock:8,
category:"Laptop",
rating:5,
image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
},
{
title:"ASUS ROG Zephyrus G16",
description:"High performance gaming laptop",
price:159999,
stock:6,
category:"Laptop",
rating:5,
image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2"
},
{
title:"Sony WH-1000XM5",
description:"Noise cancelling headphones",
price:28999,
stock:25,
category:"Headphones",
rating:5,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
title:"Boat Rockerz 550",
description:"Wireless headphones",
price:2499,
stock:40,
category:"Headphones",
rating:4,
image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b"
},
{
title:"JBL Tune 760NC",
description:"Bluetooth headphones",
price:6999,
stock:30,
category:"Headphones",
rating:4,
image:"https://images.unsplash.com/photo-1484704849700-f032a568e944"
},
{
title:"Apple AirPods Pro 2",
description:"Premium wireless earbuds",
price:24999,
stock:18,
category:"Earbuds",
rating:5,
image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46"
},
{
title:"Nothing Ear (a)",
description:"Stylish ANC earbuds",
price:7999,
stock:22,
category:"Earbuds",
rating:4,
image:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb"
},
{
title:"Apple Watch Ultra 2",
description:"Premium smartwatch",
price:84999,
stock:12,
category:"Watch",
rating:5,
image:"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d"
},
{
title:"Samsung Galaxy Watch 7",
description:"Android smartwatch",
price:32999,
stock:18,
category:"Watch",
rating:4,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},
{
title:"Noise ColorFit Pro",
description:"Affordable smartwatch",
price:3999,
stock:35,
category:"Watch",
rating:4,
image:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1"
},
{
title:"Canon EOS R50",
description:"Mirrorless camera",
price:72999,
stock:9,
category:"Camera",
rating:5,
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
},
{
title:"Sony Alpha ZV-E10",
description:"Vlogging mirrorless camera",
price:81999,
stock:7,
category:"Camera",
rating:5,
image:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
},{
title:"LG OLED 55 TV",
description:"55-inch 4K OLED Smart TV",
price:109999,
stock:8,
category:"TV",
rating:5,
image:"https://images.unsplash.com/photo-1593784991095-a205069470b6"
},
{
title:"Samsung Crystal 4K TV",
description:"50-inch Smart LED TV",
price:52999,
stock:12,
category:"TV",
rating:4,
image:"https://images.unsplash.com/photo-1461151304267-38535e780c79"
},
{
title:"Mi Smart TV X",
description:"43-inch Android TV",
price:31999,
stock:18,
category:"TV",
rating:4,
image:"https://images.unsplash.com/photo-1601944179066-29786cb9d32a"
},
{
title:"Acer Nitro Monitor",
description:"27-inch 165Hz Gaming Monitor",
price:22999,
stock:15,
category:"Monitor",
rating:5,
image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
},
{
title:"LG UltraGear Monitor",
description:"32-inch QHD Gaming Monitor",
price:32999,
stock:10,
category:"Monitor",
rating:5,
image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3"
},
{
title:"Logitech G502 Mouse",
description:"RGB Gaming Mouse",
price:4999,
stock:35,
category:"Accessories",
rating:5,
image:"https://images.unsplash.com/photo-1527814050087-3793815479db"
},
{
title:"Razer DeathAdder V3",
description:"Esports Gaming Mouse",
price:6999,
stock:20,
category:"Accessories",
rating:5,
image:"https://images.unsplash.com/photo-1563297007-0686b7003af7"
},
{
title:"Keychron K2",
description:"Wireless Mechanical Keyboard",
price:8999,
stock:18,
category:"Accessories",
rating:5,
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
},
{
title:"Redragon K552",
description:"RGB Mechanical Keyboard",
price:3499,
stock:30,
category:"Accessories",
rating:4,
image:"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef"
},
{
title:"JBL Flip 6",
description:"Portable Bluetooth Speaker",
price:9999,
stock:20,
category:"Speaker",
rating:5,
image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
},
{
title:"Boat Stone 1200",
description:"Wireless Outdoor Speaker",
price:3999,
stock:25,
category:"Speaker",
rating:4,
image:"https://images.unsplash.com/photo-1589003077984-894e133dabab"
},
{
title:"Sony SRS-XB23",
description:"Extra Bass Bluetooth Speaker",
price:7999,
stock:16,
category:"Speaker",
rating:5,
image:"https://images.unsplash.com/photo-1545454675-3531b543be5d"
},
{
title:"PlayStation 5",
description:"Sony Gaming Console",
price:54999,
stock:10,
category:"Gaming",
rating:5,
image:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
},
{
title:"Xbox Series X",
description:"Microsoft Gaming Console",
price:52999,
stock:9,
category:"Gaming",
rating:5,
image:"https://images.unsplash.com/photo-1621259182978-fbf93132d53d"
},
{
title:"Nintendo Switch OLED",
description:"Portable Gaming Console",
price:32999,
stock:14,
category:"Gaming",
rating:5,
image:"https://images.unsplash.com/photo-1578303512597-81e6cc155b3e"
},
{
title:"Puma Running Shoes",
description:"Lightweight Sports Shoes",
price:5999,
stock:40,
category:"Shoes",
rating:4,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
title:"Nike Air Max 270",
description:"Premium Running Shoes",
price:9999,
stock:25,
category:"Shoes",
rating:5,
image:"https://images.unsplash.com/photo-1549298916-b41d501d3772"
},
{
title:"Adidas Ultraboost",
description:"Comfort Running Shoes",
price:11999,
stock:22,
category:"Shoes",
rating:5,
image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
},
{
title:"Levi's Slim Fit Jeans",
description:"Comfortable Denim Jeans",
price:2999,
stock:50,
category:"Clothing",
rating:4,
image:"https://images.unsplash.com/photo-1542272604-787c3835535d"
},
{
title:"Nike Sports Hoodie",
description:"Warm Cotton Hoodie",
price:4499,
stock:30,
category:"Clothing",
rating:5,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
},
{
title:"Apple iPad Air M3",
description:"Powerful tablet with Liquid Retina display",
price:64999,
stock:15,
category:"Tablet",
rating:5,
image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
},
{
title:"Samsung Galaxy Tab S10",
description:"Premium Android tablet",
price:58999,
stock:12,
category:"Tablet",
rating:5,
image:"https://images.unsplash.com/photo-1585790050230-5dd28404ccb9"
},
{
title:"TP-Link Archer AX55",
description:"WiFi 6 Dual Band Router",
price:6999,
stock:25,
category:"Networking",
rating:4,
image:"https://images.unsplash.com/photo-1647427060118-4911c9821b82"
},
{
title:"Canon PIXMA G3020",
description:"All-in-One WiFi Printer",
price:14999,
stock:10,
category:"Printer",
rating:4,
image:"https://images.unsplash.com/photo-1612810806695-30f7a8258391"
},
{
title:"Logitech C920 HD Webcam",
description:"1080p Full HD Webcam",
price:7499,
stock:18,
category:"Accessories",
rating:5,
image:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
},
{
title:"Blue Yeti USB Microphone",
description:"Professional USB Microphone",
price:11999,
stock:14,
category:"Accessories",
rating:5,
image:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc"
},
{
title:"Samsung T7 SSD 1TB",
description:"Portable External SSD",
price:9999,
stock:22,
category:"Storage",
rating:5,
image:"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b"
},
{
title:"Mi 20000mAh Power Bank",
description:"Fast Charging Power Bank",
price:2499,
stock:40,
category:"Accessories",
rating:4,
image:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5"
},
{
title:"Amazon Echo Dot (5th Gen)",
description:"Smart Speaker with Alexa",
price:5499,
stock:20,
category:"Smart Home",
rating:5,
image:"https://images.unsplash.com/photo-1512446816042-444d64126727"
},
{
title:"Green Soul Gaming Chair",
description:"Ergonomic Gaming Chair",
price:16999,
stock:8,
category:"Furniture",
rating:5,
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
}
];