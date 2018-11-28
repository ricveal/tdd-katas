const Greeter = require("./Greeter");

describe("Greeter", () => {
  let service;
  let date;
  let logger;

  beforeEach(() => {
    date = new Date();
    date.setHours(14);
    date.setMinutes(0);

    logger = {
      log: jest.fn()
    };

    service = new Greeter(() => date.getTime(), logger);
  });

  it("says Hello and name", () => {
    expect(service.greet("Ricardo")).toEqual("Hello Ricardo!");
    expect(service.greet("Gandalf")).toEqual("Hello Gandalf!");
  });

  it("capitalizes name", () => {
    expect(service.greet("ricardo")).toEqual("Hello Ricardo!");
  });

  it("says morning greeting", () => {
    date.setHours(6);
    expect(service.greet("gandalf")).toEqual("Good morning Gandalf!");

    date.setHours(7);
    expect(service.greet("gandalf")).toEqual("Good morning Gandalf!");

    date.setHours(11);
    date.setMinutes(59);
    expect(service.greet("gandalf")).toEqual("Good morning Gandalf!");
  });

  it("says evening greeting", () => {
    date.setHours(18);
    date.setMinutes(0);
    expect(service.greet("gandalf")).toEqual("Good evening Gandalf!");
    date.setHours(21);
    date.setMinutes(59);
    expect(service.greet("gandalf")).toEqual("Good evening Gandalf!");
  });

  it("says night greeting", () => {
    date.setHours(22);
    date.setMinutes(0);
    expect(service.greet("gandalf")).toEqual("Good night Gandalf!");
    date.setHours(1);
    expect(service.greet("gandalf")).toEqual("Good night Gandalf!");
  });

  it("logs each call", () => {
    expect(logger.log).not.toHaveBeenCalled();
    service.greet("gandalf");
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith(`Gandalf has been greeted`);
  });
});
