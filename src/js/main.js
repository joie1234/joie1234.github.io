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
