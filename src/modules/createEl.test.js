import createEl from "./createEl";

test("Add new title element to the dom", () => {
  const title = createEl("h1");
  title("Hello world");
  const h1 = document.querySelector("h1");
  expect(h1.innerHTML).toEqual("Hello world");
});

test("Add new paragraph element to the dom using default", () => {
  const paragraph = createEl();
  paragraph("Hello world");
  const p = document.querySelector("p");
  expect(p.innerHTML).toEqual("Hello world");
});
