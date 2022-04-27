import 'mocha';
import {expect} from 'chai';
import {AddNote} from '../src/flags/addNote';
import {ModifyNote} from '../src/flags/modifyNotes';
import {RemoveNote} from '../src/flags/removeNote';
import {ListNote} from '../src/flags/listNote';
import {ReadNote} from '../src/flags/readNote';
import {NewUser} from '../src/flags/newUser';

const myUser = new NewUser();
const myNote = new AddNote();
const modifyNote = new ModifyNote();
const removeNote = new RemoveNote();
const listNotes = new ListNote();
const readNote = new ReadNote();

describe('NewUser function tests', () => {
  it('NewUser returns value 9', () => {
    expect(myUser.addUser()).to.be.equal(9);
  });
});

describe('AddNote function tests', () => {
  it('AddNote returns value 9', () => {
    expect(myNote.addNote()).to.be.equal(9);
  });
});

describe('ModifyNote function tests', () => {
  it('ModifyNote returns value 9', () => {
    expect(modifyNote.modifyNote()).to.be.equal(9);
  });
});

describe('RemoveNote function tests', () => {
  it('RemoveNote returns value 9', () => {
    expect(removeNote.removeNote()).to.be.equal(9);
  });
});

describe('ListNote function tests', () => {
  it('ListNote returns value 9', () => {
    expect(listNotes.listNote()).to.be.equal(9);
  });
});

describe('ReadNote function tests', () => {
  it('ReadNote returns value 9', () => {
    expect(readNote.readNote()).to.be.equal(9);
  });
});
