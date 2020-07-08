var cartitem = document.getElementById('tasklist')
var cart_no = document.getElementById('cart_no')
var cart_total = document.getElementById('cart_amount')
var total_item = 0;
var total_price = 0;

/*Getting total items in cart and total price*/


JSON.parse(localStorage.getItem('items')).map(data => {
    total_item = total_item + data.no
    total_price = total_price + (data.price * data.no)
});
cart_no.innerHTML = total_item
cart_total.innerHTML = total_price


/* creating table to display cart objects */


var table_data = '';
table_data += '<tr><th>Item_pic</th><th>Name</th><th>Quantity</th><th>Price</th><th>Total Price</th><th>Delete</th></tr>'
cartitem.innerHTML = table_data
if (JSON.parse(localStorage.getItem('items')) === null) {
    table_data += '<tr><td colspan="4">No items found</td></tr>'
}
else {
    JSON.parse(localStorage.getItem('items')).map(data => {
        table_data += '<tr>'
        table_data += '<td>' + '<img src=' + data.img_link + '>' + '</td>',
        table_data += '<td>' + data.name + '</td>'
        table_data += '<td>'+'<a href="#" class="btn btn-danger change" onclick=minus(this);> - </a>' + data.no +  '<a href="#" class="btn btn-danger change" onclick=plus(this);>+</a>' + '</td>'
        table_data += '<td>'+"Rs." +  data.price + '</td>'
        table_data += '<td>'+"Rs." +  data.price*data.no + '</td>'
        table_data += '<td>' + '<a href="#" class="btn btn-danger" onclick=Delete(this);>Remove</a>'+'</td>'
        table_data += '</tr>'
    });
    cartitem.innerHTML = table_data
}


/*  Quantity variation functionality    */


function plus(e) {
    let items = [];
    JSON.parse(localStorage.getItem('items')).map(data => {
        if (data.name !== e.parentElement.parentElement.children[1].textContent) {
            items.push(data);
        }
        else{
                data.no=data.no+1;
                items.push(data)
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    window.location.reload();
}
function minus(e) {
    let items = [];
    JSON.parse(localStorage.getItem('items')).map(data => {
        if (data.name !== e.parentElement.parentElement.children[1].textContent) {
            items.push(data);
        }
        else{
                 if(data.no===1)
                 {
                     Delete(e)
                 }
                 else
                 {
                data.no=data.no-1;
                items.push(data)
                 }
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    window.location.reload();
}


/* Delete functionality of Cart*/

function Delete(e) {
    let items = [];
    JSON.parse(localStorage.getItem('items')).map(data => {
        if (data.name !== e.parentElement.parentElement.children[1].textContent) {
            items.push(data);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    window.location.reload();
}

/* log out functionality */


function logout_fun() {
    localStorage.clear();
    window.location.href = "login.html"
}