class App() {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#form-title');
    this.$button = document.querySelector('#form-button');

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener('click', event => {
      this.handleClick(event);
    })
  }

  handleClick(event) {
    const target = $form.contains(event.target);

    if (target) {
      this.openForm
    }
  }
}

new App();