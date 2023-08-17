import { Module } from '@nestjs/common';
import { AppController } from './aluno.controller';
import { AppService } from './aluno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './entity/Aluno';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ifpe2023',
      database: 'banco-api',
      entities: [Aluno],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Aluno]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
