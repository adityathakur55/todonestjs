// src/todo/todo.module.ts
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from 'prisma/prisma.module';
 // Import the PrismaModule

@Module({
  imports: [PrismaModule], // Add PrismaModule to imports
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
