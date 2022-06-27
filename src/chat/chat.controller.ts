import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private service: ChatService) {}

    @Post('/')
    sendMessage(@Body() body) {
        this.service.sendMessage(body)
    }

    @Post('/register')
    register(@Body() body) {
        this.service.register(body)
    }
}
