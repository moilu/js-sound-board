const sounds = ['ea-games', 'kirby-1up', 'mario-bros', 'ninjagditty', 'pacman-dies', 'pacman-waka'];

sounds.forEach(sound => {
    
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;

    btn.addEventListener('click', () => {

        stopSongs()

        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn)

})

function stopSongs() {
    
    sounds.forEach(sound => {
        
        const song = document.getElementById(sound);

        song.pause();

        song.currentTime = 0;
    })
}