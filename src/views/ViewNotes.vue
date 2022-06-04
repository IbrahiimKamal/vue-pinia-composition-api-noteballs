<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="textarea"
            placeholder="Add New Note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteNote="deleteNote"
    />
  </div>
</template>

<script setup>
/* ######## imports ######## */
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

/* ######## notes ######## */
const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure doloribus cupiditate ipsum nostrum, eligendi inventore incidunt aliquam consequatur accusamus quis et deserunt praesentium expedita eaque modi fugit repudiandae eius.",
  },
  {
    id: "id2",
    content: "this is a short note",
  },
]);

// methods
const addNote = () => {
  notes.value.unshift({
    id: new Date().getTime().toString(),
    content: newNote.value,
  });
  newNote.value = "";
  newNoteRef.value.focus();
};

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
</script>
