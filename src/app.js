import {showPannel} from './js/utils/showPanel.js';
import {clearAns} from './js/utils/clearAnswer.js';
import {data} from './js/utils/res.js';
import './scss/app.scss';
const table = JSON.parse(JSON.stringify(data));
const ques = table.questions.map(ques=>ques);
const ans = table.answers.map(ans=>ans);
const output =[];
const totalQues = ques.length;
let current_ques=0;
let nextBtn =document.getElementById('nextBtn');
let prevBtn =document.getElementById('prevBtn');
let submitBtn = document.getElementById('submitBtn');
submitBtn.setAttribute('disabled','true');
prevBtn.setAttribute('disabled','true');

showPannel(ques,ans,current_ques,totalQues,output);

prevBtn.addEventListener('click',()=>{
    if(nextBtn.getAttribute('disabled') === 'true'){
        nextBtn.removeAttribute('disabled');
    }
    if(current_ques === 1){
        prevBtn.setAttribute('disabled','true');
        current_ques--;
        clearAns();
    }
    else{
        current_ques--;
        clearAns();
    }
    showPannel(ques,ans,current_ques,totalQues,output);
});

nextBtn.addEventListener('click',()=>{
    if(prevBtn.getAttribute('disabled') === 'true'){
        prevBtn.removeAttribute('disabled');
    }
    if(current_ques === totalQues-2){
        nextBtn.setAttribute('disabled','true');
        current_ques++;
        clearAns();
    }
    else {
        current_ques++;
        clearAns();
    }
    showPannel(ques,ans,current_ques,totalQues,output);
})

submitBtn.addEventListener('click',()=>{
    document.getElementById('test').style.display="none";
    document.getElementById('submit-section').style.display="block";
    console.log("Output=",JSON.stringify(output))
})

