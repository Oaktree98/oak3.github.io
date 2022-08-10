let state = 0; // 0=상단, 1=하단
window.addEventListener("scroll", function() {
    let posW = window.scrollY // 현재 스크롤 위치
    let posM = $("main").position().top - 300 // main 태그 위치 - 300
    if (posW > posM && state == 0) { // 상단일 때 동작
        state = 1; // 1번만 동작하기 위해서
        $("section div").each(function() {
            let i = $(this).index() // 0, 1, 2, 3
            // delay() = setTimeout 효과
            $(this).delay(200*i).animate({top: 0, opacity: 1})
        })
    }
    else if(posW < posM && state == 1) { // 하단일 때 동작
        state = 0;
        $("section div").each(function() { // div 요소 각각 모두 동작
            let i = $("section div").length - 1 - $(this).index()
            if ($(this).index() % 2 == 0) { // 짝수, 홀수 요소를 각각 넣어준다.
                $(this).delay(200*i).animate({top: 250, opacity: 0})
            }
            else {
                $(this).delay(200*i).animate({top: -250, opacity: 0})
            }
        })
    }
})

