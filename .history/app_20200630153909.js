class App {
  constructor() {
    this.notes = [];

    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$text = document.querySelector('#note-text');
    this.$buttons = document.querySelector('#form-buttons');

    this.eventListeners();
  }

  eventListeners() {
    document.body.addEventListener('click', event => {
      this.evenHandler(event);
    });

    this.$form.addEventListener('submit', event => {
      event.preventDefault();

      const titl = this.$title.value;
      const $formText = this.$text.value;
      const hasNote = titl || $formText;

      if (hasNote) {
        this.addNote({titl, $formText});
      }
    })
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
    this.$form.classList.add('form-open');
    this.$title.style.display = 'block';
    this.$buttons.style.display = 'block';
  }
  
  closeForm() {
    this.$form.classList.remove('form-open');
    this.$title.style.display = 'none';
    this.$buttons.style.display = 'none';
  }

  addNote(note) {
    const newNote = {
      title: note.titl,
      text: note.$formText,
      color: 'white',
      id: this.notes.length > 0 ? this.notes.length + 1 : 1
    };

    this.notes = [...this.notes, newNote];

    console.log(this.notes);
  }
}

new App();