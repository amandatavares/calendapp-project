jQuery.support.cors = true;
//LIST ALL
myApp.onPageInit('tasks',function(page){
$(document).ready(function(){
  console.log('task');
    $.ajax({
    "async": true,
    "crossDomain": true,
    // contentType: "application/json;",
    "url": "http://192.168.0.20:8000/disciplina/",
    "method": "POST",
      beforeSend:function(){
        myApp.showPreloader();
      },
      complete:function(){
        myApp.hidePreloader();

      },
      success:function(e){

        myApp.hidePreloader();
        console.log(e);
        $('.list-task').empty();
        for (var i = 0; i < e.length; i++) {
          $('.list-task').
          append('<li>'+
          '<a href="modules/tasks/task.show.html?id='+e[i].id+'" class="item-link">'+
            '<div class="item-content">'+
                '<div class="item-inner">'+
                    '<div class="item-title">'+
                      e[i].titulo+
                    '</div>'+
                    '<div class="item-after">'+
                      e[i].descricao+
                    '</div>'+
                    '<div class="item-after">'+
                      e[i].data+
                    '</div>'+
                '</div>'+
            '</div>'+
            '</a>'+
          '</li>');

        }
      }
    });
});
});
//NEW
myApp.onPageInit('tasks-new',function(page){
  console.log('new task');
  $(document).ready(function(){
    create=function(){
      $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "http://192.168.0.20:8000/disciplina/create/",//page.query pega a variavel que eu passo ao clicar no item da lista
        "method": "POST",
        data:{
          titulo:$('#titulo').val(),
          descricao:$('#descricao').val(),
          data:$('#data').val()
        },
        beforeSend:function(){
          myApp.showPreloader();
        },
        complete:function(){
          myApp.hidePreloader();

        },
        success:function(e){
          $('#titulo').val(e.titulo);
          $('#descricao').val(e.descricao);
          $('#data').val(e.data);
          mainView.router.loadPage('modules/tasks/tasks.html');
        }
      });
    }
    $('#btn_create_task').click(function(){
      create();
    });

  });
});
//SHOW
myApp.onPageInit('tasks-show',function(page){
  $(document).ready(function(){
    remove=function(){//
      $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "http://192.168.0.20:8000/disciplina/delete/"+page.query.id,//page.query pega a variavel que eu passo ao clicar no item da lista
        "method": "POST",
        beforeSend:function(){
          myApp.showPreloader();
        },
        complete:function(){
          myApp.hidePreloader();
        },
        success:function(e){
          myApp.hidePreloader();
          myApp.alert(e,'Aviso');
          mainView.router.loadPage('modules/tasks/tasks.html');
        }
      });
    };
    //listar no formulario de editar
    $.ajax({
      "async": true,
      "crossDomain": true,
      "url": "http://192.168.0.20:8000/disciplina/show/"+page.query.id,//page.query pega a variavel que eu passo ao clicar no item da lista
      "method": "POST",
      beforeSend:function(){
        myApp.showPreloader();
      },
      complete:function(){
        myApp.hidePreloader();

      },
      success:function(e){
        $('#titulo').val(e.titulo);
        $('#descricao').val(e.descricao);
        $('#data').val(e.data);
      }
    });

    //função pra atualizar
    update=function(){
      $.ajax({
        "async": true,
        "crossDomain": true,
        //id é o nome da minha variável passada em
        //'<a href="modules/tasks/task.show.html?id='+e[i].id+'" class="item-link">'+
        "url": "http://192.168.0.20:8000/disciplina/update/"+page.query.id,//page.query pega a variavel que eu passo ao clicar no item da lista
        "method": "POST",
        data:{
          titulo:$('#titulo').val(),
          descricao:$('#descricao').val(),
          data:$('#data').val()
        },
        beforeSend:function(){
          myApp.showPreloader();
        },
        complete:function(){
          myApp.hidePreloader();
        },
        success:function(e){
          myApp.hidePreloader();
          myApp.alert(e,'Aviso');
          mainView.router.loadPage('modules/tasks/tasks.html');
        }
      });
    }
    $('#btn_update_task').click(function(){
      update();
    });
    $('#btn_delete_task').click(function(){
      remove();
    });
  });
});
