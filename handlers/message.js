const messageHandler = (message) => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    switch(message.content) {
        case '!albertono':
            albertono(message)
            break;
        default:
            break;
    }
}

const albertono = async (message) => {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./the-price-is-right-losing-horn.mp3', { volume: 0.4 });
        dispatcher.on('finish', () => {
            console.log('Finished playing!');
            dispatcher.destroy(); // end the stream
            connection.disconnect();
        });
    } else {
        message.reply('You need to join a voice channel first!');
    }
}

module.exports = { messageHandler };