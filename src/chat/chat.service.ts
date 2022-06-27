import { Inject, Injectable } from '@nestjs/common';
// import { io, Socket } from "socket.io-client";
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private socket: io.Socket;
    constructor() {
      this.socket = io("http://localhost:3000", { transports: ['websocket', 'polling'] });
      // console.log(this.socket.connected)
      this.handler()
    }

    handler() {
      this.socket.on('exchanges', (message) => {
        // ...
        console.log(`client 1 received from server:: ${JSON.stringify(message)}`)
      });
    }
    
    register(body) {
      console.log('inside...send...message...')
      console.log(this.socket.id)
      this.socket.emit('participants', body, (data) => console.log(`received data back from server ${data}`));
    }

    sendMessage(body) {
      console.log('inside...send...message...')
      console.log(this.socket.id)
      this.socket.emit('exchanges', body, (data) => console.log(`received data back from server ${data}`));
    }
}
