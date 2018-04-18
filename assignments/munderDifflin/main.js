'use strict';

//hamburger menu animation jS
$(document).ready(function(){
    $('.animated-icon').click(function(){
        $(this).toggleClass('open');
        $('#collapsableNavBar').toggleClass('collapse');
    });
}); 



// video background
let video = document.querySelector('#officeVideo');
let videoButton = document.querySelector('#videoButton');



// subscribe me button
$(document).ready(function() {

	$('#contactForm').submit(function(e) {
		$('#messageButton').removeClass('btn-outline-secondary')
			.addClass('btn-success')
			.html('<i class="far fa-check-square"></i>');
		var userName = $('#userName').val();
		alert(`Thank you for your message, ${userName}. Someone will get back to you within 1-2 business days. `);
		$('#contactForm').hide();
		$('#messageConfirmation').show();
		return false;
	});

	$('#emailForm').submit(function(e) {
		$('#subscribeButton').removeClass('btn-outline-secondary')
			.addClass('btn-success')
			.html('<i class="far fa-check-square"></i>');
		var userEmail = $('#emailInput').val();
		alert(`${userEmail} has been subscribed, thank you!`);
		return false;
	});
});