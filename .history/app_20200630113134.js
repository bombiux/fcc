class App() {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#form-title');
    this.$button = document.querySelector('#form-button');

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener('click', event => {
      this.handle
    })
  }
}

new App();