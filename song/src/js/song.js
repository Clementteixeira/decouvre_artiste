import $ from 'jquery';

function getSongs(artist_id){
$.ajax({
        url: "https://mmi.univ-smb.fr/~teixeirc/song/song.php",
        dataType: 'json',
        type: 'GET',
        data:  { "artist_id": artist_id , }
    }).done(function(response) {
     console.log(response.data[0].title);
      $('.song1 .js-title').append(response.data[0].title);
      $('.song2 .js-title').append(response.data[1].title);
      $('.song3 .js-title').append(response.data[2].title);
      $('.song4 .js-title').append(response.data[3].title);
     //console.log(response);
    });
}


function remove(artist_id){
     $('.song1 .js-title').empty();
     $('.song2 .js-title').empty();
     $('.song3 .js-title').empty();
     $('.song4 .js-title').empty();
     $('.hideId').empty();
}

$('.test').click(function() {
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
      if(response.data[0].title == undefined){
        artist_id = 1191615;
      }
    });

    $(document).ready(function() {
      var artist_id = $('.container .js-container').attr('data-id');
      getSongs(artist_id);
    });


    function generate(){
        let id = Math.floor(Math.random()*100);

        return id;
    }
