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
      $('.artist').append(`<div class="artist js-artist"><img src="${response.picture_big}"></div>
      <h1 class="name js-name">${response.name}</h1>
      <div class="flex">
        <h2 class="fan js-fan">${response.nb_fan}</h2>
        <h2> fans </h2>
      </div>`)
     //   $('.js-name').append(response.name);
     //   $('.js-fan').append(response.nb_fan);
     //
     // // La photo
     // var img = document.createElement("img");
     // img.src = response.picture_big;
     // var src = document.getElementById("artist");
     // src.appendChild(img);


   });
    }


    function remove(artist_id){
     $('.artist').empty();

   }

   $('.random').click(function() {
    var artist_id = generate();
	  //var artist_id = $(this).attr('data-id');
    //var artist_id = document.getElementById("hideId").innerHTML;

    var div = document.createElement("div");
    div.src = artist_id;
    console.log("ceci est l'id "+div.src+"");
    var src = document.getElementById("hideId");
    src.append(artist_id);


    console.log(artist_id);
    remove(artist_id);
    getArtist(artist_id)
  });

   $(document).ready(function() {
     var artist_id = $('.container .js-container').attr('data-id');
     getArtist(artist_id);
   });

   $('body').on('click','.artistBloc', function() {
     var artist_id = $(this).attr('data-id');
     console.log(artist_id);
     $('.wrap-search').toggleClass("active");
     $('.wrap').toggleClass("active");
     remove(artist_id);
     getArtist(artist_id)
   });

   function generate(response){
    let id = Math.floor(Math.random()*2000);

    return id;
  }
