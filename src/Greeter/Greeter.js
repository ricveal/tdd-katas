class Greeter {
  constructor(getCurrentTimeMillisFn, logger) {
    this.getCurrentTimeMillisFn = getCurrentTimeMillisFn;
    this.logger = logger;
  }

  greet(name) {
    const theName = this._capitalize(name);

    const currentTime = new Date(this.getCurrentTimeMillisFn());
    const hourOfDay = currentTime.getHours();

    this.logger.log(`${theName} has been greeted`);
    const greeting = this._getGreeting(hourOfDay);

    return `${greeting} ${theName}!`;
  }

  _capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  _getGreeting(hourOfDay) {
    let greeting;
    if (hourOfDay >= 6 && hourOfDay < 12) {
      greeting = "Good morning";
    } else if (hourOfDay >= 12 && hourOfDay < 18) {
      greeting = "Hello";
    } else if (hourOfDay >= 18 && hourOfDay < 22) {
      greeting = "Good evening";
    } else {
      greeting = "Good night";
    }
    return greeting;
  }
}

module.exports = Greeter;
