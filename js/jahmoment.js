

function playradio(){

    $(".radio-bar").show();
    $(".header").css("margin-top", "45px");
    $(".radio-play").hide();
    $(".radio-pause").show();
    $(".stream")[0].play()
    //document.querySelector(".stream").play()
    return false;

}


function pauseradio(){

    $(".radio-bar").show();
    $(".header").css("margin-top", "45px");
    $(".radio-play").show();
    $(".radio-pause").hide();
    $(".stream")[0].pause()
    //document.querySelector(".stream").play()
    return false;

}


function showlist(){

	$("#cc_recenttracks_jahmomen").toggle();
	$(".cctrack").show();

	return false;
}


function showHome(){

	$(".home-page").show();
	$(".cultura-page").hide();
	$(".artistas-page").hide();
	$(".jahshop-page").hide();
	return false;
}


function showCultura(){

	$(".cultura-page").show();
	$(".home-page").hide();
	$(".artistas-page").hide();
	$(".jahshop-page").hide();
	return false;
}


function showArtistas(){

	$(".artistas-page").show();
	$(".cultura-page").hide();
	$(".home-page").hide();
	$(".jahshop-page").hide();
	return false;
}


function showJahshop(){

	$(".jahshop-page").show();
	$(".cultura-page").hide();
	$(".home-page").hide();
	$(".artistas-page").hide();
	return false;
}