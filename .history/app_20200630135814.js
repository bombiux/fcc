class App {
  constructor() {
    this.$form = document.querySelect('#form');
    this.$title = document.querySelect('#note-title');
    this.$buttons = document.querySelect('#form-buttons');

    this.eventListeners();
  }

  eventListeners() {
    document.body.addEventListener('click', event => {
      this.evenHandler(event);
    })
  }

  evenHandler(event) {
    const $event = this.$form.contains(event.target);

    if ($event) {
      this.openForm();
    } else {
      
    }
  }
}

new App();