class App {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$buttons = document.querySelector('#form-buttons');

    this.addEventListeners();
  }

  eventsHandler() {
    $form.addEventListener('click', event => {

    })
  }
}

new App();