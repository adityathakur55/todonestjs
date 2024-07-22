import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseService } from '../database/database.service'; // Import DatabaseService
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; // Ensure JwtStrategy is imported if used

@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey', // Replace with your actual secret key
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, DatabaseService, JwtStrategy], // Include DatabaseService
  exports: [AuthService],
})
export class AuthModule {}
