
$(function () {

    $("#gewara ul li").click(function () {
        $(this).css({'border-bottom':'3px solid #eb6120'}).siblings("li").css({'border-bottom':'3px solid #999999'})
    });
    $("#movies a").trigger('click',function () {
        $("#gewara ul li:first-child").css({'border-bottom':'3px solid #eb6120'},{"color":"#eb6120"});
    });
    $(".nav li").click(function () {
        $(this).css('border-left','5px solid #eb6120').siblings('li').css('border','0')
    });
    $("#movies").click(function(e) {
        if (e) {
            $("#site_nav").css('display', 'none');
            $("#special_nav").css('display', 'none');
        }
    });
    $("#site_nav ul li a").eq(0).trigger("click");
    $("#special_nav ul li a").eq(0).trigger("click");
});