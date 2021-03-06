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
    const clickEvent = this.$form.contains(event.target);

    if (clickEvent) {
      this.openForm();
    } else {
      this.closeForm();
    }
  }

  openForm() {
    this.$form
    this.$title
    this.$buttons
  }
}

new App();