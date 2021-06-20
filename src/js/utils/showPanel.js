import { getQuesid } from './getQuesid.js';

let options = document.querySelectorAll('.options')[0];
let category = document.querySelectorAll('.category')[0];
let question = document.querySelectorAll('.question')[0];

export const showPannel=(ques,ans,current_ques,totalQues,output)=>{
    category.textContent = ques[current_ques].groupName;
    question.textContent="Q."+(current_ques+1)+"/"+totalQues+"  "+ ques[current_ques].question;
    const ansList = ans.filter(answer=> answer.questionid === ques[current_ques].questionid);
    const opIdx = output.findIndex(op=>op.questionid === ques[current_ques].questionid);
    ansList.forEach(element => {
        let option = document.createElement('div');    
        option.setAttribute('class','option');
        option.setAttribute('id',element.answerid);
        option.setAttribute('key',element.answerid);
        option.setAttribute('onclick',"getQuesid(event,this)");
        option.onclick = function(event){
            getQuesid(event,ans,output);
        }
        option.textContent = element.answer;
        if(opIdx >=0 && output[opIdx].answerid === element.answerid){
            option.style.backgroundColor ="#eebc7a";
        }
        options.appendChild(option);
        
    });

    
}