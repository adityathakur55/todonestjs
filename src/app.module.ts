import { Module } from '@nestjs/common';
import { TodoModule } from 'src/todo/todo.module';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    TodoModule,
    PrismaModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
