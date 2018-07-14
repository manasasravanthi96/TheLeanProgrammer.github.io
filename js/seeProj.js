// $(document).ready(function(){
//     $("#showless").hide();
// });

document.getElementById("moreProjects").addEventListener("click", function(event){
    event.preventDefault();
    
    $('.hide-proj').css({
        "display": "block"
    });
    // $("#showless").show();
    $("#moreProjects").hide();
});