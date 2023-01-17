// toggleButton


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})


// contact

var error = document.getElementById('text');

var form = document.getElementById('form')


form.addEventListener('submit',function(e){
    e.preventDefault() 
    var fname = document.getElementById('fname')
    var gmail = document.getElementById('gmail')
    var message = document.getElementById('message')


    if(fname.value ==""){
        error.innerHTML = "please enter your name";
        return false
    }


    if(gmail.value ==""){
            error.innerHTML = "please enter your gamil"
            return false
        }
        if(message.value ==""){
            error.innerHTML = "please enter your message at least 4 words"
            return false
        }   

            error.innerHTML = "form is submitted"; 
            error.style.color ='green'
            error.style.fontSize = '32px'
    
})
