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
    //draggable interaction
    $("#draggablePic").draggable();
    $("#resizablePic").resizable();
    //Simple Matching Game
    //we need two arrays, one for flags imgs and one for names
    var flagsImgs = ["img/flags/argentina.png",
        "img/flags/brazil.png",
        "img/flags/lebanon.png",
        "img/flags/syria.png",
        "img/flags/canada.png"
    ];
    var flagsNames = ["Syria", "Lebanon", "Argentina", "Brazil", "Canada"];
    //we need to shuffle the arrays
    shuffle(flagsImgs);
    shuffle(flagsNames);
    $.each(flagsImgs, function(index, value) {
        var flag = value.slice(10, -4);
        $("<div> <img src=" + value + " /> </div>")
            .appendTo("#flagsImgs").draggable({
                revert: function(is_valid_drop) {
                    if (is_valid_drop) {
                        $(this).append("<img src= img/yes.png / > ");
                        $(this).draggable('disable');
                        return true;
                    } else {
                        $(this).append("<img src= img/no.png / > ");
                        $(this).draggable('disable');
                        return true;
                    }
                },
                scope: flag

            });
    });
    $.each(flagsNames, function(index, value) {
        $("<div>" + value + " </div>")
            .appendTo("#flagsNames").droppable({
                scope: value.toLowerCase()
            });
    });
});
//we need a shuffle function to randomize the flags everytime we play the game
function shuffle(arr) {
    return arr.sort(function() { return .2 - Math.random(); });
}