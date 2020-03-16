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
      var img = document.createElement("img");
    	img.src = response.data[0].album.cover_medium;
    	var src = document.getElementById("cover1");
    	src.appendChild(img);


      var source = document.createElement("source");
      source.src = response.data[0].preview;
      console.log(source.src);
      var src = document.getElementById("track1");
      src.appendChild(source);

      $('.song2 .js-title').append(response.data[1].title);
      var img = document.createElement("img");
    	img.src = response.data[1].album.cover_medium;
    	var src = document.getElementById("cover2");
    	src.appendChild(img);
      var audio = document.createElement("source");
      audio.src = response.data[1].preview;
      console.log(audio.src);
      var src = document.getElementById("track2");
      src.appendChild(audio);

      $('.song3 .js-title').append(response.data[2].title);
      var img = document.createElement("img");
    	img.src = response.data[2].album.cover_medium;
    	var src = document.getElementById("cover3");
    	src.appendChild(img);
      var audio = document.createElement("source");
      audio.src = response.data[2].preview;
      console.log(audio.src);
      var src = document.getElementById("track3");
      src.appendChild(audio);

      $('.song4 .js-title').append(response.data[3].title);
      var img = document.createElement("img");
    	img.src = response.data[3].album.cover_medium;
    	var src = document.getElementById("cover4");
    	src.appendChild(img);
      var audio = document.createElement("source");
      audio.src = response.data[3].preview;
      console.log(audio.src);
      var src = document.getElementById("track4");
      src.appendChild(audio);
     //console.log(response);
    });
}


function remove(artist_id){
     $('.song1 .js-title').empty();
     $('.song1 #cover1').empty();
     $('.song2 .js-title').empty();
     $('.song2 #cover2').empty();
     $('.song3 .js-title').empty();
     $('.song3 #cover3').empty();
     $('.song4 .js-title').empty();
     $('.song4 #cover4').empty();
     $('.hideId').empty();
     $('.song1 audio').empty();
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

    });

    $('body').on('click','.artistBloc', function() {
      var artist_id = $('.artistBloc').attr('data-id');
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
