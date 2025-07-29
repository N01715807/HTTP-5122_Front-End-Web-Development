//LAB 10 - 2 INVENTORY PAGE
$(document).ready(function () {
	$(".desc").hide();
	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>
	$("#tblInventory tbody tr").hover(
    function () {
      $(this).addClass("selected");
    },
    function () {
      $(this).removeClass("selected");
    }
  );
	//ADD CLICK EVENT TO <tr>
	$("#tblInventory tbody tr").click(function () {
		$(".desc").hide();
		$(this).find(".desc").show();
	});
});