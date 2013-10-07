$(document).ready(function(){

	$('.callout').hover(
		function(){
			var id = $(this).attr('id');
			$('.heading-holder div').hide();
			$('.'+id).show();
		},
		function(){
			$('.default-heading').show();
		}
	);
});