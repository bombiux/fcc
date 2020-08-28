class App {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$buttons = document.querySelector('#form-buttons');

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener('click', event => {
      this.handleEvent(event);
    })
  }

  handleEvent(event) {
    const eventListener = this.$form.contains(event.target);

    if (eventListener) {
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
    this.$form.classlist.remove('form-open');
    this.$title.style.display = 'none';
    this.$buttons.style.display = 'none';
  }
}

new App();