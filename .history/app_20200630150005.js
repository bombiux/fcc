class App {
  constructor() {
    this.notes = [];

    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$buttons = document.querySelector('#form-buttons');

    this.eventListeners();
  }

  eventListeners() {
    document.body.addEventListener('click', event => {
      this.evenHandler(event);
    });

    this.$form.addEventListener('submit', event => {
      event.preventDefault();

      const $formTitle = this.$title.value;
      const $formText = 
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
}

new App();