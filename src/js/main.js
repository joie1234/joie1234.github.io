$(document).ready(function(){

  $("#firstX").click(function(){
    $("#first").hide();
  });
  $("#firstF").click(function() {
    $("#first").show();
  });
  $("#secondX").click(function(){
    $("#second").hide();
  });
  $("#secondF").click(function() {
    $("#second").show();
  });
  $("#thirdX").click(function(){
    $("#three").hide();
  });
  $("#thirdF").click(function() {
    $("#three").show();
  });
  $("#fourthX").click(function(){
    $("#fourth").hide();
  });
  $("#fourthF").click(function() {
    $("#fourth").show();
  });

  $(function() {
    var boxes = $(".drag");

    // Set up click handlers for each box
    boxes.click(function() {
      var el = $(this), // The box that was clicked
        max = 0;

      // Find the highest z-index
      boxes.each(function() {
        // Find the current z-index value
        var z = parseInt( $( this ).css( "z-index" ), 10 );
        // Keep either the current max, or the current z-index, whichever is higher
        max = Math.max( max, z );
      });

      // Set the box that was clicked to the highest z-index plus one
      el.css("z-index", max + 1 );
    });
  });



  $(document).mouseup(function (e)
  {
    $("#info").click(function() {
      $("#contactBox").hide();
      $("#infoBox").toggle();

    });
    var container = $("#infoBox"); // YOUR CONTAINER SELECTOR

    if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.hide();
    }
  });
  $(document).mouseup(function (e)
  {
    $("#contact").click(function() {
      $("#infoBox").hide();
      $("#contactBox").toggle();

    });
    var container = $("#contactBox"); // YOUR CONTAINER SELECTOR

    if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.hide();
    }
  });


});


