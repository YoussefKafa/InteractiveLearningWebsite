//click event (hide/show/toggle)-----------------------------------------------------------------------
$(document).ready(function() {
    $("#hideButton").click(function() {
        $("#pToHideAndShow").hide();
    });
    $("#showButton").click(function() {
        $("#pToHideAndShow").show();
    });
    $("#toggleButton").click(function() {
        $("#pToHideAndShow").toggle();
    });
});
//double click event-----------------------------------------------------------------------
$(document).ready(function() {
    $("#doubleClickButton").dblclick(function() {
        $("#colorParagraph").css("color", "yellow");
    });
});
//mouseenter and mouseleave events-----------------------------------------------------------------------
$(document).ready(function() {
    $("#mouseEnterLeave").mouseenter(function() { $(this).css("color", "yellow") });
    $("#mouseEnterLeave").mouseleave(function() { $(this).css("color", "brown") });
});
//hover event-------------------------------------------------------------------------------------------------------
$(document).ready(function() {
    $("#pWithHover").hover(function() { $(this).css("color", "yellow") }, function() { $(this).css("color", "brown") });
});
//callback after an event (with speed effect)-----------------------------------------------------------------------
$(document).ready(function() {
    $("#callBackButton").click(function() {
        $("#pCallBack").hide(4000, function() {
            $("#hiddenSpan").show();
        });
    });
});
// Working With HTML elements and attributes ----------------------------------------------------------------------------
$(document).ready(function() {
    $("#changeVal").click(function() {
        $("#textToAlert").attr("value", "value attribute has changed");
    });
    $("#alertButton").click(function() {
        var x = $("#textToAlert").val();
        $("#pToWrite").html(x);
    });

});
//append,prepend,before,after
$(document).ready(function() {
    $("#append").click(function() { $("#appendDiv").append("<p>append</p>"); });
    $("#prepend").click(function() { $("#appendDiv").prepend("<p>prepend</p>"); });
    $("#before").click(function() { $("#appendDiv").before("<p>before</p>"); });
    $("#after").click(function() { $("#appendDiv").after("<p>after</p>"); });
});
//Remove, Empty
$(document).ready(function() {
    $("#removeBtn").click(function() { $("#removeP").remove() });
    $("#emptyBtn").click(function() { $("#emptyP").empty() });
});