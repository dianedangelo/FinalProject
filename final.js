$(document).on("ready",function(){

$(".link").on("click", function(e){
	e.preventDefault();
	var scrollTime = 500;
	if($(this).hasClass("link_History")){
		$.scrollTo(".History", scrollTime,{
			offset: 0
		});
	}else if($(this).hasClass("link_Design")){
		$.scrollTo(".Design",scrollTime);
	}else if($(this).hasClass("link_Usage")){
		$.scrollTo(".Usage", scrollTime);
	}else if($(this).hasClass("link_Subways")){
		$.scrollTo(".Subways", scrollTime);
	}else if($(this).hasClass("link_Movie")){
		$.scrollTo(".Movie", scrollTime);
	}else if($(this).hasClass("link_Reactions")){
		$.scrollTo(".Reactions", scrollTime);
	}else if($(this).hasClass("link_Locations")){
		$.scrollTo(".Locations", scrollTime);
	}
});

// });


    $(".letters").on("click", function(e){
    	e.preventDefault();
        // });
     	$("p").css("font-family", getComputedStyle(this).fontFamily);
	});
});

  $(window).scroll(function(){

    // if( $("body").hasClass("header") ) {
      var nav_left = 290;
      var wallpaper_width = Math.max(0,nav_left-window.scrollX);
      $("nav").css("left",(nav_left-window.scrollX)+"px");
      $("#left-wallpaper").css("width",wallpaper_width+"px");
  // }
});



function initMap(){
	var mapDiv = document.getElementById("map");
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 40.7467561, lng: -73.9839278},
		zoom: 12
	});
	var marker_Fulton_Street = new google.maps.Marker({
		position: {lat: 40.7093177, lng: -74.0038614},
		map:map,
		title: "Fulton Street Subway Station"
	});
	var marker_Wall_Street = new google.maps.Marker({
		position: {lat: 40.7066989, lng:-74.0087323},
		map: map,
		title:"Wall Street Subway Station"
	});
	var marker_34th_Street = new google.maps.Marker({
		position: {lat: 40.7498811, lng:-73.9916107},
		map: map,
		title:"34th Street Subway Station"
	});
	var marker_Lexington_Ave = new google.maps.Marker({
		position: {lat: 40.7575164, lng:-73.9690595},
		map: map,
		title:"Lexington @ 53rd Street Subway Station"
	});
	var marker_42nd_Street = new google.maps.Marker({
		position: {lat: 40.7574194, lng:-73.989936},
		map: map,
		title:"42nd Street Subway Station"
	});
}















