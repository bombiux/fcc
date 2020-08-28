class App {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$buttons = document.querySelector('#form-buttons');

    this.addEventListeners();
  }

  addEventListeners() {
    $form.addEventListener('click', event => {
      this.handleEvent(event);
    })
  }

  handleEvent(event) {
    const eventnListener = this.$form.addEventListener.contains(event.target);

    if (eventListener) {
      this.openForm();
    } else {
      this.closeForm();
    }
  }

  openForm() {
    this.$form.classlist.add('form-open');
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