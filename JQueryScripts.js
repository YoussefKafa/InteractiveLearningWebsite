//click event (hide/show/toggle)-----------------------------------------------------------------------
$(document).ready(function(){
  $("#hideButton").click(function(){
    $("#pToHideAndShow").hide();
  });
  $("#showButton").click(function(){
    $("#pToHideAndShow").show();
  });
  $("#toggleButton").click(function(){
    $("#pToHideAndShow").toggle();
  });
});
//double click event-----------------------------------------------------------------------
$(document).ready(function(){
$("#doubleClickButton").dblclick(function(){
$("#colorParagraph").css("color","yellow");
});
});
//mouseenter and mouseleave events-----------------------------------------------------------------------
    $(document).ready(function(){
$("#mouseEnterLeave").mouseenter(function(){$(this).css("color","yellow")});
$("#mouseEnterLeave").mouseleave(function(){$(this).css("color","brown")});
});
//hover event-------------------------------------------------------------------------------------------------------
    $(document).ready(function(){
$("#pWithHover").hover(function(){$(this).css("color","yellow")},function(){$(this).css("color","brown")});
});
//callback after an event (with speed effect)-----------------------------------------------------------------------
    $(document).ready(function(){
      $("#callBackButton").click(function(){
        $("#pCallBack").hide(4000,function(){
            $("#hiddenSpan").show();
        });
      });
    });