class Logger {
  constructor() {
    this._config = {
      preffix: () => new Date()
    };
  }

  fetchConfig() {
    throw new Error("Http Error - 418 Im a Teapot ☕");
  }

  log(msg) {
    const preffix = this._config.preffix;
    console.log(`${preffix()} - ${msg}`);
  }
}

module.exports = Logger;
