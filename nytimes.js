$(document).ready(function(){

function returnArticles() {

	var searchTerm = $("#searchFor").val().trim();
	var beginDate = $("#beginDate").val();
	var endDate = $("#endDate").val();

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
  	'api-key': "f9f6a32735f24a1081b2bcdd96bb0176",
  	'q': searchTerm,
  	'begin_date': beginDate,
  	'end_date': endDate
		});
console.log(url);
	$.ajax({
  	 url: url,
     dataType: 'jsonp',
 		 method: 'GET',
	}).done(function(result) {
  		console.log(result);

  		for (var i = 0; i < 5; i++) {

  			$("#showArticles").empty();
          	var articleSnip = $("<div class='articles'>");
          	articleSnip.append("<div class='headline'>" + result[i].response.docs.headline + "</div>");
          	articleSnip.append("<div class='snip'>" + result[i].response.docs.snippet + "</div>");
          	articleSnip.append("<div class='date'>" + result[i].response.docs.pub_date + "</div>");
          	$("#showArticles").append(articleSnip);
          	}


	}).fail(function(err) {
  		throw err;
	});

}

$(document).on("click", "#searchButton", returnArticles);

});