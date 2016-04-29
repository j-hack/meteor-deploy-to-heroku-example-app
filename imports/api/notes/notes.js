import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Notes = new Mongo.Collection('notes');

if (Meteor.isDevelopment) {
  global.Notes = Notes;
}
