import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { GetPostBoxId } from 'src/decorator/get-postbox.decorator';
import { PostBoxService } from 'src/postboxs/postbox.service';
import { PostboxsModule } from 'src/postboxs/postboxs.module';
import { LetterController } from './letter.controller';
import { Letter } from './letter.entity';
import { LetterService } from './letter.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([Letter]),
        PostboxsModule,      
      ],
    controllers: [LetterController],
    providers: [LetterService]
})
export class LettersModule {}
