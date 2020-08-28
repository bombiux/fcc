class App {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$buttons = document.querySelector('#form-buttons');

    this.eventListeners();
  }

  eventListeners() {
    document.body.addEventListener('click',event => {
      this.handleClick(event);
    })
  }

  handleClick(event) {
    const clickEvent = $form.contains(event.target);

    if (clickEvent) {
      open
    }
  }
}

new App();