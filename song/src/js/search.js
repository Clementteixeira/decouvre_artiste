import $ from 'jquery';

function searchArtist(search){
  $.ajax({
          //url: "https://mmi.univ-smb.fr/~valloire/deezer-test/artiste.php?q=damso",
          url: "https://mmi.univ-smb.fr/~teixeirc/song/search.php",
          dataType: 'json',
          type: 'GET',
          data: { "search": search },
        }).done(function(response) {
          this.table = response.data;
          $('.wrap-search active').html( `` );
          this.table.forEach(function(search){
          //$('.wrap-search').append(`<div class="bloc"><h1>${search.nb_fan}</h1></div>`)
          //console.log(search.id);
          $('.wrap-search').append(`

            <div class="artistBloc" data-id="${search.id}">
            <div>
            <h3>${search.type}</h3>
            </div>
            <div>
            <h2>${search.name}</h2>
            </div>
            <div>
            <img src="${search.picture_medium}">
            </div>

            </div>
            </div>`)

        });

        });
      }


      var input;
      var button = document.getElementById('submit');

      $(button).click(function() {

        input = document.getElementById('research').value;
        var search = input;

        console.log(search);
        $('.wrap-search').empty();
        $('.wrap').toggleClass("active");
        $('.wrap-search').toggleClass("active");
        searchArtist(search);
    //remove();
    searchResponse(response);
  });

      function remove(){
        $('.js-name').empty();
        $('.js-fan').empty();
        $('.js-artist-pic').empty();
        $('.song1 .js-title').empty();
        $('.song1 #cover1').empty();
        $('.song2 .js-title').empty();
        $('.song2 #cover2').empty();
        $('.song3 .js-title').empty();
        $('.song3 #cover3').empty();
        $('.song4 .js-title').empty();
        $('.song4 #cover4').empty();
        $('.hideId').empty();
        $('.song1 #track1 source').empty();
      }

      function searchResponse(response){
        response.forEach((item, i) => {
          console.log(response.data[i].name);

        });

      }
