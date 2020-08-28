class App {
  constructor() {
    this.notes = [];

    this.$form = document.querySelector("#form");
    this.$title = document.querySelector("#note-title");
    this.$text = document.querySelector("#note-text");
    this.$buttons = document.querySelector("#form-buttons");
    this.$close = document.querySelector("#close")

    this.$notes = document.querySelector("#notes");
    this.$placeholder = document.querySelector("#placeholder");

    this.eventListeners();
  }

  eventListeners() {
    document.body.addEventListener("click", (event) => {
      this.evenHandler(event);
    });

    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = this.$title.value;
      const text = this.$text.value;
      const hasNote = title || text;

      if (hasNote) {
        this.addNote({
          title,
          text,
        });
      }
    });
  }

  evenHandler(event) {
    const $event = this.$form.contains(event.target);

    if ($event) {
      this.openForm();
    } else {
      this.closeForm();
    }
  }

  openForm() {
    this.$form.classList.add("form-open");
    this.$title.style.display = "block";
    this.$buttons.style.display = "block";
  }

  closeForm() {
    this.$form.classList.remove("form-open");
    this.$title.style.display = "none";
    this.$buttons.style.display = "none";
  }

  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: "white",
      id: this.notes.length > 0 ? this.notes.length + 1 : 1,
    };

    this.notes = [...this.notes, newNote];

    this.showNotes();
    this.$title.value = "";
    this.$text.value = "";
    this.closeForm();
  }

  showNotes() {
    const toDisplay = this.notes.length > 0;

    this.$placeholder.style.display = toDisplay ? "none" : "flex";

    this.$notes.innerHTML = this.notes
      .map((note) => `
      <div style="background: ${note.color};" class="note">
        <div class="${note.title && "note-title"}">${note.title}</div>
        <div class="note-text">${note.text}</div>
        <div class="toolbar-container">
          <div class="toolbar">
            <img class="toolbar-color" src="https://icon.now.sh/palette">
            <img class="toolbar-delete" src="https://icon.now.sh/delete">
          </div>
        </div>
      </div>
      `)
      .join("");
  }
}

new App();