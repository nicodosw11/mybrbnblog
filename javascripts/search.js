var lunrIndex = null;
var lunrMap  = null;

jQuery(document).ready(function($) {

  // Download search index and then set up search.
  // jQuery provides nicer syntax for this async download.
  $.ajax({
    url: '/search-35cd1b3f.json',
    cache: true,
    method: 'GET',
    success: function(data) {
      // Callback for success: log it and set up our search.
      console.log('Downloaded Search JSON.');
      setupSearch(data);
    }
  });
});


// Setup lunrjs index and callback for search-as-you-type.
// Using jQuery isn't required here, but it makes things easier. We use it to
// bind to events, search the DOM based on classes and ids, as well as to
// manipulate the DOM by unwrapping and removing elements.
function setupSearch(lunrData) {
  console.log('Creating search index.');
  // Set up the index, store it and the map in two vars defined up top.
  // The index is used to make searches, the map is used to retrieve information
  // about a result. This information is what's specified as "stored" in
  // config.rb's `activate :search` block.
  lunrIndex = lunr.Index.load(lunrData.index);
  lunrMap = lunrData.docs;

  // We move the element with id `search` up in its DOM hierarchy and remove the
  // search result group, a bootstrap element that shows the user the index is
  // still being downloaded.
  // $('#search').unwrap();
  // $('#search-result-group').remove();

  // We now bind the keyup event to an anonymous function, invoked whenever the
  // user presses a key. We also trigger `keyup()` immediately, in case the user
  // has typed a query before the index download has completed (see .keyup() at
  // the end of this function call).
  $("#search").bind("keyup", function() {
    // Every time, we clear the div with class `search-results`.
    $(".search-results").empty();

    var query = $(this).val();

    // We only want to search for queries that are more than two characters long.
    if (query.length <= 2) { return; }

    // Peform the search.
    var results = lunrIndex.search(query)

    // Show 'no results' if the results are empty.
    if (results.length == 0) {
      $(".search-results").append('<p id="noresult">No results.</p>');
    } else {
      // For each result, execute this anyonymous function.
      $.each(results, function(index, result) {
        // Retrieve the page that is represented by the result.
        page = lunrMap[result.ref];

        // Extract the date using a regular expression and format according to
        // the following date format options.
        var dateOptions = { year: "numeric", month: "long", day: "numeric" };
        date = new Date(page.date.match(/\d{4}-\d{2}-\d{2}/)).toLocaleDateString("en-US", dateOptions);

        // Find the `search-results` div and append the following DOM elements.
        // Ideally this would use Handlebars or some other client-side template
        // library instead of raw string concatenation.
        $(".search-results").append(
          '<div class="result">' +
            '<a href="' + page.url + '">' +
              page.title +
            '</a> &nbsp; ' +
            '<div class="post-meta">' + date + '</div>' +
          '</div>'
        );
      });
    }
  }).keyup();
}
;
