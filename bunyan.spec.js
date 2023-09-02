import { expect, test } from "vitest";
import bunyan from "bunyan";

const log = bunyan.createLogger({
  name: "test",
  src: true,
});

test("adds 1 + 2 to equal 3", () => {
  log.info("test");
});
