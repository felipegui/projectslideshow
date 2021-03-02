//Variáveis de ambiente...
//Para saber a quantidade de div (imagens)
let totalSliders =  document.querySelectorAll('.slider--item').length;
//Para saber que o slide atual começa em zero
let currentSlide = 0;

//Seleciona a div responsável pela div das images, para mudar dinâmicamente seus tamanhos
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSliders})`;

//Seleciona a div responsável pelos "botões", para mudar dinâmicamente seus tamanhos
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

//Funções para os "botões" back e next
function goPreview() {
    currentSlide--;

    if( currentSlide < 0 ) {
        currentSlide = totalSliders - 1;
    }

    updateMargin();
}
function goNext() {
    currentSlide++;

    if( currentSlide > (totalSliders - 1) ) {
        currentSlide = 0;
    }

    updateMargin();
}

//Função para atualizar a margem da div
function updateMargin() {
    let newMargin = ( currentSlide * document.body.clientWidth );

    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

//Passar o slide automaticamente
setInterval(goNext, 2000);