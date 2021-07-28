$(function () {

    // GNB 시작(세로형1열)

    // $(".mainLi").mouseover(function () {
    //     $(this).children("ul.subMenu").stop().slideDown(600);
    // });

    // $(".mainLi").mouseout(function () {
    //     $(this).children("ul.subMenu").stop().slideUp(500);
    // });

    // GNB 끝(세로형1열)

    // GNB 시작(세로형 2열)
    $(".mainLi").mouseover(function () {
        $(this).children("ul.subMenu").stop().fadeIn(700);
    });

    $(".mainLi").mouseout(function () {
        $(this).children("ul.subMenu").stop().fadeOut(300);
    });
    // GNB 끝(세로형 2열)

    // 슬라이드쇼 세로형 시작
    // setInterval(fnSlide, 3000);

    // function fnSlide() {
    //     $("#shuttleFrame").animate(
    //         { "margin-top": "-350px" },
    //         1600,
    //         function () {
    //             $("#slide a:first-child").insertAfter("#slide a:last-child");
    //             $(this).css({ "margin-top": "0" });
    //         }
    //     );
    // }
    // 슬라이드쇼 세로형 끝

    // 슬라이드쇼 가로형 시작
    // setInterval(fnSlide, 3000);
    // function fnSlide() {
    //     $("#shuttleFrame").animate(
    //         { "margin-left": "-780px" },
    //         1600,
    //         function () {
    //             $("#slide a:first-child").insertAfter("#slide a:last-child");
    //             $(this).css({ "margin-left": "0" });
    //         }
    //     );
    // }
    // 슬라이드쇼 가로형 끝

    // 교차전환형 시작
    function fnSlide() {
        $("#slide a").eq(0).fadeOut(
            500,
            function(){
                $(this).insertAfter("#slide a:last-child");        
            }
            );
        $("#slide a").eq(1).fadeIn(1000)
    }

    

    // 교차전환형 끝

    // 레이어팝업 시작
    $("tr#popPoint").click(function(){
        $("div#layerBG").css("display","block");
    });
    $("div#closeBtnArea>button").click(function(){
        $("div#layerBG").css("display","none");
    });

    

    // 레이어팝업 끝

});