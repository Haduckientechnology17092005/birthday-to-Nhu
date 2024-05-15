const TypeWriter = function(txtElement,words,wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}
//type method
TypeWriter.prototype.type = function(){
    //Current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];
    //Check if deleting
    if(this.isDeleting){
        //Remove char
        this.txt = fullTxt.substring(0,this.txt.length - 1);
    } else {
        //Add char
        this.txt = fullTxt.substring(0,this.txt.length + 1);
    }
    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //Initial Type Speed
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /= 2;
    }
    //Check if word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        //Make pause at end
        typeSpeed = this.wait;
        //set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //Move to next word
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 500;
    }
    //Print full name
    
    setTimeout(()=> this.type(), 500)
}
//Init on DOM LOAD
document.addEventListener('DOMContentLoaded',init);
//Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //init typewriter
    new TypeWriter(txtElement,words,wait);
}
document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-audio');
    // Try to unmute the audio after a small delay
    setTimeout(() => {
        audio.muted = false;
        // Play audio again to ensure it plays if it's paused
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }, 2000); // Delay in milliseconds
});
function nextpage(){
    window.location.href = "https://www.facebook.com";
}