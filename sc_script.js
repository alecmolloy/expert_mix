SC.initialize({
  client_id: 'c535101de96195a5357df795683005c6'
});



$(document).bind('soundcloud:onPlayerReady', function(event, data) {
    var single_active = false;

});



$(document).ready(function() {
    SC.get('/tracks', { q: prompt("Search Soundcloud:") }, function(tracks) {
        $(tracks).each(function(index, track) {
            $('#results').append($('<li></li>').html("<a href='http://api.soundcloud.com/tracks/" + track.id + "'>" + track.title + ' - ' + track.id + "</a>"));
        });
    });
    
    SC.get("/tracks/2", function(track) {
        SC.oEmbed(track.permalink_url, document.getElementById('a_deck'));
    });
    
    SC.get("/tracks/2", function(track) {
        SC.oEmbed(track.permalink_url, document.getElementById('b_deck'));
    });
});