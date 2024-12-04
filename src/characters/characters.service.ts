import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { PrismaService } from 'src/prisma.service';
import { FindAllCharactersDto } from './dto/find-all-character.dto';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) { }

  async create(createCharacterDto: CreateCharacterDto) {
    return this.prisma.characters.create({
      data: createCharacterDto
    });
  }

  async findAll(findAllCharactersDto: FindAllCharactersDto) {
    const orderBy = findAllCharactersDto.orderBy

    return await this.prisma.characters.findMany({
      include: {
        regions: {
          select: {
            name: true,
          }
        },
      },
      where: {
        regions: {
          name: findAllCharactersDto.region
        }
      },
      take: findAllCharactersDto.limit,
      orderBy: orderBy ? (Object.keys(this.prisma.characters.fields).includes(orderBy) ? { [orderBy]: 'asc' } : undefined) : undefined
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
