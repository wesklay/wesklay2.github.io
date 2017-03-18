
var app = angular.module('wesklay', ['ngRoute']);

app.controller('mainController', function($scope) {
	$scope.nome = 'Wesklay Vinicius';
	$scope.cargo = 'Graduando em SI ';
	$scope.foto = 'imagens/wesklay.jpg';
	$scope.email = 'wesklay@gmail.com';
	

	$scope.orcamentos = [];

	$scope.solicitarOrcamento = function (orcamento){
		$scope.orcamentos.push(orcamento);
		console.log($scope.orcamentos);
		
	}
	

});

/*
var pessoa = {
	nome: 'Alis Marckezan', 
	cargo: 'Graduanto em SI e Psicologia',
	foto: 'foto.JPG'
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('imagem-cabecalho').src = pessoa.foto; */