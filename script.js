$(function() {
    $("#login-box").css("display", "none");
    $('#connexion-link').on('click touch', function(e) {
        $('#login-box').toggle("fold");
    });
});

$(function() {
    $("#all-tools").css("display", "none");
    $('#tools-show').on('click touch', function(e) {
        $('#all-tools').slideToggle("slow");
        $(".show-all-j").toggleClass("hide-all-j");
    });
});

$(function() {
    $('.this-is-an-alert-close').on('click touch', function(e) {
        $('.this-is-an-alert').hide("blind");
    });
});

$(function() {
    $('#MooTools_show').on('click touch', function(e) {
        $('#MooTools_script').slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#back-top").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});


$(function() {
    $('#overlay-start').on('click touch', function(e) {
        var docHeight = $(document).height();
   $("body").append("<div id='overlay'></div>");
   $("#overlay").html('<div id="overlay-content">All new content. <em>You bet!</em><button class="button">Close</button></div>');
   $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.7,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'z-index': 5000
      });
    $("#overlay-close").click(function () {
        $("#overlay").remove();
    });

    });
});

