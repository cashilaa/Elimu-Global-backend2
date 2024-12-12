import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    try {
      // Check if user exists
      const existingUser = await this.usersService.findByEmail(createUserDto.email);
      if (existingUser) {
        throw new ConflictException('Email already registered');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      
      // Create new user
      const newUser = await this.usersService.create({
        ...createUserDto,
        password: hashedPassword,
        isApproved: createUserDto.role === 'student', // Auto-approve students
      });

      // Generate token
      const token = this.generateToken(newUser);

      return {
        success: true,
        user: {
          id: newUser._id,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          role: newUser.role,
          isApproved: newUser.isApproved,
        },
        token,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new Error('Error during registration');
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const user = await this.usersService.findByEmail(loginDto.email);
      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }

      const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid email or password');
      }

      if (user.role === 'instructor' && !user.isApproved) {
        throw new UnauthorizedException({
          message: 'Your instructor account is pending approval',
          isPending: true,
          role: user.role,
        });
      }

      const token = this.generateToken(user);

      return {
        success: true,
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          isApproved: user.isApproved,
        },
        token,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new Error('Error during login');
    }
  }

  private generateToken(user: UserDocument) {
    const payload = {
      id: user._id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isAdmin: user.role === 'admin',
      isApproved: user.isApproved,
    };

    return this.jwtService.sign(payload);
  }
}
