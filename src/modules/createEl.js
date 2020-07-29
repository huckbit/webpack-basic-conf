export default (tag = "p") => {
  return (msg) => {
    let newEl = document.createElement(tag);
    newEl.append(msg);
    document.body.append(newEl);
  };
};
