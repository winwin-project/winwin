const selectBoxElements = document.querySelectorAll(".select");

function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
    const selectBox = optionElement.closest(".select");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach(selectBoxElement => {
    selectBoxElement.addEventListener("click", function (e) {
        const targetElement = e.target;
        const isOptionElement = targetElement.classList.contains("option");

        if (isOptionElement) {
            selectOption(targetElement);
        }

        toggleSelectBox(selectBoxElement);
        if(e.target.classList.contains("option")){
            $(e.target).closest('.select').find(".arrow").removeClass("arrow-after");
        }

        e.preventDefault();
    });
});

document.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

    if (isSelect) {
        return;
    }

    const allSelectBoxElements = document.querySelectorAll(".select");

    allSelectBoxElements.forEach(boxElement => {
        boxElement.classList.remove("active");
        $(boxElement).find(".arrow").removeClass("arrow-after");
    });
});

// 클릭시 arrow 180도 회전
$('.select').on('click', function(e){
    // $('.arrow').css({"transform":"rotate(180deg)","transition":"all ease 0.5s"})

    // $(this).find('.arrow').css({"transform":"rotate(180deg)","transform-origin":"center","transition":"all ease 0.5s"})

    // if(e.target.tagName != 'LI') {
    //     $(this).find('.arrow').addClass("arrow-after");
    // }
});


$('.sub-category-box').on('click', '.sub-category', function(){
    let text = $(this).text();

    let tagHtml = `<span class="tag">@${text}</span>`;

    $('.select-tag').append(tagHtml);
})

$('.select-tag').on('click', '.tag', function(){
    $(this).detach();
})

// 하트 마우스오버 처리
$('.sec1').on('mouseover', function(){
    $(this).css("fill","black")
});

$('.sec2').on('mouseout', function(){
    $('.heart').css("fill","rgb(203, 213, 225)")
});







// 다중 셀렉트 박스 작업시 참고 코드 (2depth 까지만 적용되어 있어서 3depth로 하려면 더 추가필요)
// $(document).ready(function() {
//
//     //Main 카테고리를 선택 할때 마다 AJAX를 호출할 수 있지만 DB접속을 매번 해야 하기 때문에 main, sub카테고리 전체을 들고온다.
//
//     //****************이부분은 DB로 셋팅하세요.
//     //Main 카테고리 셋팅 (DB에서 값을 가져와 셋팅 하세요.)
//     var mainCategoryArray = new Array();
//     var mainCategoryObject = new Object();
//
//     mainCategoryObject = new Object();
//     mainCategoryObject.main_category_id = "1";
//     mainCategoryObject.main_category_name = "스포츠";
//     mainCategoryArray.push(mainCategoryObject);
//
//     mainCategoryObject = new Object();
//     mainCategoryObject.main_category_id = "2";
//     mainCategoryObject.main_category_name = "공연";
//     mainCategoryArray.push(mainCategoryObject);
//
//     //Sub 카테고리 셋팅 (DB에서 값을 가져와 셋팅 하세요.)
//     var subCategoryArray = new Array();
//     var subCategoryObject = new Object();
//
//     //스포츠에 해당하는 sub category 리스트
//     subCategoryObject = new Object();
//     subCategoryObject.main_category_id = "1";
//     subCategoryObject.sub_category_id = "1"
//     subCategoryObject.sub_category_name = "야구"
//     subCategoryArray.push(subCategoryObject);
//
//     subCategoryObject = new Object();
//     subCategoryObject.main_category_id = "1";
//     subCategoryObject.sub_category_id = "2"
//     subCategoryObject.sub_category_name = "농구"
//     subCategoryArray.push(subCategoryObject);
//
//     subCategoryObject = new Object();
//     subCategoryObject.main_category_id = "1";
//     subCategoryObject.sub_category_id = "3"
//     subCategoryObject.sub_category_name = "축구"
//     subCategoryArray.push(subCategoryObject);
//
//     //공연에 해당하는 sub category 리스트
//     subCategoryObject = new Object();
//     subCategoryObject.main_category_id = "2";
//     subCategoryObject.sub_category_id = "1"
//     subCategoryObject.sub_category_name = "연극"
//     subCategoryArray.push(subCategoryObject);
//
//     subCategoryObject = new Object();
//     subCategoryObject.main_category_id = "2";
//     subCategoryObject.sub_category_id = "2"
//     subCategoryObject.sub_category_name = "뮤지컬"
//     subCategoryArray.push(subCategoryObject);
//
//     subCategoryObject = new Object();
//     subCategoryObject.main_category_id = "2";
//     subCategoryObject.sub_category_id = "3"
//     subCategoryObject.sub_category_name = "오페라"
//     subCategoryArray.push(subCategoryObject);
//
//     subCategoryObject = new Object();
//     subCategoryObject.main_category_id = "2";
//     subCategoryObject.sub_category_id = "4"
//     subCategoryObject.sub_category_name = "콘서트"
//     subCategoryArray.push(subCategoryObject);
//     //****************이부분은 DB로 셋팅하세요.
//
//
//     //메인 카테고리 셋팅
//     var mainCategorySelectBox = $("select[name='mainCategory']");
//
//     for(var i=0;i<mainCategoryArray.length;i++){
//         mainCategorySelectBox.append("<option value='"+mainCategoryArray[i].main_category_id+"'>"+mainCategoryArray[i].main_category_name+"</option>");
//     }
//
//     //*********** 1depth카테고리 선택 후 2depth 생성 START ***********
//     $(document).on("change","select[name='mainCategory']",function(){
//
//         //두번째 셀렉트 박스를 삭제 시킨다.
//         var subCategorySelectBox = $("select[name='subCategory']");
//         subCategorySelectBox.children().remove(); //기존 리스트 삭제
//
//         //선택한 첫번째 박스의 값을 가져와 일치하는 값을 두번째 셀렉트 박스에 넣는다.
//         $("option:selected", this).each(function(){
//             var selectValue = $(this).val(); //main category 에서 선택한 값
//             subCategorySelectBox.append("<option value=''>전체</option>");
//             for(var i=0;i<subCategoryArray.length;i++){
//                 if(selectValue == subCategoryArray[i].main_category_id){
//
//                     subCategorySelectBox.append("<option value='"+subCategoryArray[i].sub_category_id+"'>"+subCategoryArray[i].sub_category_name+"</option>");
//
//                 }
//             }
//         });
//
//     });
//     //*********** 1depth카테고리 선택 후 2depth 생성 END ***********
//
// });













