import $ from 'jquery';

function searchArtist(search){
  $.ajax({
          //url: "https://mmi.univ-smb.fr/~valloire/deezer-test/artiste.php?q=damso",
          url: "https://mmi.univ-smb.fr/~teixeirc/song/search.php",
          dataType: 'json',
          type: 'GET',
          data: { "search": search },
      }).done(function(response) {
       //console.log(response);
});
}



  var input;
  var button = document.getElementById('submit');

  $(button).click(function() {
    searchArtist();

  input = document.getElementById('research').value;
  var search = input;

  console.log(search);
});
