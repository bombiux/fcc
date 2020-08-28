class App {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$buttons = document.querySelector('#form-buttons');

    this.addEventListeners();
  }

  addEventListeners() {
    $form.addEventListener('click', event => {
      this.hadleEvent(event);
    })
  }
}

new App();