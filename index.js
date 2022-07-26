var usuario=document.getElementById("user");
var contrasena= document.getElementById("password");
var user = [
    {user: 'cesar_alvarez14' ,password: '123'},
    {user: 'felipe_55' ,password: '123'},
    {user: 'oscar_gonz27' ,password: '123'},
];

var cuentas = [ 
    { nombre: 'Cesar Hugo Alvarez Felix', saldo: 200 } ,
    { nombre: 'Octavio Osuna Espinoza', saldo: 290 } ,
    { nombre: 'Oscar Gonzalez Perez', saldo: 67 } 
  ];
    //Convert Array to JSON
    var jsonUsers = JSON.stringify(user)
   localStorage.setItem('all-users',jsonUsers  );

    //Login 
    //get all user credentials
    var allUsers = localStorage.getItem('all-users');
   //Convert JSON to Array
   var arrUsers =  JSON.parse(allUsers);


 function iniciarSesion() {
    arrUsers.forEach(element => {
        if(element.user == usuario.value && element.password == contrasena.value ){
            window.open('cajero.html');
        }
    });
    
}