const form = document.getElementById('contact');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
    const fullname = getElementById('fullname');
    const email = getElementById('email');
    const phone = getElementById('phone');
    const address = getElementById('address');
    const desc = getElementById('desc');

    let errorMsgs = [];

    if(fullname.value === "" || fullname.value === null) {
        errorMsgs.push("Please enter your name");
    }

    if(fullname.value === "" || fullname.value === null) {
        errorMsgs.push("Please enter your email");
    }

    if (messages.length > 0) {
        e.preventDefault();
    }
    
});