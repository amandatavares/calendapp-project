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
        $('.list-course').empty().
        append('<li>Meu nome aqui</li>');
      },
      success:function(e){
        console.log(e);
      }
    });
});
});
