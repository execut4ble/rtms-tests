import Page from "./page";

class Common extends Page {
  get ctrHeading() {
    return $(".container h3");
  }

  get btnCreate() {
    return $(".container button[class='crud']");
  }

  get btnRemove() {
    return $("button#delete");
  }

  get modalHeading() {
    return $("#transition-modal-title");
  }

  get btnSubmit() {
    return $("input[type='submit']");
  }

  get btnEdit() {
    return $("button#edit");
  }
}

export default new Common();
