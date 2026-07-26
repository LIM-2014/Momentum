const quotes = [{txt: "삶이 있는 한 희망은 있다.",author: "키케로"},
    {txt: "어제와 똑같은 삶을 살면서 다른 미래를 기대하는 것은 정신병 초기증세이다.",author: "알베르트 아인슈타인"},
    {txt: "가장 큰 위험은 위험이 없는 인생이다.",author: "스티븐 코비"},
    {txt: "한 번의 실패와 영원한 실패를 혼동하지 말라.",author: "F. 스콧 피츠제럴드"},
    {txt: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 중요한 것은 지속하는 용기다.",author: "윈스턴 처칠"},
    {txt: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 당신의 생각대로 될 것이다.",author: "헨리 포드"},
    {txt: "우리는 우리가 반복적으로 행하는 것의 결과물이다. 탁월함은 행동이 아니라 습관이다.",author: "아리스토텔레스"},
    {txt: "인생은 거울과 같으니, 그것을 향해 웃으면 당신에게 웃음을 돌려준다.",author: "피스 시크릿"},
    {txt: "미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것이다.",author: "피터 드러커"},
    {txt: "자신을 믿어라. 자신의 능력을 신뢰하라. 겸손하지만 합리적인 자신감 없이는 성공할 수도, 행복할 수도 없다.",author: "노먼 빈센트 필"}];

const quoteInput = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

function randomQuote() {
    if (!quoteInput || !quoteAuthor) {
        console.error("Quote elements not found");
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteInput.innerText = quotes[randomIndex].txt;
    quoteAuthor.innerText = quotes[randomIndex].author;
}

randomQuote();