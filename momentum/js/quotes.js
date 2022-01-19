const quotes = [
{
quote: 'Tis better to have loved and lost, than never to have loved at all',//사랑하고 이별하는 것이, 전혀 사랑하지 않는 것보다 낫다
author: 'Alfred, Lord Tennyson'//알렉산더 테니슨
},
{
quote: 'There is always some madness in love. But there is also always some reason in madness.',//사랑에는 항상 광기가 존재한다. 그러나 광기에는 항상 이유가 존재한다.
author: 'Friedrich Nietzsche'//프레드릭 니체
},
{
quote: 'Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies.',//사람들과의 인연에서 사랑이란 공기처럼 가벼운 것이다. 가벼운 날개를 활짝 펴고 순식간에 날아간다.
author: 'Alexander Pope'//알렉산더 포프
},
{
quote: 'Love asks me no questions, and gives me endless support',//사랑은 내게 질문하지 않으며, 다만 끝없는 지지를 준다.
author: ' William Shakespeare'//윌리엄 세익스피어
},
{
quote: 'To love and win is the best thing. To love and lose, is the next best thing',//사랑하고 그것을 이루는 것은 최고의 것이다. 사랑하고 그것을 잃는 것이 그 다음으로 최고의 것이다.
author: 'William Thackeray'//윌리엄 테커레이
},
{
quote: 'If you would be loved, love and be lovable.',//사랑받고 싶다면, 사랑하고 사랑스러워져라
author: 'Benjamin Franklin'//벤자민 프랭클린
},
{
quote: 'The course of true love never did run smooth',//진정한 사랑은 자고로 순탄하지 않다
author: 'William Shakespeare'//윌리엄 세익스피어
},
{
quote: 'The way to love anything is to realize that it might be lost.',//어떤 것이든지 사랑하게 되는 방법은 이를 잃을 수도 있다는 것을 알게되는 것이다.
author: 'G.K. Chesterton'//G.K. 체스터턴
},
{
quote: 'The supreme happiness in life is the conviction that we are loved.',//인생에서 최고의 행복은 사랑받고 있다는 확신을 갖고 있을 때이다
author: 'Victor Hugo'//빅터 휴고
},
{
quote: 'Love doesn’t make the world go round. Love is what makes the ride worthwhile',//사랑은 세상을 움직이는 것이 아니다. 사랑은 그 여정을 가치 있게 만드는 것이다.
author: 'Franklin P. Jones'//프랭클린 P. 존스
},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
