$(document).ready(function() {
	console.log("triggered");
	var folder = "./gallery/";
	//Ajax load adapted from Roko Buljan's answer here: https://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery
	$.ajax({
		url: folder,
		success: function(data) {
			console.log(data);
			$(data).find("a").attr("href", function(i, val) {
				if (val.match(/\.(jpg|png|gif)$/)) {
					$("#gallery").append("<img class='gallery-image' src='" + folder + val + "'>");
				}
			});
		}
	});
});