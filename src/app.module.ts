import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TSModule } from './modules/TS/TS.module';
import { KOPModule } from './modules/kindOfProblem/kindOfProblem.module';
import { cargoModule } from './modules/Cargo/cargo.module';
import { KindOfCargo } from './modules/kindOfCargo/entity/kindOfCargo.entity';
import { KindOfProblem } from './modules/kindOfProblem/entity/kindOfProblem';
import { Problems } from './modules/Problems/entity/problems.entity';



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
  }), TSModule, KOPModule, cargoModule, KindOfCargo, KindOfProblem, Problems],
  controllers: [AppController],
  providers: [AppService],
})



export class AppModule {}
