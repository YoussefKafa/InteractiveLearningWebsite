$(document).ready(function() {
    //click event (hide/show/toggle)-----------------------------------------------------------------------
    $("#hideButton").click(function() {
        $("#pToHideAndShow").hide();
    });
    $("#showButton").click(function() {
        $("#pToHideAndShow").show();
    });
    $("#toggleButton").click(function() {
        $("#pToHideAndShow").toggle();
    });
    //double click event-----------------------------------------------------------------------

    $("#doubleClickButton").dblclick(function() {
        $("#colorParagraph").css("color", "yellow");
    });
    //mouseenter and mouseleave events-----------------------------------------------------------------------
    $("#mouseEnterLeave").mouseenter(function() { $(this).css("color", "yellow") });
    $("#mouseEnterLeave").mouseleave(function() { $(this).css("color", "brown") });
    //hover event-------------------------------------------------------------------------------------------------------
    $("#pWithHover").hover(function() { $(this).css("color", "yellow") }, function() { $(this).css("color", "brown") });
    //callback after an event (with speed effect)-----------------------------------------------------------------------

    $("#callBackButton").click(function() {
        $("#pCallBack").hide(4000, function() {
            $("#hiddenSpan").show();
        });
    });
    $("#changeVal").click(function() {
        $("#textToAlert").attr("value", "value attribute has changed");
    });
    $("#alertButton").click(function() {
        var x = $("#textToAlert").val();
        $("#pToWrite").html(x);
    });

    // Working With HTML elements and attributes ----------------------------------------------------------------------------

    //append,prepend,before,after
    $("#append").click(function() { $("#appendDiv").append("<p>append</p>"); });
    $("#prepend").click(function() { $("#appendDiv").prepend("<p>prepend</p>"); });
    $("#before").click(function() { $("#appendDiv").before("<p>before</p>"); });
    $("#after").click(function() { $("#appendDiv").after("<p>after</p>"); });
    //Remove, Empty
    $("#removeBtn").click(function() { $("#removeP").remove() });
    $("#emptyBtn").click(function() { $("#emptyP").empty() });
    //CSS addClass , removeClass
    $("#turnBlackBtn").click(function() {
        $("h2").addClass("blkClass");
    });
    $("#turnBlueBtn").click(function() {
        $("h2").removeClass("blkClass");
    });
    //CSS get/set
    $("#clrInputBtn").click(function() {
        var color = $("#clrInput").val();
        $("#clrPara").css("color", color);
    });

});