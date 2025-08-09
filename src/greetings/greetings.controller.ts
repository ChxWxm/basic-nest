import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGreetingDto } from 'src/greetings/dto/create-greeting.dto';
import { GreetingsService } from 'src/greetings/greetings.service';

@Controller('greetings')
export class GreetingsController {
  constructor(private readonly greetingsService: GreetingsService) {}

  @Get()
  getGreeting(): { message: string } {
    return this.greetingsService.getHelloWorld();
  }

  @Post()
  createPersonalGreeting(@Body() createGreetingDto: CreateGreetingDto): {
    message: string;
  } {
    return this.greetingsService.createPersonalGreeting(createGreetingDto);
  }
}
