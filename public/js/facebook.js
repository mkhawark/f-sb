function checkLoginState(){
	FB.getLoginStatus(function(response){
		statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
	console.log('Facebook login status changed.');
	console.log(response);

	if (response.status === 'connected') {
		console.log('Successfully logged in with Facebook');
		FB.api('/me?fields=name, first_name,picture.width(480)', changeUser);
	}
}

function changeUser(response)
{
	//$('.facebookLogin').hide();
	$('.jumbotron h1').text(response.name);
	$("#photo").attr("src", response.picture.data.url);
}