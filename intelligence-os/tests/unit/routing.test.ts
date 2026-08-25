import { describe, expect, it } from "vitest";
import { appPath } from "@/lib/routing";

describe("OS base path", () => {
  it("prefixes internal paths exactly once", () => {
    expect(appPath("/api/tasks")).toBe("/OS/api/tasks");
    expect(appPath("/OS/overview")).toBe("/OS/overview");
  });

  it("leaves external URLs unchanged", () => {
    expect(appPath("https://example.com/path")).toBe("https://example.com/path");
  });
});
