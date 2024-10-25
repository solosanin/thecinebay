function searchIMDb() {
  const query = document.getElementById('searchQuery').value.trim();
  if (query) {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}+site:imdb.com`;
    window.open(googleSearchUrl, '_blank');
  } else {
    alert('Please enter a search query.');
  }
}

function embedMovie() {
  const movieId = document.getElementById('movieIdInput').value.trim();
  const embedPlayer = document.getElementById('embedPlayer');

  if (!movieId) {
    alert('Please enter a valid IMDb ID.');
    return;
  }

  const embedUrl = `https://vidsrc.cc/v2/embed/movie/${movieId}`;
  embedPlayer.src = embedUrl;
}
