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
    this.$title.style.display('block');
    this.$buttons.style.display('block');
  }
  
  closeForm() {
    this.$form.classList.remove('form-open');
    this.$title.style.display('none');
    this.$buttons.style.display('none');
  }
}

new App();