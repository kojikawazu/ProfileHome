$(function(){
    // ハンバーガーヘッダクリックリスナー
    $('#hamburger').on('click', function(){
        $('.icon').toggleClass('close');
        $('.sm').slideToggle();
    });

    // ページへ戻るボタン
    var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// ページスクロール
$('a[href^="#"]').on("click", function(){
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" ? "html" : href);
    var position = target.offset().top;
    $("html,body").animate({ scrollTop: position }, speed);
    return false;
});