var usuario=document.getElementById("user");
var contrasena= document.getElementById("pass");
var user = [
    {user: 'cesar_alvarez14' ,password: '123'},
    {user: 'felipe_55' ,password: '123'},
    {user: 'oscar_gonz27' ,password: '123'},
];


    //Convert Array to JSON
    var jsonUsers = JSON.stringify(user)
   localStorage.setItem('all-users',jsonUsers  );

    //Login 
    //get all user credentials
    var allUsers = localStorage.getItem('all-users');
   //Convert JSON to Array
   var arrUsers =  JSON.parse(allUsers);

   document.querySelector("#myForm").addEventListener("submit", function(e){
        e.preventDefault();
        iniciarSesion();
    });

 function iniciarSesion() {
    const url = new URL(window.location.href);
    const bUsuario = false;
    for(var i=0; i<arrUsers.length; i++){
        if(arrUsers[i].user == usuario.value && arrUsers[i].password == contrasena.value){
            url.pathname='../Cajero/cajero.html'
            window.location.href=url + '?id=' + i;
            bUsuario=true;
        }
    }
    if(!bUsuario){
        alert('Usuario o contraseña incorrecta');
    }
    
   
    
}