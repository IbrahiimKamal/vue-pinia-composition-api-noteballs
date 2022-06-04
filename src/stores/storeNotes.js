import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure doloribus cupiditate ipsum nostrum",
        },
        {
          id: "id2",
          content: "this is a short note",
        },
      ],
    };
  },
});
