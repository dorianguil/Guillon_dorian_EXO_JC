let pseudo=document.getElementById('pseudo');
let passwordInput = document.getElementById('mdp');
let mail=document.getElementById('mail');
let color=document.getElementById('color');
let bouton=document.querySelector("#bouton");
let s=document.getElementById('seletion')

let verifier =true

function nono(e) {
    let passwordError = document.getElementById('mdpError');
    let pseudoError = document.getElementById('pseudoError');
    let mailError = document.getElementById('mailError')
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    
    if (pseudo.value.length>1 ) {
        console.log(pseudo.value);
        pseudo.style.background="white"
        verifier =true
        pseudoError.textContent =" "
    }else{
        verifier =false
        console.log("nom invalide");
        pseudo.style.background="red"
        pseudoError.textContent ="le pseudo doit contenire deux lettres au minimum"
    }
    if (passwordRegex.test(passwordInput.value) && passwordInput.value.length >=8) {
        mdp.style.background="white"
        passwordError.textContent =" "
        verifier =true
    }else{
        mdp.style.background="red"
        passwordError.textContent ="le mot de passe doit contenire au maoins une majuscule, une minuscule et caratére spécialle, et faire au moins 8 caratères de long "
        verifier =false
    }
    if (mail.value.length>3 &&mail.value !=null) {
        console.log(mail.value);
        verifier =true;
        console.log("mail est invalide");
        mail.style.background="white";
        mailError.textContent =" ";
    }else{
        verifier =false
        console.log("mail est invalide");
        mail.style.background="red";
        mailError.textContent ="le mail est invalide ";
    }
    if (verifier ==false){
        e.preventDefault();
        console.log("formulaire invalide");
    }else{
        e.preventDefault();
    }
    console.log(pseudo);
    console.log(mdp);
    console.log(mail.value);
    console.log(color.value);
    console.log(s.options[s.selectedIndex].text);
}
bouton.addEventListener('click', nono);