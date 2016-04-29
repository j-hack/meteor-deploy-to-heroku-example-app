import { Template } from 'meteor/templating';
import { Notes } from '../../../api/notes/notes';

import './Notes.html';

Template.Notes.onCreated(function notesOnCreated() {

});

Template.Notes.helpers({
  notes() {
    return Notes.find();
  },
});

Template.Notes.events({
});
