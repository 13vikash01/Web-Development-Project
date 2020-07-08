
var ar = [
        {
            "id": 1,
            "img": "images/macbook.jpg",
            "name": "Macbook Pro",
            "price": 50000,

        },
        {
            "id": 2,
            "img": "images/lg-tv.jpg",
            "name": "Lg Tv",
            "price": 59999,

        },
        {
            "id": 3,
            "img": "images/Redmi.jpg",
            "name": "Redmi note 8",
            "price": 14999,

        },
        {
            "id": 4,
            "img": "images/smartwatch.jpg",
            "name": "FastTrack Smartwatch",
            "price": 999,

        },
        {
            "id": 5,
            "img": "images/earpods.jpg",
            "name": "Boat Earpods",
            "price": 1299,

        },
        {
            "id": 6,
            "img": "images/pendrive.jpg",
            "name": "Sony 32Gb",
            "price": 1999,

        },
        {
            "id": 7,
            "img": "images/tshirt.jpg",
            "name": "Flying machine tshirt",
            "price": 399,

        },
        {
            "id": 8,
            "img": "images/jeans.jpg",
            "name": "Flying machine jeans",
            "price": 999,

        },
        {
            "id": 9,
            "img": "images/sweatshirt.jpg",
            "name": "Flying machine Sweatshirt",
            "price": 1499,

        },
        {
            "id": 10,
            "img": "images/sherwani.jpg",
            "name": "Flying machine Sherwani",
            "price": 1999,

        },
        {
            "id": 11,
            "img": "images/top.jpg",
            "name": "Flying machine top",
            "price": 499,

        },
        {
            "id": 12,
            "img": "images/shoe.jpg",
            "name": "puma shoes",
            "price": 1499,

        },
        {
            "id": 13,
            "img": "images/bag.jpg",
            "name": "Sport Bag",
            "price": 5000,

    },
    {
            "id": 14,
            "img": "images/dumbell.jpg",
            "name": "Iron Dumbell",
            "price": 3000,

    },
    {
             "id": 15,
            "img": "images/helmet.jpg",
            "name": "Sport Helmet",
            "price": 5000,

    },
    {
            "id": 16,
            "img": "images/soccer-ball.jpg",
            "name": "FootBall",
            "price": 2000,

    },
    {
             "id": 17,
            "img": "images/pads.jpg",
            "name": "Cricket Pads",
            "price": 500,

    },
    {
             "id": 18,
            "img": "images/shoes.jpg",
            "name": "Sports Shoes",
            "price": 5000,

    },
    {
            "id": 19,
            "img": "images/charles.jpg",
            "name": "good book",
            "price": 500,

    },
    {
             "id": 20,
            "img": "images/think.jpg",
            "name": "pshyco",
            "price": 500,

    },
    {
            "id": 21,
            "img": "images/chetan.jpg",
            "name": "Chetan Bhagat",
            "price": 200,

    },
    {
             "id": 22,
            "img": "images/cartoon.jpg",
            "name": "Kids Book",
            "price": 500,

    },
    {
             "id": 23,
            "img": "images/kalam.jpg",
            "name": "APJ abdul kalam",
            "price": 300,

    },
    {
             "id": 24,
            "img": "images/hobbit.jpg",
            "name": "The Hobbit",
            "price": 500,

    }
]

    var discription = document.getElementById('discription')
    
    var temp = localStorage.getItem('image')
    var temp1=temp
    var imp = ''
    imp += '<img  src=' + ar[temp - 1].img + '>'
    img.innerHTML = imp
    var p=''
    var q=''
    
    p+='<p>'+ar[temp-1].name+'</p>'
    
    p+='<p>'+"Rs. "+ar[temp-1].price+'</p>'
    price.innerHTML = p
    discription.innerHTML = p
    
    localStorage.removeItem("image")
   


    function myfun()
    {
        alert('Added to cart')   
        var items = []
        if(typeof(Storage)!=='undefined')
        {
            let item =
            {
                id:temp1,
                name:ar[temp1-1].name,
                price:ar[temp1-1].price,
                img_link:ar[temp1-1].img, 
                no:1
            }
           if(JSON.parse(localStorage.getItem('items')) === null)
           {
               items.push(item);
               localStorage.setItem("items",JSON.stringify(items));
               window.location.reload();
           }
           else
           {
               const localitems = JSON.parse(localStorage.getItem("items"));
               localitems.map(data=>{
                   if(item.id == data.id)
                   {
                       item.no = data.no + 1;
                   }
                   else
                   {
                       items.push(data);
                   }
                 });
                items.push(item); 
                localStorage.setItem("items",JSON.stringify(items));
                window.location.reload();
           }

        }
    }


    /* log out functionality */


function logout_fun() {
    localStorage.clear();
    window.location.href = "login.html"
}
 