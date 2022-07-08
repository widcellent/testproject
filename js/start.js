const main = document.querySelector("#main");
const qna = document.querySelector("#qna");


function addAnswer(answerText, number) {
    const a = document.querySelector(".answerBox");
    const answer = document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        var children = document.querySelectorAll(".answerList");
        for(let  i = 0; i< children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
      goNext(++number);
        
    },false);
}
function goNext(number) {
    const q = document.querySelector(".qBox");
    q.innerHTML = qnaList[number].q;
    for(let i in qnaList[number].a) {
        addAnswer(qnaList[number].a[i].answer, number);
    }
}

function begin() {
    main.style.display = "none"; 
    let number = 0;
     goNext(number);
};



