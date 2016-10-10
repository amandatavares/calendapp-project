// $(document).ready(function(){
myApp.onPageInit('categories',function(page){
  console.log('aqui');
  voltar=function(){
    mainView.router.loadPage('index.html');
  }
  $('.btn_voltar').click(function(){
    voltar();
  });
});
// });
// myApp.onPageInit('categories',function(page){
//
//   Vue.Categories = new Vue({
//     el:'#categories',
//     data:{
//       categories:'',
//       categoryVal:'',
//       teste:'alcides'
//     },
//     methods:{
//       listAll:function(){
//         var me = this;
//         // this.$http.get('http://192.168.25.158/sigeposapi/categories/').then(function(res){
//         //   me.categories = res.body;
//         // });
//       },
//       delete:function(val){
//         me = this;
//         $$('.swipeout-categories').on('delete',function(){
//           var msg;
//           me.$http.get('http://192.168.25.158/sigeposapi/categories/delete/'+val).then(function(res){
//             if(res){
//               msg = "Categoria excluída."
//             }else{
//               msg = "Erro ao excluir categoria."
//             }
//             myApp.addNotification({
//               message: msg,
//               hold: 2000
//             });
//           });
//         });
//       }
//     },
//     created:function(){
//       this.listAll();
//
//     }
//   });
//
// });
// myApp.onPageInit('category_new',function(){
//   Vue.CategoryNew = new Vue({
//     el:"#category_new",
//     data:{
//       category:{
//         category:{
//           category_name:'',
//           category_note:''
//         }
//       },
//     },
//     methods:{
//       addCategory:function(category){
//         this.$http.post('http://192.168.25.158/sigeposapi/categories/create',JSON.stringify(category)).then(function(res){
//           if(res){
//             msg = "Categoria adicionada.";
//           }else {
//             msg = "Erro ao adicionar categoria.";
//           }
//           myApp.addNotification({
//             title:"Sigepos",
//             message: msg,
//             hold: 2000,
//             onClose:function(){
//               myApp.router.loadPage('modules/categories/categories.html');
//             }
//           });
//         });
//       }
//     },
//     created:function(){
//
//     }
//   });
// });
// myApp.onPageInit('category_show',function(page){
//
//
//   Vue.CategoryShow = new Vue({
//     el:"#category_show",
//     data:{
//       category:{
//         category:{
//           category_name:"",
//           category_note:"",
//           category_id:""
//         }
//       }
//     },
//     methods:{
//       show:function(){
//         var me = this;
//         this.category_id =page.query.category_id;
//         this.$http.get('http://192.168.25.158/sigeposapi/categories/show/'+me.category_id).then(function(res){
//           me.category = res.body;
//         });
//       }
//     },
//     created:function(){
//       this.show();
//     }
//   });
// });
