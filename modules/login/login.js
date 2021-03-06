jQuery.support.cors = true;
// $(document).ready(function(){ index
myApp.onPageInit('index',function(page){
console.log('login');
  login=function(){
    $.ajax({
      type:"POST",
      url:"http://api-calendapp.herokuapp.com/usuario/logar",
      crossDomain: true,
      dataType: 'json',
      data:{
        matricula: $('#matricula').val(),
        password: $('#password').val()
      },
      beforeSend:function(){
        myApp.showPreloader();
      },
      success:function(e){
        //verifico se o login está ok
        if(e.logado==true){
          //login ok, derrubo a tela de login
          myApp.closeModal();
          //seto no armazenamento local a indicação que está logado
          localStorage.setItem('logado',true);
          //seto no arm. local os dados do aluno caso queira usar.
          localStorage.setItem('aluno',e.aluno[0]);

          //para usar os dados em localStorage fazer como o exemplo abaixo
          /*
            localStorage.logado
            com isso você tem acesso em qualquer lugar da página aos dados.
          */

        }else{
          myApp.alert('Login inválido','Aviso');
        }
        myApp.hidePreloader();
      },
      error:function(){
        myApp.hidePreloader();
      }
    });
  };
  logout=function(){
    localStorage.removeItem('logado');
    localStorage.removeItem('aluno');
    myApp.loginScreen();
  }

  $('#btn_logar').click(function(){
    login();
  });
  $('#btn_sair').click(function(){
    logout();
  });
});
//nao apagar codigo abaixo
console.log('login');
  login=function(){
    $.ajax({
      type:"POST",
      url:"http://api-calendapp.herokuapp.com/usuario/logar",
      crossDomain: true,
      dataType: 'json',
      data:{
        matricula: $('#matricula').val(),
        password: $('#password').val()
      },
      beforeSend:function(){
        myApp.showPreloader();
      },
      success:function(e){
        if(e.logado==true){
          myApp.closeModal();
          localStorage.setItem('logado',true);
          localStorage.setItem('aluno',e.aluno[0]);

        }else{
          myApp.alert('Login inválido','Aviso');
        }
        myApp.hidePreloader();
      },
      error:function(){
        myApp.hidePreloader();
      }
    });
  };
  logout=function(){
    localStorage.removeItem('logado');
    localStorage.removeItem('aluno');
    myApp.loginScreen();
  }

  $('#btn_logar').click(function(){
    login();
  });
  $('#btn_sair').click(function(){
    logout();
  });
