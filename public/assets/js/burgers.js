
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var wasDevoured = $(this).data("wasdevoured");
  
      var wasDevouredState = {
        devoured: wasDevoured
      };
      console.log(wasDevoured);
      console.log(id);

  $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: wasDevouredState
      }).then(
        function() {
          console.log("changed devoured to: ", wasDevoured);
//Reload the page to update list
          location.reload();
        }
      );
    });
    
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
//devoured: $("[name=cheeseburger]:checked").val().trim()
    };

  $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
          console.log("Created New Burger!");
//Reload the page to update list
          location.reload();
        }
      );
    });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    
//Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(function() {
            console.log("Deleted Burger: ", id);
            
//Reload the page to get the updated list
            location.reload();
          }
        );
    });
});