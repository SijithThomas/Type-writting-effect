const textToDisplay=document.querySelector('.type')
const texts=['Front ','UI&Ux '];
let i=0;
let j=0;
let currentText=[];
let isDeleting= false;
let isEnd=false;

function type(){
    isEnd = false
    textToDisplay.innerHTML=currentText.join('')
    if(i < texts.length){


        if(!isDeleting && j <= texts[i].length){
            currentText.push(texts[i][j])
            j++
        }
        if(isDeleting && j <= texts[i].length){
            currentText.pop(texts[i][j])
            j--
        }

        if(j == texts[i].length ){
         isEnd=true
         isDeleting=true;
         
        }
        if(isDeleting && j==0){
            currentText=[]
            isDeleting=false;
            i++
            if(i==texts.length){
                i=0
            }
        }
    }
    const speedUp=Math.random()*(80-50)+50
    const normalSpeed=Math.random()*(300-200)+200
    const time=isEnd ? 1500: isDeleting ? speedUp :normalSpeed 
    setTimeout(type, time)
}
type();