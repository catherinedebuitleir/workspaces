
$(document).ready(function () {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus');
        $('.dropdown-toggle').dropdown();
    });

    $("#comment").click(function () {
        $("#chatboxes").toggle();
        return false;
    });

    $(function () {
        // Enables popover
        $("[data-toggle=popover]").popover();
    });

    function editmode_customer() {
        $(".profile-edit").toggle();
        $(".profile-readonly").toggle();
    }

    $("#subscription-qty-input").change(function () {
        var change = $("#subscription-qty-input").val();
        $('#new-quantity').text(change);
        if (change < 5) {
            $('#subscription-quatity-indicator').show();
            $('#subscription-quatity-indicator .increase-update .material-icons').text("arrow_downward");
            var difference = change - 5;
            $('#subscription-quatity-indicator #change-quantity').text(difference);

            $('#subscription-buy-button').hide();
            $('#subscription-update-button').show();
        } else if (change > 5) {
            $('#subscription-quatity-indicator').show();
            $('#subscription-quatity-indicator .increase-update .material-icons').text("arrow_upward");
            var difference = change - 5;
            $('#subscription-quatity-indicator #change-quantity').text("+" + difference);

            $('#subscription-buy-button').show();
            $('#subscription-update-button').hide();
        } else {
            $('#subscription-quatity-indicator').hide();
            $('#subscription-buy-button').hide();
            $('#subscription-update-button').hide();
        }
    });

    $("#menu-button").click(function () {
        $(".shell-menu").toggle();
    });

    $("#closemenu").click(function () {
        $(".shell-menu").toggle();
    });

    $("#dropdown-menu-one").click(function () {
        $("#sub-menu-one").toggle();
    });

    $(".more").hover(function () {
        $(".more-tasks").toggle();
    });

    $("#dropdown-menu-one").click(function(){
        $("#sub-menu-one").slideToggle("slow");
        $("#sub-menu-2").hide();
        $("#sub-menu-1").hide();
        $("#sub-menu-3").hide();
        $("#sub-menu-4").hide();
        $("#sub-menu-0").hide();
    });

    $("#dropdown-menu-0").click(function(){
        $("#sub-menu-0").slideToggle("slow");
        $("#sub-menu-one").hide();
        $("#sub-cost").hide();
        $("#sub-menu-1").hide();
        $("#sub-menu-2").hide();
        $("#sub-menu-3").hide();
        $("#sub-menu-4").hide();

    });

    $("#dropdown-menu-1").click(function(){
        $("#sub-menu-1").slideToggle("slow");
        $("#sub-menu-2").hide();
        $("#sub-cost").hide();
        $("#sub-util").hide();
        $("#sub-menu-one").hide();
        $("#sub-menu-0").hide();
        $("#sub-menu-3").hide();
        $("#sub-menu-4").hide();
        $("#sub-integrate").hide();

    });

    $("#dropdown-menu-2").click(function(){
        $("#sub-menu-2").slideToggle("slow");
        $("#sub-menu-one").hide();
        $("#sub-cost").hide();
        $("#sub-util").hide();
        $("#sub-menu-0").hide();
        $("#sub-menu-1").hide();
        $("#sub-menu-3").hide();
        $("#sub-menu-4").hide();
        $("#sub-integrate").hide();

    });

    $("#dropdown-menu-3").click(function(){
        $("#sub-menu-3").slideToggle("slow");
        $("#sub-menu-one").hide();
        $("#sub-cost").hide();
        $("#sub-util").hide();
        $("#sub-menu-0").hide();
        $("#sub-menu-1").hide();
        $("#sub-menu-2").hide();
        $("#sub-menu-4").hide();
        $("#sub-integrate").hide();

    });

    $("#dropdown-menu-4").click(function(){
        $("#sub-menu-4").slideToggle("slow");
        $("#sub-menu-one").hide();
        $("#sub-cost").hide();
        $("#sub-util").hide();
        $("#sub-menu-0").hide();
        $("#sub-menu-1").hide();
        $("#sub-menu-2").hide();
        $("#sub-menu-3").hide();
        $("#sub-integrate").hide();

    });

    $("#dropdown-integrate").click(function(){
        $("#sub-integrate").slideToggle("slow");
        $("#sub-cost").hide();
        $("#sub-menu-one").hide();
        $("#sub-util").hide();
        $("#sub-menu-0").hide();
        $("#sub-menu-1").hide();
        $("#sub-menu-2").hide();
        $("#sub-menu-3").hide();

    });

    $("#dropdown-cost").click(function(){
        $("#sub-cost").slideToggle("slow");
        $("#sub-integrate").hide();
        $("#sub-util").hide();
        $("#sub-menu-one").hide();
        $("#sub-menu-0").hide();
        $("#sub-menu-1").hide();
        $("#sub-menu-2").hide();
        $("#sub-menu-3").hide();

    });

    $("#dropdown-util").click(function(){
        $("#sub-util").slideToggle("slow");
        $("#sub-integrate").hide();
        $("#sub-cost").hide();
        $("#sub-menu-one").hide();
        $("#sub-menu-0").hide();
        $("#sub-menu-1").hide();
        $("#sub-menu-2").hide();
        $("#sub-menu-3").hide();
    });

    // show the side menu
    $("#menu-button").hover(function () {
        $("#menu-button").css({"color" : "#1A73E8"})
        $(".shell-menu").show();
    });

    $("#side-menu").mouseleave(function(){
        $("#side-menu").hide();
        $("#menu-button").removeAttr('style');
      });

});

