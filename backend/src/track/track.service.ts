import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel : Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel : Model<CommentDocument>
  ) {
  }
  async create() {
  }

  async getAll() {
  }

  async getOne() {
  }

  async delete() {
  }
}