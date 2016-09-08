//Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client ID

//To get your user ID go to https://smashballoon.com/instagram-feed/find-instagram-user-id/ and enter your Instagram user name to get your user ID

// get access token http://instagram.pixelunion.net/

app.factory('InstagramAPI', ['$http', function($http, $q) {
	var client_id = 'xxx';
	var user_id = 'xxx';
	var access_token = 'xxx';
	return {
		fetchPhotos : function(callback) {
			var endpoint = 'https://api.instagram.com/v1/users/';
			endpoint += user_id;
			endpoint += '/media/recent/?';
			endpoint += '?count=99';
			endpoint += '&callback=JSON_CALLBACK';
			endpoint += '&access_token=' + access_token;
			$http.jsonp(endpoint)
			.success(function(response) {
				callback(response.data);
				console.log('response', response.meta.code)
			})
			.error(function(xhr, status, err) {
				console.error('erro', status, err);
			})
		}
	}
}]);