
var objpeople = [
    {
        username: "Admin" ,
      password: "Admin"
    }
    ,
    {
        username: "vineetks" ,
        password: "vineetks"
    }
    ,
    {
        username: "random" ,
        password: "1234"
    }
    ,
    {
        username: "person" ,
        password: "12345"
    }

]

function myFunction() {
    var x = document.getElementById("myText").value
    var y = document.getElementById("mypass").value
    localStorage.setItem("username",x);
    for (var i = 0; i < objpeople.length; i++) {
        if (x === objpeople[i].username && y === objpeople[i].password) {
               return window.open('Home.html');
        }

    }
   
}