$(window).resize(function() {
	if ($(window).width() < 550) {
		$('#_animation-container').css({
			'transform': 'scale('+ $(window).width()/550 +')'
		});
	} else {
		$('#_animation-container').css({
			'transform': 'scale(1)'
		});
	}
});

var tipArrow;

function initTippyArrow() {
	// Initialize the tooltips for the arrow
	tipArrow = tippy('.tippy_arrow.tippy_active', {
	  animation: 'perspective',
	  duration: 300,
	  arrow: false,
	  distance: 5,
	  intertia: true,
	  theme: 'arrow'
	});
}
function updateTippyArrow() {
	tipArrow.destroyAll();
	initTippyArrow();
}

function toggleAnimateScenarioEcosystem() {
	$('.arrow_position').removeClass('active');
	// to add
	$('#_animation-container').addClass("scenario-ecosystem");
	// to remove
	$('#_animation-container').removeClass("scenario-individual");
	$('#_animation-container').removeClass("scenario-loans");
	$('#_animation-container').removeClass("scenario-business");
	$('#_animation-container').removeClass("scenario-bsp");
	
	$('.btn.animation_state').removeClass("anim_active");
	$('#scene-eco-btn').addClass("anim_active");
	// arrows come up later
	setTimeout(function(){
		$('.arrow_position').addClass('active');
	}, 500);

	$('#arrow_8').attr('title', "Businesses can trade their fiat currency for more Librium tokens on the exchange");
	$('#arrow_1, #arrow_2').attr('title', "In exchange for Librium tokens, Platforms give buisnesses labor from workers");
	$('#arrow_3, #arrow_4').attr('title', "Individuals perform work for the Platforms in exchange for Librium tokens");
	$('#arrow_5, #arrow_6').attr('title', "The Librium Foundation provides tokens to buisnesses in exchange for data");
	$('#arrow_7').attr('title', "Periodically, the Librium Foundation sends tokens back into the Platforms");
	//
	$('.tippy_arrow').addClass('tippy_active');
	updateTippyArrow();
}
function toggleAnimateScenarioIndividual() {
	$('.arrow_position').removeClass('active');
	// to add
	$('#_animation-container').addClass("scenario-individual");
	// to remove
	$('#_animation-container').removeClass("scenario-loans");
	$('#_animation-container').removeClass("scenario-ecosystem");
	$('#_animation-container').removeClass("scenario-business");
	$('#_animation-container').removeClass("scenario-bsp");

	$('.btn.animation_state').removeClass("anim_active");
	$('#scene-ind-btn').addClass("anim_active");
	// arrows come up later
	setTimeout(function(){
		$('.arrow_position').addClass('active');
	}, 500);

	$(' #arrow_7, #arrow_8, #arrow_9').attr('title', "");
	$('#arrow_1, #arrow_2').attr('title', "Workers can trade their Librium tokens for fiat currency on the exchange");
	$('#arrow_3, #arrow_4').attr('title', "Individuals perform work for the Platforms in exchange for Librium tokens");
	$('#arrow_5, #arrow_6').attr('title', "In exchange for Librium tokens, Platforms give buisnesses labor from workers");
	//
	$('.tippy_arrow').removeClass('tippy_active');
	$('#arrow_1, #arrow_2, #arrow_3, #arrow_4, #arrow_5, #arrow_6').addClass('tippy_active');
	updateTippyArrow();
}
function toggleAnimateScenarioBusiness() {
	$('.arrow_position').removeClass('active');
	// to add
	$('#_animation-container').addClass("scenario-business");
	// to remove
	$('#_animation-container').removeClass("scenario-individual");
	$('#_animation-container').removeClass("scenario-loans");
	$('#_animation-container').removeClass("scenario-ecosystem");
	$('#_animation-container').removeClass("scenario-bsp");

	$('.btn.animation_state').removeClass("anim_active");
	$('#scene-busi-btn').addClass("anim_active");
	// arrows come up later
	setTimeout(function(){
		$('.arrow_position').addClass('active');
	}, 500);

	$(' #arrow_7, #arrow_8, #arrow_9').attr('title', "");
	$('#arrow_1, #arrow_2').attr('title', "Businesses can trade their fiat currency for more Librium tokens on the exchange");
	$('#arrow_3, #arrow_4').attr('title', "In exchange for Librium tokens, Platforms give buisnesses labor from workers");
	$('#arrow_5, #arrow_6').attr('title', "The Librium Foundation provides tokens to buisnesses in exchange for data");
	//
	$('.tippy_arrow').removeClass('tippy_active');
	$('#arrow_1, #arrow_2, #arrow_3, #arrow_4, #arrow_5, #arrow_6').addClass('tippy_active');
	updateTippyArrow();
}
function toggleAnimateScenarioBSP() {
	$('.arrow_position').removeClass('active');
	// to add
	$('#_animation-container').addClass("scenario-bsp");
	// to remove
	$('#_animation-container').removeClass("scenario-individual");
	$('#_animation-container').removeClass("scenario-loans");
	$('#_animation-container').removeClass("scenario-ecosystem");
	$('#_animation-container').removeClass("scenario-business");

	$('.btn.animation_state').removeClass("anim_active");
	$('#scene-bsp-btn').addClass("anim_active");
	// arrows come up later
	setTimeout(function(){
		$('.arrow_position').addClass('active');
	}, 500);

	$('#arrow_8, #arrow_9, #arrow_1, #arrow_2').attr('title', "");
	$('#arrow_3, #arrow_4').attr('title', "In exchange for Librium tokens, Platforms give buisnesses labor from workers");
	$('#arrow_5, #arrow_6').attr('title', "Individuals perform work for the Platforms in exchange for Librium tokens");
	$('#arrow_7').attr('title', "Periodically, the Librium Foundation sends tokens back into the Platforms");
	//
	$('.tippy_arrow').removeClass('tippy_active');
	$('#arrow_3, #arrow_4, #arrow_5, #arrow_6, #arrow_7').addClass('tippy_active');
	updateTippyArrow();
}


$(document).ready(function(){
	// Resize graph
	if ($(window).width() < 550) {
		$('#_animation-container').css({
			'transform': 'scale('+ $(window).width()/550 +')'
		});
	}
	// Initialize the tooltips for the objects
	initTippyArrow();
	// Activate animation
	setTimeout(function(){
		$('._object').addClass("active");
	}, 200);
	// arrows come up later
	setTimeout(function(){
		$('.arrow_position').addClass('active');
	}, 500);

	// Starting function
	toggleAnimateScenarioEcosystem();

	// Click events for animation buttons
	$('#scene-eco-btn').click(function(){
		toggleAnimateScenarioEcosystem();
	});
	$('#scene-ind-btn').click(function(){
		toggleAnimateScenarioIndividual();
	});
	$('#scene-busi-btn').click(function(){
		toggleAnimateScenarioBusiness();
	});
	$('#scene-bsp-btn').click(function(){
		toggleAnimateScenarioBSP();
	});
	// Click events for animation objects
	$('#_animation-container ._object._worker').click(function(){
		toggleAnimateScenarioIndividual();
	});
	$('#_animation-container ._object._website').click(function(){
		toggleAnimateScenarioBusiness();
	});
	$('#_animation-container ._object._foundation').click(function(){
		toggleAnimateScenarioEcosystem();
	});
	$('#_animation-container ._object._bsp').click(function(){
		toggleAnimateScenarioBSP();
	});


	// IP Track to potentially use for the analytics service for the ICO
	$.getJSON("https://jsonip.com?callback=?", function (data) {
        console.log("Your ip address: " + data.ip);
    });
})