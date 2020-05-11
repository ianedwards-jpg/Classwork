Quick Reference
===============

Mocking a function:

      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.yellow(message);

      expect(mock).toBeCalledWith(colors.yellow, message);

      mock.mockRestore();

From activity 13

Mocking a whole module:

      jest.mock("axios");

      ...

      axios.get.mockReturnValue(
        new Promise(function(resolve) {
          resolve({ data: {} });
        })
      );

      expect(movie.search(name)).resolves.toEqual({ data: {} });

From activity 15

