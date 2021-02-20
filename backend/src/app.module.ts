import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports : [
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.cropf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ]
})

export class AppModule {
}