import $ from 'jquery';

function getSongs(artist_id){
  $.ajax({
    url: "https://mmi.univ-smb.fr/~teixeirc/song/song.php",
    dataType: 'json',
    type: 'GET',
    data:  { "artist_id": artist_id , }
  }).done(function(response) {
      console.log(response);
    $('.songs').append(`
      <div class="song">
        <div id="cover">
          <img src="${response.data[0].album.cover_medium}"
        </div>
        <p class="title js-title">${response.data[0].title}</p>
        <div class="theTrack">
          <audio controls id="track1">
            <source src="${response.data[0].preview}"</source>
           </audio>
        </div>
      </div>

     <div class="song">
          <div id="cover">
            <img src="${response.data[1].album.cover_medium}"
          </div>
          <p class="title js-title">${response.data[1].title}</p>
          <div class="theTrack">
            <audio controls id="track1">
            <source src="${response.data[1].preview}"</source>
            </audio>
       </div>
    </div>

    <div class="song">
      <div id="cover">
      <img src="${response.data[2].album.cover_medium}"</div>
      <p class="title js-title">${response.data[2].title}</p>
      <div class="theTrack">
      <audio controls id="track1">
         <source src="${response.data[2].preview}"</source>
      </audio>
      </div>
   </div>

   <div class="song">
     <div id="cover">
     <img src="${response.data[3].album.cover_medium}"</div>
     <p class="title js-title">${response.data[3].title}</p>
     <div class="theTrack">
     <audio controls id="track1">
        <source src="${response.data[3].preview}"</source>
     </audio>
     </div>
  </div>`);


   });
}


function remove(artist_id){
 $('.songs').empty();
  $('.hideId').empty();

}

$('.random').click(function() {
    //artist_id = generate();

    // var div = document.createElement("div");
    // div.src = artist_id;
    // console.log("ceci est l'id "+div.src+"");
    // var src = document.getElementById("hideId");
    // src.append(artist_id);

    // var artist_id = $(this).attr('data-id');
    var artist_id = document.getElementById("hideId").innerHTML;
    console.log(artist_id);
    remove(artist_id);



      //var test = document.getElementById("hideId").innerHTML.value;
      //console.log("song "+test+"");



        //var test = document.getElementById("hideId").innerHTML;
        //console.log("song "+test+"");

        getSongs(artist_id);

      });

$('body').on('click','.artistBloc', function() {
  var artist_id = $(this).attr('data-id');
  console.log(artist_id);
  remove(artist_id);
  getSongs(artist_id)
});

$(document).ready(function() {
  var artist_id = $('.container .js-container').attr('data-id');
  getSongs(artist_id);
});


function generate(){
  let id = Math.floor(Math.random()*100);

  return id;
}
