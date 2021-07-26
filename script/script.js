$(function(){
    // GNB 메뉴 영역
    $("li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(300);
    });
    $("li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().slideUp(10);
    });

    // 슬라이드 영역

    setInterval(fnSlide,4000);

    function fnSlide(){
        $("#shuttleFrame").animate({
        "margin-left":"-780px"},
    3000,
    function(){
                $("#shuttleFrame>a:nth-child(1)")
                .insertAfter("#shuttleFrame>a:nth-child(3)")
                $("#shuttleFrame").css({"margin-left":"0"});
            }
        ); // 슬라이드쇼 애니메이션
    } // 커스텀 함수

    // 레이어팝업
    $("#noticeBoard tr:nth-child(1)").click(function(){
        $("#layerBG").css({"display":"block"});
    });

    $("#closeBtn").click(function(){
        $("#layerBG").css({"display":"none"});
    });
});