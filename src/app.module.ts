import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TSModule } from './modules/TS/TS.module';
import { KOPModule } from './modules/kindOfProblem/kindOfProblem.module';
import { cargoModule } from './modules/Cargo/cargo.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'test1',
    entities: [],
    synchronize: true,
    autoLoadEntities: true
  }), TSModule, KOPModule, cargoModule],
  controllers: [AppController],
  providers: [AppService],
})



export class AppModule {}
