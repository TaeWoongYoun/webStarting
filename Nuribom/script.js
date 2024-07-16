const data = [
    {id : 1, word : "international", as1 : "국제의, 국제적인", as2 : "생략하다, 빼다", as3 : "먹이, 희생자", as4 : "정확한"},
    {id : 2, word : "variable", as1 : "변수", as2 : "만들다", as3 : "요리", as4 : "어려운"},
    {id : 3, word : "align", as1 : "생산하다", as2 : "가운데", as3 : "정렬", as4 : "너비"},
    {id : 4, word : "division", as1 : "채워넣는것", as2 : "분할", as3 : "가로", as4 : "쉬운"},
    {id : 5, word : "margin", as1 : "길이", as2 : "빈 공간", as3 : "거리", as4 : "여백"},
    {id : 6, word : "paragraph", as1 : "단락", as2 : "문서", as3 : "기능", as4 : "코끼리"},
    {id : 7, word : "document", as1 : "비행기", as2 : "문서", as3 : "휴지통", as4 : "개인적인"},
    {id : 8, word : "select", as1 : "투입", as2 : "선택하다", as3 : "공격하다", as4 : "바퀴벌레"},
    {id : 9, word : "sort", as1 : "정렬", as2 : "보고싶은", as3 : "윤도연", as4 : "멍청한"},
    {id : 10, word : "input", as1 : "원필립", as2 : "투입", as3 : "누리봄", as4 : "아쉬운"}
]

function wordTest(products){
    products.forEach(element => {
        var words = `
            <div class="data">
                <div class="word">
                    <p>${element.word}</p>
                </div>
                <ul class="bar">
                    <li>${element.as1}</li>
                    <li>${element.as2}</li>
                    <li>${element.as3}</li>
                    <li>${element.as4}</li>
                </ul>
            </div>
                `;
        document.querySelector('.en').insertAdjacentHTML('beforeend', words);
    });
}

wordTest(data)