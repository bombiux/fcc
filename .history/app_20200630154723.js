class App {
  constructor() {
    this.notes = [];

    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$text = document.querySelector('#note-text');
    this.$buttons = document.querySelector('#form-buttons');
    
    this.$notes = document.querySelector('#notes');
    this.$placeholder = document.querySelector('#placeholder');

    this.eventListeners();
  }

  eventListeners() {
    document.body.addEventListener('click', event => {
      this.evenHandler(event);
    });

    this.$form.addEventListener('submit', event => {
      event.preventDefault();

      const title = this.$title.value;
      const text = this.$text.value;
      const hasNote = title || text;

      if (hasNote) {
        this.addNote({title, text});
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
    this.$title.value = '';
    this.$text.value = '';
  }

  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: 'white',
      id: this.notes.length > 0 ? this.notes.length + 1 : 1
    };

    this.notes = [...this.notes, newNote];

    this.showNotes();
  }

  showNotes() {
    const toDisplay = this.notes.length > 0;

    this.$placeholder.style.display = toDisplay ? 'none' : 'flex';

    this.$notes.innerHTML = this.notes.map
  }
}

new App();