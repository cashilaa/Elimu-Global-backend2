import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Instructor, InstructorDocument } from '../schemas/instructor.schema';

@Injectable()
export class InstructorsService {
  constructor(@InjectModel(Instructor.name) private instructorModel: Model<InstructorDocument>) {}

  async create(createInstructorDto: any): Promise<Instructor> {
    const createdInstructor = new this.instructorModel(createInstructorDto);
    return createdInstructor.save();
  }

  async findAll(): Promise<Instructor[]> {
    return this.instructorModel.find().exec();
  }

  async findOne(id: string): Promise<Instructor> {
    return this.instructorModel.findById(id).exec();
  }

  async update(id: string, updateInstructorDto: any): Promise<Instructor> {
    return this.instructorModel.findByIdAndUpdate(id, updateInstructorDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Instructor> {
    return this.instructorModel.findByIdAndDelete(id).exec();
  }
}
