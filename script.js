let audios = [
    {caminho:'Natiruts - Mergulhei nos Seus Olhos', legenda:'Mergulhei Nos Seus Olhos'},
    {caminho:'Onze：20 - Pra Você [Clipe Oficial].m', legenda:'Pra Você'},
    {caminho:'Aliança - Tribalistas (lyric video).mp3', legenda:'Aliança'},
    {caminho:'Outra Vida.mp3', legenda:'Outra Vida'},
    {caminho:'Presente De Um Beija-Flor.mp3', legenda:'Presente de um Beija-flor'},
    {caminho:'Charlie Brown Jr - Céu Azul (Clip', legenda:'Céu Azul'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'titanic.mp3', legenda:'Titanic'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
