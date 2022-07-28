var cuentas = [ 
    { nombre: 'Cesar Hugo Alvarez Felix', saldo: 200 } ,
    { nombre: 'Octavio Osuna Espinoza', saldo: 290 } ,
    { nombre: 'Oscar Gonzalez Perez', saldo: 67 } 
  ];

  const parsedUrl = new URL(window.location.href);
  var id =parsedUrl.searchParams.get("id"); 
  var userH =document.getElementById('user');
  userH.innerHTML = cuentas[id].nombre;
  var btnConsultar= document.getElementById('btnConsultar');
  btnConsultar.addEventListener('click',function(){
    consultarSaldo();
  });

  function consultarSaldo(){
    document.getElementById('botones').style.display = 'none'
    document.getElementById('consultar').style.display = 'block'
    document.getElementById('cantidad').innerHTML = '$'+ cuentas[id].saldo
  }

  var btnAceptar = document.getElementById('btnAceptar');
  btnAceptar.addEventListener('click',function(){
    document.getElementById('botones').style.display = 'block'
    document.getElementById('consultar').style.display='none';
  });

 

  var btnIngresar = document.getElementById('btnIngresar');
  btnIngresar.addEventListener('click',function(){
    document.getElementById('botones').style.display = 'none'
    document.getElementById('ingresar').style.display='block';
  });


  var btnIngresarSaldo = document.getElementById('btnIngresarSaldo');



  btnIngresarSaldo.addEventListener('click',function(){
    ingresarSaldo();
  });


  function ingresarSaldo(){
    let monto= document.getElementById('ingresoCantidad').value
    if(monto != ''){
      var suma= parseInt(cuentas[id].saldo) + parseInt(monto);
      if(suma <= 990){
        cuentas[id].saldo = suma;
        alert('El saldo nuevo es igual a: ' + cuentas[id].saldo);
        document.getElementById('botones').style.display = 'block'
        document.getElementById('ingresar').style.display='none';
      }else{
        alert('El monto especificado supera el limite maximo de cuenta, el cual es 990');
      }
    }else{
      alert('Ingresar una cifra correcta');
    }
    document.getElementById('ingresoCantidad').value=''
  }

  var btnCancelar = document.getElementById('btnCancelar');
  btnCancelar.addEventListener('click',function(){
    document.getElementById('botones').style.display = 'block'
    document.getElementById('ingresar').style.display='none';
    document.getElementById('ingresoCantidad').value= '';
    return true;
  });


  var btnRetirar = document.getElementById('btnRetirar');
  btnRetirar.addEventListener('click',function(){
    document.getElementById('botones').style.display = 'none'
    document.getElementById('retirar').style.display='block';
  });

  var btnCancelarRetiro = document.getElementById('btnCancelarRetiro');
  btnCancelarRetiro.addEventListener('click',function(){
    document.getElementById('botones').style.display = 'block'
    document.getElementById('retirar').style.display='none';
  });

  var btnRetirarSaldo = document.getElementById('btnRetirarSaldo');
  btnRetirarSaldo.addEventListener('click',function(){
    retirarSaldo()
  });

  function retirarSaldo(){
    let monto= document.getElementById('retiroCantidad').value
    if(monto != ''){
      var resta= parseInt(cuentas[id].saldo) - parseInt(monto);
      if(resta >= 10){
        cuentas[id].saldo = resta;
        alert('El saldo nuevo es igual a: ' + cuentas[id].saldo);
        document.getElementById('botones').style.display = 'block'
        document.getElementById('retirar').style.display='none';
      }else{
        alert('El monto especificado supera el limite minimo de la cuenta, el cual es 10');
      }
    }else{
      alert('Ingresar una cifra correcta');
    }
    document.getElementById('retiroCantidad').value=''
  }


