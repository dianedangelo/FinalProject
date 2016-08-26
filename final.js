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




    $(".letters").on("click", function(e){
    	e.preventDefault();
        // });
     	$("p").css("font-family", getComputedStyle(this).fontFamily);
	});


  $(window).scroll(function(){

      var nav_left = 290;
      var wallpaper_width = Math.max(0,nav_left-window.scrollX);
      $("nav").css("left",(nav_left-window.scrollX)+"px");
      $("#left-wallpaper").css("width",wallpaper_width+"px");
  });
});

// function initMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
// var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//       '<div id="bodyContent">'+
//       '<p></p>'+
//       '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//       'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//       '(last visited June 22, 2009).</p>'+
//       '</div>'+
//       '</div>';

//   var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });

//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//     title: 'Uluru (Ayers Rock)'
//   });
//   marker.addListener('click', function() {
//     infowindow.open(map, marker);
//   });
// }

function initMap(){
	var mapDiv = document.getElementById("map");
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 40.7467561, lng: -73.9839278},
		zoom: 12
	});
	
	var infowindow_Fulton_Street = new google.maps.InfoWindow({
    	content: '<div class="content">'+
	     '<p width="300" height = "200">Fulton Street Station</p>'+
	     '<img class="fulton"></img></div>'
	});

	var marker_Fulton_Street = new google.maps.Marker({
		position: {lat: 40.7093177, lng: -74.0038614},
		map:map,
		title: "Fulton Street Subway Station"
	});
	marker_Fulton_Street.addListener('click', function(){
   	 	infowindow_Fulton_Street.open(map, this);
	});

			// Marker.addListener(marker, "click", function(){
			// infowindow.open(map, Marker);
			// });

	var infowindow_Wall_Street = new google.maps.InfoWindow({
    	content: '<div class="content">'+
	     '<p width="300" height = "200">Wall Street Station</p>'+
	     '<img class="wall"></img></div>'
	});

	var marker_Wall_Street = new google.maps.Marker({
		position: {lat: 40.7066989, lng:-74.0087323},
		map: map,
		title:"Wall Street Subway Station"
	});

	marker_Wall_Street.addListener('click', function(){
   	 	infowindow_Wall_Street.open(map, this);
	});



	var infowindow_w34th_Street = new google.maps.InfoWindow({
    	content: '<div class="content">'+
	     '<p width="400" height = "300">34th Street Station</p>'+
	     '<img class="w34th"></img></div>'
	});


	var marker_w34th_Street = new google.maps.Marker({
		position: {lat: 40.7498811, lng:-73.9916107},
		map: map,
		title:"34th Street Subway Station"
	});

		marker_w34th_Street.addListener('click', function(){
   	 	infowindow_w34th_Street.open(map, this);
	});



	var infowindow_Lexington_Ave = new google.maps.InfoWindow({
    	content: '<div class="content">'+
	     '<p>Lexington Avenue Station</p>'+
	     '<img class="lex"></img></div>'
	});

	var marker_Lexington_Ave = new google.maps.Marker({
		position: {lat: 40.7575164, lng:-73.9690595},
		map: map,
		title:"Lexington @ 53rd Street Subway Station"
	});

		marker_Lexington_Ave.addListener('click', function(){
   	 	infowindow_Lexington_Ave.open(map, this);
	});



	var infowindow_42nd_Street = new google.maps.InfoWindow({
    	content: '<div class="content">'+
	     '<p>42nd Street Station</p>'+
	     '<img class="w42nd"></img></div>'
	});

	var marker_42nd_Street = new google.maps.Marker({
		position: {lat: 40.7574194, lng:-73.989936},
		map: map,
		title:"42nd Street Subway Station"
	});


		marker_42nd_Street.addListener('click', function(){
   	 	infowindow_42nd_Street.open(map, this);
	});
}

 // var infowindow = new google.maps.InfoWindow({
 //    content: contentString
 //  });

 //  var marker = new google.maps.Marker({
 //    position: uluru,
 //    map: map,
 //    title: 'Uluru (Ayers Rock)'
 //  });
 //  marker.addListener('click', function() {
 //    infowindow.open(map, marker);
 //  });













