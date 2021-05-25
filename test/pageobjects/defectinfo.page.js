import Page from "./page";

class DefectInfo extends Page {
  get btnStatus() {
    return $("button.execute");
  }

  get inputDefectTitle() {
    return $("input#defectTitle");
  }
}

export default new DefectInfo();
