// script code start

const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

// (in js for loop start coding its says that when n=0 than first image visible when n=1 than 2nd img  when n=2 then 3rd img up to img length depend on how many img insert in that web page thats image length its gone i++ its increasing)//

let n=0;
// (first of all to create a function name changeSlider than condition after that function to call them in this js)


function changeSlide(){

    for( let i = 0; i<imgs.length; i++ ){
        imgs[i].style.display ='none';
    }
    imgs[n].style.display = 'block';
}

// call the function
changeSlide();

// in this btn to clickable  than to adding some js tag previous button.

prev_btn.addEventListener('click', (e)=>{

    // now if else condition to apply when n greater than 0 than n value decreasing by 1 by 1.n--.
    if(n>0){
        n--;

        // either in this if condition is not satisfied than go to the else condition n is not greater then 0 than it will change the value of n imgs length-1 it means-when we click the previous btn than it will directly go to  the last image 
    }else{
        n = imgs.length - 1;
    }
    changeSlide();

    // (after that  we have to execute the function  than call the changeSlide and image update also)
})


// next button
next_btn.addEventListener('click', (e)=>{

    // in the next button if n is less than imgs .length-1 than n is increase the value n++ when this condition is false than n=0 after that call the changeSlider.

    if(n < imgs.length-1){
        n++;

    }else{
        n = 0;
    }
    changeSlide();

})


// scroll bar coding evt means-event to work its a name

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;

    });
}
