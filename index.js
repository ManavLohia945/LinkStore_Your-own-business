const bar = document.getElementById('bar'); 
const nav = document.getElementById('navbar');
const close = document.getElementById('close'); 

if(bar){ 
    //this var 'bar' will store value as true if it is clicked that is if bar 
    //is clicked we want to do the functions

    //we want to add and eventlistner when a click func is performed the arrow func will execute

    //ie.our we add a class "active" to our navbar which will display that section
    bar.addEventListener('click',() => { 
                                        
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.add('close_btn')
        //////////OR/////////////
        nav.classList.remove('active')
    })
}

//EMAIL JS JS CODE
function validate(){
    let email = document.querySelector('.email');
    let sendBtn = document.querySelector('.normal1');

    sendBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(email.value == ""){
            emptyerror();
        }
        else{
            sendmail(email.value);
            success();
        }
    });
}

validate();

function sendmail(email){
    emailjs.send("service_jxfymrd","template_zw7phns",{
        to_name: email,
        
        });
}

function emptyerror(){
    swal("Oh No.....", "Email field cannot be empty!", "error");
}

function success(){
    swal("Good job!", "Email sent successfully", "success");
}
