(function() {
    function displaySearchResults(results, store) {
        var searchResults = document.querySelector('#c-SearchResults-list');

        if (results.length) { // Are there any results?
            var appendString = '';

            for (var i = 0; i < results.length; i++) {  // Iterate over the results
                var item = store[results[i].ref];
                appendString += '<li class="c-SearchResults-item">';
                appendString += '<div class="c-SearchResults-heading">';
                appendString += '<a class="c-SearchResults-link" href="' + item.url + '">' + item.title + '</a>';
                appendString += '</div>'
                appendString += '<div class="c-SearchResults-text">';
                appendString += '<a class="c-SearchResults-link" href="' + item.url + '">' + item.content.substring(0, 150) + '...</a>';
                appendString += '</div>';
                appendString += '</li>';
            }

            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<li class="c-SearchResults-item">No results found</li>';
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('query');

    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);

        // Initialize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.use(lunr.multiLanguage("de", "en", "ru"));
            this.ref('id');
            this.field('title', { boost: 10 });
            this.field('url');
            this.field('content');
            for (var key in window.store) {
                this.add({
                    "id": key,
                    "title": window.store[key].title,
                    "url": window.store[key].url,
                    "content": window.store[key].content
                });


            }
        });

        var results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, window.store); // We'll write this in the next section
    }
})();
