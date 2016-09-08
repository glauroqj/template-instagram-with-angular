// vm == view model name
app.controller('HomeCtrl', HomeCtrl)
.controller('ShowImagesInstagram', ShowImagesInstagram);

function HomeCtrl() {
	var vm = this;
	vm.titulo = "Nome de Sua Loja";
	vm.sub_titulo = "Olá, seja bem-vindo!";
}

function ShowImagesInstagram (InstagramAPI) {
	var vm = this;
	vm.data = {};
	InstagramAPI.fetchPhotos(function(data){
		console.log('data', data)
		vm.pics = data;
		vm.name = data[0].user.full_name
		vm.profile_picture = data[0].user.profile_picture
	});
}