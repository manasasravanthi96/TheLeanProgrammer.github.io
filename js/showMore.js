$(document).ready(function(){
    $("#showless").hide();
});

document.getElementById("showmore").addEventListener("click", function(event){
    event.preventDefault();
    $("#hid1").attr('data-date', 'January 2018 – March 2018');
    $("#hid2").attr('data-date', 'January 2017 – August 2017');
    $("#hid3").attr('data-date', 'January 2017 – Present');
    $('#experience-timeline').each(function() {

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });
    $('.hide-init').css({
        "display": "block"
    });
    $("#showless").show();
    $("#showmore").hide();
});

document.getElementById("showless").addEventListener("click", function(event){
    $('#experience-timeline').each(function() {

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            $this.find('.hide-init').each(function() {
                $("#hid1").removeAttr('data-date');
                $("#hid2").removeAttr('data-date');
                $("#hid3").removeAttr('data-date');
                var date = $(this).data('date');
                if (date) { // Prepend if exists
                    $(".vtimeline-date").remove();
                }
            });
            
        });

    });
    event.preventDefault();
    $('.hide-init').css({
        "display": "none"
    });
    $("#showless").hide();
    $("#showmore").show();
});