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
    const evetnListener = $form.addEventListener.contains(event.target);

    if (eventListener) {
      
    }
  }
}

new App();