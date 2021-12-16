let adresseBlock = document.querySelectorAll('.adresseBlock');
let buttonAdresse = document.getElementsByClassName('btn-adresse');

let textArticle = document.getElementsByClassName('textArticle');

for(i = 0; i < buttonAdresse.length; i++ ){
    buttonAdresse[i].addEventListener('click', function() {
        let articleHide = this.previousSibling.previousSibling;
        let articleHide2 = articleHide.previousSibling.previousSibling;
        adresseBlock = this.parentNode.nextSibling.nextSibling.childNodes;
        adresseBlock[1].classList.toggle('visibilityYes');
        adresseBlock[1].classList.toggle('visibilityHide');
        articleHide.classList.toggle('visibilityHide');
        articleHide2.classList.toggle('visibilityHide');
    })
}