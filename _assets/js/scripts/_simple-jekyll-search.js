var SimpleJekyllSearch = SimpleJekyllSearch || [];

SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
});