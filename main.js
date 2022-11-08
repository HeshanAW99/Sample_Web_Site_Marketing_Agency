//change navigation bar styles when scrolling

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


/*FAQ section start*/

const faqs = document.querySelectorAll('.faq__class');  //creating a class

//follow section is use to click and open questions
faqs.forEach(faq__class => {
    faq__class.addEventListener('click', () => {    //adding click event
        faq__class.classList.toggle('open');

        //change click option to the icon
        const icon = faq__class.querySelector('.faq__icon i');
        //add a condition
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";   //change icon to minus
        } else{
            icon.className = "uil uil-plus";    //change icon back to plus
        }
    })
})


/*FAQ section end*/