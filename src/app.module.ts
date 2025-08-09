import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingsModule } from './greetings/greetings.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'basic_nest_postgres',
      entities: [],
      synchronize: true, // Set to true only in development
      logging: true, // Enable logging for debugging
    }),
    GreetingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
