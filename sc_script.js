SC.initialize({
  client_id: 'c535101de96195a5357df795683005c6'
});

$(document).ready(function() {
  SC.get('/tracks', { q: 'Purity Ring' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});