class App {
  constructor() {
    this.notes = [];
    this.title = '';
    this.text = '';

    this.$modal = document.querySelector('.modal');

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

      this.openModal(event);

      this.openNote(event);
    });

    this.$form.addEventListener('submit', event => {
      event.preventDefault();

      const title = this.$title.value;
      const text = this.$text.value;
      const hasNote = title || text;

      if (hasNote) {
        this.addNote({
          title,
          text
        });
      }
    });

    this.$close.addEventListener('click', event => {
      event.stopPropagation();

      this.closeForm();

      this.openNote();
    });
  }

  handleClick(event) {
    const targeted = this.$form.contains(event.target);

    const title = this.$title.value;
    const text = this.$text.value;
    const hasNote = title || text;

    if (targeted) {
      this.openForm();
    } else if (hasNote) {
      this.addNote({
        title,
        text
      });
      this.closeForm();
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

  openModal(event) {
    if (event.target.closest('.note')) {
      this.$modal.classList.toggle('open-modal');
    }
  }

  openNote(event) {
    const $note = event.target.closest('.note').children;
    if (!$note) return;
    
    const $modalTitle = $note[0].innertext;

    console.log($modalTitle);
  }

  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: 'white',
      id: this.notes.length + 1
    }
    this.notes = [...this.notes, newNote];

    this.showNotes();
  }

  showNotes() {
    this.$notes.innerHTML = this.notes.map(note => `
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
  }
}

new App();