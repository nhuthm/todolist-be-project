import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const taskSchema = new Schema({
  author: {
      type: String,
      required: true
  },
  completedTask: {
      type: Boolean,
      default: false
  },
  taskName: {
      type: String,
      required: true
  },
  taskDescription: {
      type: String
  },
  createdAt: {
      type: Date,
      default: Date.now
  },
  updatedAt: {
      type: Date,
      default: Date.now
  }
})