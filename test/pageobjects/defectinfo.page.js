import Page from "./page";

class DefectInfo extends Page {
  get ctrHeading() {
    return $(".container h3");
  }

  get btnStatus() {
    return $("button.execute");
  }

  get btnRemoveDefect() {
    return $("button#delete");
  }

  get modalHeading() {
    return $("#transition-modal-title");
  }

  get btnSubmit() {
    return $("input[type='submit']");
  }

  get btnEditDefect() {
    return $("button#edit");
  }

  get inputDefectTitle() {
    return $("input#defectTitle");
  }
}

export default new DefectInfo();
