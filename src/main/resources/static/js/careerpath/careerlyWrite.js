$('#count_memo').keyup(function (e){
    var content = $(this).val();
    $('#cnt').html("("+content.length+" /25)");    //글자수 실시간 카운팅

    if (content.length > 25){
        alert("최대 25자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 25));
        $('#cnt').html("(25 / 25)");
    }
});

//태그 삭제
const closes = document.getElementsByClassName("close");

const myFunction = function(event) {
    const div = event.target.parentNode;
    div.remove();
};

for (let i = 0; i < closes.length; i++) {
    closes[i].addEventListener('click', myFunction);
}