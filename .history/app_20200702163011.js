class App {
  constructor() {
    this.localObject;

    this.notes = [];
    this.title = '';
    this.text = '';
    this.id = '';

    this.$modal = document.querySelector('.modal');
    this.$modalTitle = document.querySelector('.modal-title');
    this.$modalText = document.querySelector('.modal-text');
    this.$modalClose = document.querySelector('.modal-close-button');

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

      this.openNote(event);
      
      this.openModal(event);
    });

    this.$modalClose.addEventListener('click', () => {
      this.closeModal();
    })

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

        this.closeForm();
      }
    });

    this.$close.addEventListener('click', event => {
      event.stopPropagation();

      this.closeForm();
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
      this.$modalTitle.value = this.title;
      this.$modalText.value = this.text;
    }
  }
  
  closeModal() {
    this.updateNote();
    this.$modal.classList.toggle('open-modal');
  }

  openNote(event) {
    const $selectedNote = event.target.closest('.note');
    if (!$selectedNote) return;
    const [$noteTitle, $noteText] = $selectedNote.children;
    this.title = $noteTitle.innerText;
    this.text = $noteText.innerText;
    this.id = $selectedNote.dataset.id;
  }

  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: 'white',
      id: this.notes.length + 1
    }
    
    this.notes = [...this.notes, newNote];

    localStorage.setItem('notes', JSON.stringify(this.notes));

    this.showNotes();
  }

  updateNote() {
    const title = this.$modalTitle.value;
    const text = this.$modalText.value;
    this.notes = this.notes.map(note => 
      note.id === Number(this.id) ? {...note, title, text} : note
    );

    localStorage.setItem('notes', JSON.stringify(this.notes));
    
    this.showNotes();
  }

  showNotes() {
    console.log(local)

    this.$notes.innerHTML = this.notes.map(note => `
    <div style="background: ${note.color};" class="note" data-id="${note.id}">
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