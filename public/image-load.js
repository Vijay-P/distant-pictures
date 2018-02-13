$(document).ready(function() {
	load_imgs();
});

function load_imgs() {
	console.log("triggered");
	var folder = "./gallery/";
	//Ajax load adapted from Roko Buljan's answer here: https://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery
	$.ajax({
		url: folder,
		success: function(data) {
			var flist = JSON.parse(data);
			for (i=0; i<flist.length; i++){
				$("#gallery").append("<img class='gallery-image' src='" + folder + flist[i] + "'>");
			}
		}
	});
}
