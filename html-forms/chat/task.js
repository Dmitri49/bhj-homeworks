const showChat = document.querySelector('.chat-widget')
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

showChat.addEventListener('click', () => {
    showChat.classList.add('chat-widget_active')
})

chatInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        if (event.target.value === '') {
            return
        }

        let clientMessage = event.target.value;
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">
                    ${clientMessage}
                </div>
            </div>
        `;
        event.target.value = '';
        showBotMessage();
    }
})

let messagesBot = [
    'Добрый день. До свидания',
    'Где ваша совесть',
    'Все операторы заняты',
    'Вы ничего не купили'
]

function showBotMessage() {
    let randIndex = Math.floor(Math.random() * messagesBot.length);
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

    messages.innerHTML += `
        <div class="message ">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
                ${messagesBot[randIndex]}
            </div>
        </div>
    `;
}