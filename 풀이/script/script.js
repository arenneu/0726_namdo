$(function(){

    // GNB 시작(세로형1열)
    // $(".mainLi").mouseover(function(){
    //     $(this).children("ul.subMenu").stop().slideDown(300);
    // });

    // $(".mainLi").mouseout(function(){
    //     $(this).children("ul.subMenu").stop().slideUp(500);
    // });
    // GNB 끝(세로형1열)
    
    // GNB 시작(세로형 2열)

    $(".mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(500);
    });

    $(".mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(200);
    });

    // GNB 끝(세로형 2열)
});