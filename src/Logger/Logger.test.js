const Logger = require("./Logger");

describe("Logger", () => {
  let logger;

  beforeEach(() => {
    logger = new Logger();
  });

  it("should be created", () => {
    expect(logger).toBeTruthy();
  });

  it("should log with date", () => {
    jest.spyOn(console, "log");
    logger.log("test");
    expect(console.log).toHaveBeenCalledWith(`${new Date()} - test`);
  });

  describe("Mocking Http call", () => {
    beforeEach(() => {
      logger.fetchConfig = jest.fn();
    });

    it("should not fail", () => {
      expect(logger.fetchConfig()).toBeUndefined();
    });
  });

  it("should throw an error when trying to fetch a config", () => {
    expect(() => {
      logger.fetchConfig();
    }).toThrow();
  });
});
