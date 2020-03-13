import $ from 'jquery';

function getArtist(artist_id){
$.ajax({
        //url: "https://mmi.univ-smb.fr/~valloire/deezer-test/artiste.php?q=damso",
        url: "https://mmi.univ-smb.fr/~teixeirc/song/artist.php",
        dataType: 'json',
        type: 'GET',
        data: { "artist_id": artist_id },
    }).done(function(response) {
     console.log(response);
     console.log(response.name);
     $('.js-name').append(response.name);
     $('.js-fan').append(response.nb_fan);

     // La photo
	var img = document.createElement("img");
	img.src = response.picture_big;
	var src = document.getElementById("artist");
	src.appendChild(img);
 });
}


function remove(artist_id){
	$('.js-name').empty();
    $('.js-fan').empty();
    $('.js-artist').empty();
}

	$('.test').click(function() {
	  var artist_id = $(this).attr('data-id');
	  console.log(artist_id);
	  remove(artist_id);
	  artist_id = generate();
	  getArtist(artist_id)
	});

	$(document).ready(function() {
	  var artist_id = $('.container .js-container').attr('data-id');
	  getArtist(artist_id);
	});

	function generate(){
        let id = Math.floor(Math.random()*100);
        
        return id;
    }


        // this.table.forEach( function (artiste)  {
        //     console.log(artiste.nb_fan);
        //     if (artiste.nb_fan >= 1000) {
        //         $('.js-response').append( <div class="artisteResponse"><div class="main"><img src="${artiste.picture_medium}"> <div><p class="name">${artiste.name}</p> <p class="type">${artiste.type}</p></div></div> <p class="nbFan">${artiste.nb_fan} fans</p></div> );
        //     }
        // });
   