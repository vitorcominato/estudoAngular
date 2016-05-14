angular.module('alurapic').controller('FotosController', FotosController);


 function FotosController($http){
	var vm = this;

	vm.fotos = [];
	vm.filtro = '';

	$http.get('v1/fotos')
	.success(function(fotos){
		vm.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});
}