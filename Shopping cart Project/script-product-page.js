const additem = document.getElementsByClassName('item');

/*Adding particular product detail to local storage*/

for(var i=0;i<additem.length;i++)
{
    additem[i].addEventListener("click",function(e)
    {
        
        var z=e.target.parentElement.children[1].textContent
          if(typeof(Storage)!=='undefined')
          {
              localStorage.setItem('image',z)
          }
          else
          {
              console.log('storage full');
          }
    });
}


/*  incresing cart icon number  */


var cart_no = document.getElementById('cart_no')
var total_item = 0;
JSON.parse(localStorage.getItem('items')).map(data => {
    total_item = total_item + data.no
   
});
cart_no.innerHTML = total_item



/*
const price_range=document.getElementsByClassName('Price_range')
for(var i=0;i<price_range.length;i++)
{
    price_range[i].addEventListener("click",function(e)
    {
        var z=e.target.parentElement.children[1].textContent
          if(typeof(Storage)!=='undefined')
          {
              localStorage.setItem('image',z)
          }
          else
          {
              console.log('storage full');
          }
    });
}
*/



/* log out functionality */


function logout_fun() {
    localStorage.clear();
    window.location.href = "login.html"
}