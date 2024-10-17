import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoadsModule } from './loads/loads.module';

@Module({
  imports: [UsersModule, LoadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
