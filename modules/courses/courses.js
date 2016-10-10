jQuery.support.cors = true;
$(document).ready(function(){
// Modifique o resto! Falta coisa!
  course=function(){
    $.ajax({
      type:"POST",
      url:"http://192.168.100.7:8000/disciplina/create",
      crossDomain: true,
      dataType: 'json',
      data:{
        nome: $('#nome').val(),
        professor: $('#professor').val()
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
