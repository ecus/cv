$(document).ready(function() {
	$('a.bloque_video_youtube').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var src = $(this).attr('data-video');
		$('#videoModal iframe').attr('src', src);
		$('#videoModal').modal('show');
		$('.modal-backdrop').addClass("modal_fondo_home_video");
	});
	$('#videoModal').on('hidden.bs.modal', function(e) {
		$('#videoModal iframe').attr('src', "");
	});
});