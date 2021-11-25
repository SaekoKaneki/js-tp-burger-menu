document.documentElement.classList.add('js-enabled');
document.querySelector('.nav-button').addEventListener('click',(event)=> {
    const eMain =document.querySelector('main');
    eMain.classList.toggle('is-opened');
});
