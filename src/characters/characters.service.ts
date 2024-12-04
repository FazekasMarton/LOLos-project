import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  async create(createCharacterDto: CreateCharacterDto) {
    return this.prisma.characters.create({
      data: createCharacterDto
    });
  }

  async findAll() {
    return await this.prisma.characters.findMany({
      include: {
        regions: {
          select: {
            name: true,
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.characters.findMany({
      include: {
        regions: {
          select: {
            name: true,
          }
        }
      },
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return await this.prisma.characters.update({
      where: {
        id: id
      },
      data: updateCharacterDto
    });
  }

  async remove(id: number) {
    return await this.prisma.characters.delete({
      where: {
        id: id
      }
    });
  }
}
