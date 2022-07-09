const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const button = document.querySelector("#button");
const select = [];



function addAnswer(answerText, number,i) {
    const a = document.querySelector(".answerBox");
    const answer = document.createElement('button');
    answer.classList.add('answerList','btn','btn-light');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        select.unshift(i);
        console.log(select);
        
        var children = document.querySelectorAll(".answerList");
        for(let  i = 0; i< children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
      goNext(++number);
        
    },false);
}
function goNext(number) {
        if(number ==10) {
            qna.style.display ='none'; 
            let _0number = 0;
            let _1number = 0;
             for(let i in select) {
                
                 if(select.at(i) =="0") {
                     _0number = _0number+1;
                    
                 } else if (select.at(i) =="1") {
                     _1number = _1number +1;
                 } 
             }
             main.style.animation = 'none';
             main.innerHTML = 'Test Over!';
             main.style.display = 'block';
             qna.style.display = 'none';    

            const result = document.createElement("h1");
            
            const String1 =  _0number;
            String1.toString();
            if(String1 =='0') {
                result.innerText ="1번지문의 확률이 "+String1+"%입니다.";
            }else {
                result.innerText ="1번지문의 확률이 "+String1+"0%입니다.";
            }

            main.appendChild(result);

          
          
             
             
             
            //  main.style.display = 'block';

            //  switch(_0number) {
            //       case 0:  // if (x === 'value1')
            //       console.log("0지   문의 확률 0%");
            //       break;
              
            //       case 1:  // if (x === 'value1')
            //       console.log("0지문의 확률 10%");
            //       break;
                  
            //       case 2:  // if (x === 'value1')
            //       console.log("0지문의 확률 20%");
            //       break;
                  
            //       case 3:  // if (x === 'value1')
            //       console.log("0지문의 확률 30%");
            //       break;
                  
            //       case 4:  // if (x === 'value1')
            //       console.log("0지문의 확률 40%");
            //       break;
                  
            //       case 5:  // if (x === 'value1')
            //       console.log("0지문의 확률 50%");
            //       break;
                  
            //       case 6:  // if (x === 'value1')
            //       console.log("0지문의 확률 60%");
            //       break;
                  
            //       case 7:  // if (x === 'value1')
            //       console.log("0지문의 확률 70%");
            //       break;
                  
            //       case 8:  // if (x === 'value1')
            //       console.log("0지문의 확률 80%");
            //       break;
                  
            //       case 9:  // if (x === 'value1')
            //       console.log("0지문의 확률 90%");
            //       break;
                  
            //       case 10:  // if (x === 'value1')
            //       console.log("0지문의 확률 100%");
            //     //   break;    
                  
            //   }
             console.log("0의개수:", _0number);
             console.log("1의개수:", _1number);
             
            
            
            return;
        }


        const q = document.querySelector(".qBox");
        q.innerHTML = qnaList[number].q;
        for(let i in qnaList[number].a) {
            addAnswer(qnaList[number].a[i].answer, number,i);
        }
    }
    


function begin() {
    
    
    main.style.animation = 'fadeOut 1s';
    qna.style.display ='none';
    setTimeout(() => {
        main.style.display = 'none';
    }, 950);
    setTimeout(() => {
        qna.style.animation = 'fadeIn 1s';
        setTimeout(() => {
            qna.style.display = 'block';
        }, 450);
    }, 450);

    let number = 0;
     goNext(number);
};



