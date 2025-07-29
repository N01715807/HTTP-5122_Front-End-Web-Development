//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
$(document).ready(function () {
	//Inside of here is your jQuery/JavaScript
	$(".contentBox").hide();
	//ADD CLICK EVENT TO <h2>
	$("h2").click(function () {
    $(".contentBox").not($(this).next()).slideUp();
    $(this).next(".contentBox").slideToggle(3000); 
  });
	//CHANGE <p> BACKGROUND ON HOVER
	$(".contentBox").hover(
    function () {
      $(this).addClass("textHovered");
    },
    function () {
      $(this).removeClass("textHovered");
    }
  );
});

