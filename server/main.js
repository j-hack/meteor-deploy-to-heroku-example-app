import { Meteor } from 'meteor/meteor';
import { Notes } from '../imports/api/notes/notes';

Meteor.startup(() => {
  // code to run on server at startup
  if (Notes.find().count() === 0) {
    const data = [
      { content: 'This is a test note 1' },
      { content: 'This is a test note 2' },
      { content: 'This is a test note 3' },
      { content: 'This is a test note 4' },
      { content: 'This is a test note 5' },
      { content: 'This is a test note 6' },
    ];
    data.forEach((note) => Notes.insert(note));
  }
});
