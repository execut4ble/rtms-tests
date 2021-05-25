import Page from "./page";

class Test extends Page {
  get ctrHeading() {
    return $(".container h3");
  }

  get btnStatus() {
    return $("td button.execute");
  }

  get btnWatch() {
    return $("button[id='watch']");
  }

  get btnUnwatch() {
    return $("button[id='unwatch']");
  }

  get btnRemoveExecution() {
    return $("button#delete");
  }

  get modalHeading() {
    return $("#transition-modal-title");
  }

  get btnSubmit() {
    return $("input[type='submit']");
  }

  get btnEditExecution() {
    return $("button#edit");
  }

  get inputExecutionTitle() {
    return $("input#executionTitle");
  }
}

export default new Test();
