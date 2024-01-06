import { Module } from '@nestjs/common';
import { SuperbaseService } from './superbase.service';
import { SuperbaseController } from './superbase.controller';

@Module({
  providers: [SuperbaseService,],
  controllers: [SuperbaseController]
})
export class SuperbaseModule {}
