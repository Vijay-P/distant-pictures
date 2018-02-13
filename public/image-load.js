$(document).ready(function() {
	load_imgs();
});

function load_imgs() {
	$("#gallery").empty();
	var folder = "./gallery/";
	$.ajax({
		url: folder,
		success: function(data) {
			var flist = JSON.parse(data);
			for (i = 0; i < flist.length; i++) {
				$("#gallery").append("<img class='gallery-image' src='" + folder + flist[i] + "'>");
			}
		}
	});
}