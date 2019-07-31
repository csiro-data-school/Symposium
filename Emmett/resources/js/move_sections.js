$(document).ready(function(){
 $("#introduction").children()[0].remove();
 
 $("#introduction").children().appendTo($("#new_intro"));
 
 $("#introduction").remove()
 
 $("#my-data-school-experience").appendTo($("#new_refs"));
 
 $("#my-data-school-experience").find("p").wrapAll("<div class='chal_text' />")
});