const voiceHandler = (oldState, newState) => {
    if(!oldState.channel && newState.channel) {
        switch(newState.id) {
            case '210628496949510145':
                beastlymonkey(newState.channel)
                break;
            case '177970754602795008':
                atm(newState.channel)
                break;
            default:
                break;
        }
    }
}

const beastlymonkey = async (channel) => {
    const connection = await channel.join();
    const dispatcher = connection.play('./ultra-gay-seal_1.mp3', { volume: 0.4 });
    dispatcher.on('finish', () => {
        console.log('Finished playing!');
        dispatcher.destroy(); // end the stream
        connection.disconnect();
    });
}

const atm = async(channel) => {
    const connection = await channel.join();
    const dispatcher = connection.play('./taco-bell-bong-sfx.mp3', { volume: 0.4 });
    dispatcher.on('finish', () => {
        console.log('Finished playing!');
        dispatcher.destroy(); // end the stream
        connection.disconnect();
    });
}

module.exports = { voiceHandler }