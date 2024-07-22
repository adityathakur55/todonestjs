// src/todo/todo.service.ts
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../../prisma/prisma.service'; // Ensure you have this service

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto, userEmail: string) {
    const { task, description } = createTodoDto;
    return this.prisma.todo.create({
      data: {
        task,
        description,
        status: 'ACTIVE', // Default value
        userEmail, // Directly use userEmail
      },
    });
  }

  async findAll(userEmail: string) {
    return this.prisma.todo.findMany({
      where: { userEmail }, // Use userEmail to filter
    });
  }

  async findOne(id: string, userEmail: string) {
    return this.prisma.todo.findFirst({
      where: {
        id: parseInt(id, 10), // Ensure id is parsed to number
        userEmail, // Use userEmail to filter
      },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto, userEmail: string) {
    return this.prisma.todo.update({
      where: {
        id,
        userEmail, // Use userEmail here
      },
      data: updateTodoDto,
    });
  }

  async remove(id: number, userEmail: string) {
    return this.prisma.todo.delete({
      where: {
        id,
        userEmail, // Use userEmail here
      },
    });
  }
}
