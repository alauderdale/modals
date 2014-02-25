	$( document ).ready(function() {

		$.fn.wizard.logging = true;


		var wizard = $('#some-wizard').wizard({
			keyboard : false,
			backdrop: 'static'
		});


		$('#open-wizard').click(function(e) {
			e.preventDefault();
			wizard.show();
		});

		wizard.el.find(".restart").click(function() {
			wizard.reset();
		});
		wizard.el.find(".done").click(function() {
					wizard.hide();
					setTimeout(function() {
						wizard.reset();	
					}, 250);
					
				});
      
	});
