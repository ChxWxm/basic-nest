import { Injectable } from '@nestjs/common';
import { CreateGreetingDto } from 'src/greetings/dto/create-greeting.dto';

@Injectable()
export class GreetingsService {
  getHelloWorld(): { message: string } {
    return { message: 'Hello, World!' };
  }

  createPersonalGreeting(createGreetingDto: CreateGreetingDto): {
    message: string;
  } {
    const { name, age } = createGreetingDto;
    return { message: `Hello ${name}, welcome! You are ${age} years old.` };
  }
}
