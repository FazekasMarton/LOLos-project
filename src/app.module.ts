import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { RegionsModule } from './regions/regions.module';

@Module({
  imports: [CharactersModule, RegionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
