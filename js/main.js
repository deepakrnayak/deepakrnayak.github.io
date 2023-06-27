$(document).ready(function() {


  // tooltips function
  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Initally hide the read more div
     $("#read-more").css("display", "none");

     // Show more on click
     $("#badge-more").on("click", function() {

        // Show/hide the div
        $("#read-more").fadeToggle("fast");

        // Change the button
        if ($("#badge-more").text() == "Read more...") {
           $("#badge-more").text("Read less ");
        } else {
           $("#badge-more").text("Read more...");
        }

     });

     // popover function
     $('[data-toggle="popover"]').popover();

     // open all accordion panels for possible rinting
     // $(".expander").on("click", function() {
     //
     //    // Change the button
     //    if ($(".expander").text() == "show all") {
     //       $(".expander").text("hide all");
     //       $(".panel-collapse").addClass("in");
     //       $(".panel-default a").attr("aria-expanded", "true").removeClass("collapsed");
     //    } else {
     //       $(".expander").text("show all");
     //       $(".panel-collapse").removeClass("in");
     //       $(".panel-default a").attr("aria-expanded", "false").addClass("collapsed");
     //    }
     //
     // });

     // open all accordion panels for possible printing or close
   $(".expander").on("click", function() {

      if ($(".expander").text() === "show all") {

        // Change the button text
         $(".expander").text("hide all");
         // show all accordions
         $(".panel-collapse").collapse('show');

      } else {
        // Change the button text
         $(".expander").text("show all");
         // hide all accordions
         $(".panel-collapse").collapse('hide');
      }
   });

});
