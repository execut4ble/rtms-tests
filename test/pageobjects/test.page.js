import Page from "./page";

class Test extends Page {
  get btnStatus() {
    return $("td button.execute");
  }

  get btnWatch() {
    return $("button[id='watch']");
  }

  get btnUnwatch() {
    return $("button[id='unwatch']");
  }

  get inputExecutionTitle() {
    return $("input#executionTitle");
  }
}

export default new Test();
