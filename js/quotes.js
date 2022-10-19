const quotes = [
  {
    quote: "늦었다고 생각할 때가 진짜 너무 늦었다.",
    author: "박명수",
  },
  {
    quote: "노력하지 않은 자는 기회조차 안 온다.",
    author: "박명수",
  },
  {
    quote: "아프면 환자지, 뭐가 청춘이냐?",
    author: "유병재",
  },
  {
    quote:
      "젊음은 돈 주고 살 수 없어도 젊은이는 헐값에 살 수 있다고 보는 모양이다.",
    author: "유병재",
  },
  {
    quote:
      "아니 X발 무슨 다 경력직만 뽑으면 나 같은 신입은 어디서 경력을 쌓나?",
    author: "유병재",
  },
  {
    quote: "목소리의 톤이 높아질수록 뜻은 왜곡된다. 낮은 목소리에 힘이 있다.",
    author: "유재석",
  },
  {
    quote: "내가 좋아하는 무언가를 포기하지 않으면 두개를 가질 수 없다.",
    author: "유재석",
  },
  {
    quote: "말을 독점하면, 적이 많아진다.",
    author: "유재석",
  },
  {
    quote: "앞에서 할 수 없는 말이라면, 뒤에서도 하지 마라.",
    author: "유재석",
  },
  {
    quote: "무엇을 선택하느냐보다 선택 이후의 행동이 더 중요하다.",
    author: "유재석",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
