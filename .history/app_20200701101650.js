class App {
  constructor() {
    this.notes = [];

    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$text = document.querySelector('#note-text');
    this.$buttons = document.querySelector('#form-buttons');
    this.$submit = document.querySelector('#submit-button');
    this.$close = document.querySelector('#form-close-button');

    this.$notes = document.querySelector('#notes');

    this.$placeholder = document.querySelector('#placeholder');

    this.eventListeners();
  }

  eventListeners() {
    document.body.addEventListener('click', event => {
      this.handleClick(event);
    })

    this.$submit.addEventListener('submit', event => {
      event.preventDefault();

      const title = $title.value;
      const text = $text.value;
      const hasNote = title || text;
      
      if (hasNote) {
        this.addNote({title, text});
      }
    })
  }

  handleClick(event) {
    const targeted = this.$form.contains(event.target);

    if (targeted) {
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
      title: note.title,
      text: note.text,
      
    }
  }
}

new App();