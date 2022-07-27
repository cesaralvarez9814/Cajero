var cuentas = [ 
    {id:1, nombre: 'Cesar Hugo Alvarez Felix', saldo: 200 } ,
    { id:2,nombre: 'Octavio Osuna Espinoza', saldo: 290 } ,
    {id:3, nombre: 'Oscar Gonzalez Perez', saldo: 67 } 
  ];

var btnConsultar= document.getElementById('btnConsultar');
    var usuario;
    const parsedUrl = new URL(window.location.href);
    var id =parsedUrl.searchParams.get("id");
    cuentas.forEach(element => {
      if(element.id == id){
        usuario= element;
      }
    })
    var userH =document.getElementById('user');
    userH.innerHTML = usuario.nombre;
  
  btnConsultar.addEventListener('click',function(){
    consultarSaldo();
  });

  function consultarSaldo(){
    document.getElementById('botones').style.display = 'none'
    document.getElementById('Consultar').style.display = 'block'
    document.getElementById('cantidad').innerHTML = '$'+ usuario.saldo
  }
  

