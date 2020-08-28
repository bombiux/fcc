class App {
  constructor() {
    this.notes = [];

    this.$form = document.querySelector('#form');
    this.$title = document.querySelector('#note-title');
    this.$note = document.querySelector('#note')
  }
}

new App();