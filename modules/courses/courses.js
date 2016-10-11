jQuery.support.cors = true;
//LIST ALL
myApp.onPageInit('courses',function(page){
$(document).ready(function(){
  console.log('course');
    $.ajax({
    "async": true,
    "crossDomain": true,
    // contentType: "application/json;",
    "url": "http://192.168.25.158:8000/disciplina/",
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
        $('.list-course').empty();
        for (var i = 0; i < e.length; i++) {
          $('.list-course').
          append('<li>'+
          '<a href="modules/courses/course.show.html?id='+e[i].id+'" class="item-link">'+
            '<div class="item-content">'+
                '<div class="item-inner">'+
                    '<div class="item-title">'+
                      e[i].nome+
                    '</div>'+
                    '<div class="item-after">'+
                      e[i].professor+
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
myApp.onPageInit('courses-new',function(page){
  console.log('new course');
  $(document).ready(function(){
    create=function(){
      $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "http://192.168.25.158:8000/disciplina/create/",//page.query pega a variavel que eu passo ao clicar no item da lista
        "method": "POST",
        data:{
          nome:$('#disciplina').val(),
          professor:$('#professor').val()
        },
        beforeSend:function(){
          myApp.showPreloader();
        },
        complete:function(){
          myApp.hidePreloader();

        },
        success:function(e){
          $('#disciplina').val(e.nome);
          $('#professor').val(e.professor);
          mainView.router.loadPage('modules/courses/courses.html');
        }
      });
    }
    $('#btn_create_course').click(function(){
      create();
    });

  });
});
//SHOW
myApp.onPageInit('courses-show',function(page){
  $(document).ready(function(){
    remove=function(){//
      $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "http://192.168.25.158:8000/disciplina/delete/"+page.query.id,//page.query pega a variavel que eu passo ao clicar no item da lista
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
          mainView.router.loadPage('modules/courses/courses.html');
        }
      });
    };
    //listar no formulario de editar
    $.ajax({
      "async": true,
      "crossDomain": true,
      "url": "http://192.168.25.158:8000/disciplina/show/"+page.query.id,//page.query pega a variavel que eu passo ao clicar no item da lista
      "method": "POST",
      beforeSend:function(){
        myApp.showPreloader();
      },
      complete:function(){
        myApp.hidePreloader();

      },
      success:function(e){
        $('#disciplina').val(e.nome);
        $('#professor').val(e.professor);
      }
    });

    //função pra atualizar
    update=function(){
      $.ajax({
        "async": true,
        "crossDomain": true,
        //id é o nome da minha variável passada em
        //'<a href="modules/courses/course.show.html?id='+e[i].id+'" class="item-link">'+
        "url": "http://192.168.25.158:8000/disciplina/update/"+page.query.id,//page.query pega a variavel que eu passo ao clicar no item da lista
        "method": "POST",
        data:{
          nome:$('#disciplina').val(),
          professor:$('#professor').val()
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
          mainView.router.loadPage('modules/courses/courses.html');
        }
      });
    }
    $('#btn_update_course').click(function(){
      update();
    });
    $('#btn_delete_course').click(function(){
      remove();
    });
  });
});
