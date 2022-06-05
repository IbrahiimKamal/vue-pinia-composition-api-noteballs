import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content: "Ibrahim Kamal",
        },
        {
          id: "id2",
          content: "Pinia State management",
        },
      ],
    };
  },

  getters: {
    getNoteContent: (state) => (id) => {
      return state.notes.find((note) => note.id === id).content;
    },

    totalNotesCount: (state) => {
      return state.notes.length;
    },

    totalCharacteresCount: (state) => {
      return state.notes.reduce((acc, note) => {
        return acc + note.content.length;
      }, 0);
    },
  },

  actions: {
    addNote(newNote) {
      let uID = new Date().getTime().toString();
      const note = {
        id: uID,
        content: newNote,
      };
      this.notes.unshift(note);
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },

    updateNote(id, newContent) {
      const note = this.notes.find((note) => note.id === id);
      note.content = newContent;
    },
  },
});
