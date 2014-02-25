	$( document ).ready(function() {

				$.fn.wizard.logging = true;


				var wizard = $('#some-wizard').wizard({
					keyboard : false,
					contentHeight : 400,
					contentWidth : 700,
					backdrop: 'static'
				});



				$('#open-wizard').click(function(e) {
					e.preventDefault();
					wizard.show();
				});
      
	});
