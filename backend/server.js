const io=require('socket.io')(4000, {
    cors:{
        origin:[
            'http://localhost:3000'
        ]
    }
})



io.on('connection', (socket)=>{
    // console.log(socket.id)

    socket.on("send-message", (message)=>{
        console.log(message)
        socket.broadcast.emit('receieve-message',message)
    })
})