class App {
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
    const target = this.$form.contains(event.target);

    if (target) {
      this.openForm();
    } else {
      this.closeForm();
    }
  }

  openForm() {
    this.$form.classList.add('form-open');
    this.$title.style.display = 'block';
    this.$button.style.display = 'block'
  }

  closeForm() { 
    this.$form.classList.remove('form-open');
    this.$title.style.display = 'none';
    this.$button.style.display = 'none';
  }
;}

new App();