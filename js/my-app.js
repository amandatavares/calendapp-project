// Initialize your app
var $$ = Dom7;
var myApp = new Framework7({
	modalTitle: 'calendario',
	material: true,
	cache:false
});
if(localStorage.logado !=undefined && localStorage.logado=="true"){
	myApp.closeModal();
}else{
	myApp.loginScreen();
}
// myApp.showPreloader();
var mainView  = myApp.addView('.view-main', {});
var rightView = myApp.addView('.view-right', {});

// Export selectors engine
