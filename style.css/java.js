const newLocal = <script>
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio =&gt; {audio.addEventListener('play', () => {
        pauseOtherAudios(audio);
    })};&rbrace;
    &rbrace;);

    function pauseOtherAudios(currentAudio) {audioElements.forEach(audio => {
        if (audio !== currentAudio) {
            audio.pause();
        }
    })};
    &rbrace;
</script>;
