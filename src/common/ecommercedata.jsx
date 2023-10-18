import ALLImages from './imagesdata';

//E-commerce Master Data 

export const MasterData = [
    {
        id: 1,
        productpicture: ALLImages('png25'),
        title: 'Black Heals For Women',
        status: 'Available',
        class: 'success',
        rating: 4,
        views: '21,123',
        price: "$699",
        discount: '$999'
    },
    {
        id: 2,
        productpicture: ALLImages('png26'),
        title: 'Tshirt For Men',
        status: "Out Of Stock",
        class: 'danger',
        rating: 4.3,
        views: '23,123',
        price: "$245",
        discount: '$599'
    }, {
        id: 3,
        productpicture: ALLImages('png27'),
        title: 'Blue Jacket For Men',
        status: 'Available',
        class: 'success',
        rating: 4.5,
        views: '35,586',
        price: "$1999",
        discount: '$1599'
    }, {
        id: 4,
        productpicture: ALLImages('png28'),
        title: 'Dolor Wireless Airpods',
        status: 'Out of Stock',
        class: 'danger',
        rating: 3.5,
        views: '15,253',
        price: "$399",
        discount: '$499'
    }, {
        id: 5,
        productpicture: ALLImages('png29'),
        title: 'Dolor Rose Frangrance Perfume',
        status: 'Available',
        class: 'success',
        rating: 4.2,
        views: '20,989',
        price: "$199",
        discount: '$299'
    }, {
        id: 6,
        productpicture: ALLImages('png30'),
        title: 'Smart Wrist Watch',
        status: 'Available',
        class: 'success',
        rating: 4.5,
        views: '22,989',
        price: "$399",
        discount: '$599'
    },
    {
        id: 7,
        productpicture: ALLImages('png31'),
        title: 'Sun Glasses',
        status: 'Available',
        class: 'success',
        rating: 3,
        views: '10,252',
        price: "$559",
        discount: '$699'
    },
    {
        id: 8,
        productpicture: ALLImages('png32'),
        title: "Mens Cowboys Hat",
        status: 'Available',
        class: 'success',
        rating: 3.5,
        views: '10,989',
        price: "$299",
        discount: '$399'
    },
    {
        id: 9,
        productpicture: ALLImages('png33'),
        title: 'Travel Bag For Womens',
        status: 'Out Of Stuck',
        class: 'danger',
        rating: 4.5,
        views: '50,989',
        price: "$150",
        discount: '$186'
    },
    {
        id: 10,
        productpicture: ALLImages('png34'),
        title: 'Leather Wallet For Grils',
        status: 'Available',
        class: 'success',
        rating: 4.5,
        views: '45,989',
        price: "$100",
        discount: '$150'
    }, {
        id: 11,
        productpicture: ALLImages('png35'),
        title: "Red Dotted Dress For Girls",
        status: 'Out of Stock ',
        class: 'danger',
        rating: 3.5,
        views: '45,989',
        price: "$180",
        discount: '$200'
    }, {
        id: 12,
        productpicture: ALLImages('png36'),
        title: "Winter Jacket For Men's",
        status: 'Available',
        class: 'success',
        rating: 4.5,
        views: '45,989',
        price: "$465",
        discount: '$500'
    },
];

//Product List Data

export const ProductList =[
    {
        id: 1,
        PdctID: '#spk1521',
        pdctsrc: ALLImages('png26'),
        PdctName: 'Shirts For Men',
        category: 'Clothing',
        price: '$999',
        stock: 'Instock',
        status: 'Published',
        date: '01-01-2023'
    },
    {
        id: 2,
        PdctID: '#spk1522',
        pdctsrc: ALLImages('png40'),
        PdctName: 'Smart Watch',
        category: 'Accesories',
        price: '$399',
        stock: 'Instock',
        status: 'Unpublished',
        date: '	02-01-2023'
    },
    {
        id: 3,
        PdctID: '#spk1523',
        pdctsrc: ALLImages('png42'),
        PdctName: 'HandBag For Womens',
        category: 'Accesories',
        price: '$699',
        stock: 'Instock',
        status: 'Published',
        date: '03-01-2023'
    },
    {
        id: 4,
        PdctID: '#spk1524',
        pdctsrc: ALLImages('png35'),
        PdctName: 'Frock For Girls',
        category: 'Clothing',
        price: '$699',
        stock: 'Instock',
        status: 'Published',
        date: '04-01-2023'
    },
    {
        id: 5,
        PdctID: '#spk1525',
        pdctsrc: ALLImages('png28'),
        PdctName: 'Bluetooth Headphones',
        category: 'Electronics',
        price: '$699',
        stock: 'Instock',
        status: 'Published',
        date: '05-01-2023'
    },
    {
        id: 6,
        PdctID: '#spk1526',
        pdctsrc: ALLImages('png43'),
        PdctName: 'Purse For Women',
        category: 'Accesories',
        price: '$699',
        stock: 'Instock',
        status: 'Published',
        date: '06-01-2023'
    },
    {
        id: 7,
        PdctID: '#spk1527',
        pdctsrc: ALLImages('png27'),
        PdctName: 'Blue Jacket For Men',
        category: 'Clothing',
        price: '$699',
        stock: 'Instock',
        status: 'Published',
        date: '07-01-2023'
    },
    {
        id: 8,
        PdctID: '#spk1528',
        pdctsrc: ALLImages('png32'),
        PdctName: 'Mens Cowboys Hat',
        category: 'Accesories',
        price: '$699',
        stock: 'Instock',
        status: 'Published',
        date: '08-01-2023'
    },
    {
        id: 9,
        PdctID: '#spk1529',
        pdctsrc: ALLImages('png34'),
        PdctName: 'Leather Wallet For Grils',
        category: 'Accesories',
        price: '$699',
        stock: 'Instock',
        status: 'Published',
        date: '09-01-2023'
    }
]

// Checkout order

export const OrderSummery =[
    {
        id: 1,
        prdctsrc: ALLImages('png25'),
        title: 'Black Heals For Women',
        Qty: 2,
        offer: '20%',
        OfferPr: '$699',
        originalPr: '$999'
    },
    {
        id: 2,
        prdctsrc: ALLImages('png31'),
        title: 'Sun Glasses',
        Qty: 2,
        offer: '10%',
        OfferPr: '$599',
        originalPr: '$699'
    },
    {
        id: 3,
        prdctsrc: ALLImages('png34'),
        title: 'Leather Wallet For Grils',
        Qty: 1,
        offer: '10%',
        OfferPr: '$100',
        originalPr: '$150'
    }
]

export const MostSearchProduct = [
    {
        id: 1,
        prdctSrc: ALLImages('png25'),
        title: 'Black Heals For Women',
        rating: '4.4',
        views: '13,256',
        newPr: '$699',
        oldPr: '$999'
    },
    {
        id: 2,
        prdctSrc: ALLImages('png26'),
        title: 'Tshirt For Men ',
        rating: '4.0',
        views: '15,256',
        newPr: '$245',
        oldPr: '$599'
    },
    {
        id: 3,
        prdctSrc: ALLImages('png27'),
        title: 'Blue Jacket For Men',
        rating: '3.8',
        views: '10,456',
        newPr: '$1999',
        oldPr: '$2599'
    },
    {
        id: 4,
        prdctSrc: ALLImages('png28'),
        title: 'Dolor Wireless Airpods',
        rating: '4.5',
        views: '20,263',
        newPr: '$399',
        oldPr: '$499'
    },
    {
        id: 5,
        prdctSrc: ALLImages('png29'),
        title: 'Dolor Rose Frangrance Perfume',
        rating: '4.5',
        views: '20,263',
        newPr: '$199',
        oldPr: '$299'
    },
]

//Cart

export const CartData = [
    {
        id: 1,
        src: ALLImages('png25'),
        title: 'Black Heals For Women',
        color: 'Brown',
        size: 'M',
        price: '$999',
        discount: '20%',
        total: '$699'
    },
    {
        id: 2,
        src: ALLImages('png31'),
        title: 'Sun Glasses',
        color: 'White',
        size: 'Adjustable',
        price: '$699',
        discount: '10%',
        total: '$1,198'
    },
    {
        id: 3,
        src: ALLImages('png34'),
        title: 'Leather Wallet For Grils',
        color: 'White',
        size: 'M',
        price: '$150',
        discount: '5%',
        total: '$1,198'
    },
    {
        id: 4,
        src: ALLImages('png29'),
        title: 'Dolor Rose Frangrance Perfume',
        color: 'Jasmine Fragrance',
        size: '500 ML',
        price: '$299',
        discount: '10%',
        total: '$199'
    },
    {
        id: 5,
        src: ALLImages('png28'),
        title: 'Dolor Wireless Airpods',
        color: 'White',
        size: 'Bluetooth',
        price: '$499',
        discount: '0',
        total: '$499'
    },
    {
        id: 6,
        src: ALLImages('png26'),
        title: 'Dolar Tshirt For Men',
        color: 'Blue',
        size: 'M',
        price: '$599',
        discount: '20%',
        total: '$399'
    },
]