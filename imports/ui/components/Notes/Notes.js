import { Template } from 'meteor/templating';
import { Notes } from '../../../api/notes/notes';

import './Notes.html';

Template.Notes.onCreated(function notesOnCreated() {

});

Template.Notes.helpers({
  notes() {
    return Notes.find({}, {sort: {createdAt: -1}});
  },
});

Template.Notes.events({
  'click .js-add-note': function(ev) {
    Notes.insert({content: `This is a sample note ${Notes.find().count() + 1}`});
  }
});
