const music = document.querySelector('botao-music')

function exibirLinkMusica() {
    const linkDaMusica = 'https://open.spotify.com/intl-pt/track/4UXuAPLZvfbAKjRoTXfxQc?si=c7311a999883486e'
    window.open(linkDaMusica, '_blank')
}
console.log(exibirLinkMusica)