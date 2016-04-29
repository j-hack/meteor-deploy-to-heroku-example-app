import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

class ExMongoCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.createdAt = doc.createdAt || new Date();
    const result = super.insert(doc, callback);
    return result;
  }
}

export const Notes = new ExMongoCollection('notes');

if (Meteor.isDevelopment) {
  global.Notes = Notes;
}
