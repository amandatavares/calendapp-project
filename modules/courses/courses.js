jQuery.support.cors = true;
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
        console.log(e);
        $('.list-course').empty();
        for (var i = 0; i < e.length; i++) {
          $('.list-course').
          append('<li>'+
          '<a href="#" class="item-link">'+
            '<div class="item-content">'+
                '<div class="item-inner">'+
                    '<div class="item-title">'+
                      e[i].nome+
                    '</div>'+
                    '<div class="item-after">'+
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

myApp.onPageInit('courses-new',function(page){
  console.log('new course');
  $(document).ready(function(){
    create=function(){
      $.ajax({
        "async": true,
        "crossDomain": true,
        // contentType: "application/json;",
        "url": "http://192.168.25.158:8000/disciplina/create",
        "method": "POST",
        data:{
          nome: $('#disciplina').val(),
          professor: $('#professor').val()
        },
        beforeSend:function(){
          myApp.showPreloader();
        },
        complete:function(){
          myApp.hidePreloader();

        },
        success:function(e){
          myApp.alert(e,"Aviso");
        }
      });
    }

    $('#btn_create_course').click(function(){
      create();
    });
  });
});
