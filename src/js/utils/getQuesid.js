export const getQuesid = (event,ans,output) =>{
    let options = document.querySelectorAll('.option')
    options.forEach(option=>option.style.backgroundColor="#e7e7e1")
    const tgt = event.target;
    tgt.style.backgroundColor = "#eebc7a";
    const ansId = +tgt.id;
    const ansIdx = ans.findIndex(answer=>answer.answerid === ansId);
    const quesIdx = output.findIndex(op=>op.questionid === ans[ansIdx].questionid);
    if(quesIdx>=0){
        output[quesIdx].answerid = ansId; 
    }
    else{
        output.push({
            questionid:ans[ansIdx].questionid,
            answerid:ansId
        })
    }
    output.length && submitBtn.removeAttribute('disabled');
    
};