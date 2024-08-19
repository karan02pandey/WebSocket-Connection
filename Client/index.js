const socket = new WebSocket('ws://localhost:8080');

socket.onopen = ()=>{
    console.log('connected to the server');

};

socket.onmessage = (event)=>{
    console.log('Message from server :',event.data);
};
socket.onclose = (event)=>{
    console.log('Disconneted from server :');
};
socket.onerror = (error)=>{
    console.error('websocket error:',error);
};
function sendMessage(){
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (socket.readyState==WebSocket.OPEN) {
        socket.send(message);
        console.log('message Sent:',message);
    }
else
{
    console.error('WebSocket connection is not open');
}
}
