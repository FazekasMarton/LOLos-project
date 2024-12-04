import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RegionsService {
  constructor(private prisma: PrismaService) {}

  async create(createRegionDto: CreateRegionDto) {
    return await this.prisma.regions.create({
      data: createRegionDto
    })
  }

  async findAll() {
    return await this.prisma.regions.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.regions.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    return await this.prisma.regions.update({
      where: {
        id: id
      },
      data: updateRegionDto
    })
  }

  async remove(id: number) {
    return await this.prisma.regions.delete({
      where: {
        id: id
      }
    });
  }
}