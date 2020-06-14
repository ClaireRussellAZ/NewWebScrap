//Scrape articles for the user
$(document).on("click", "#scrape-button", function() {
    $.ajax({
      method: "GET",
      url: "/scrape"
    })
    window.location.replace("/scrape");
  });
  
  //Delete article
  $(document).on("click", ".delete-article", function() {
      var thisId = $(this).attr("data-id");
      $.ajax({
        method: "DELETE",
        url: "/saved/" + thisId
      })
      .then(function(data) {
        console.log(data);
        location.reload();
      });
  });