import common from "./common";
import Page from "./page";

class Defects extends Page {
  get ctrHeading() {
    return $(".section.defects h3");
  }

  get filterDefects() {
    return $("#defectFilter");
  }

  get inputTicket() {
    return $("input#ticket");
  }

  get inputTitle() {
    return $("input#defectTitle");
  }

  get textareaDescription() {
    return $("textarea#description");
  }

  get selectFeatures() {
    return $("select#featureSelect");
  }

  get optionLastFeature() {
    return $("select#featureSelect option:last-of-type");
  }

  get selectPriority() {
    return $("select#priority");
  }

  get optionCritical() {
    return $("option[value='critical']");
  }

  async fillDetails() {
    await (await this.inputTicket).setValue("AUTO-DEFECT-001");
    await (await this.inputTitle).setValue("Automated testing defect");
    await (
      await this.textareaDescription
    ).setValue("Defect created with automated tests");
    await (await this.selectPriority).click();
    await (await this.optionCritical).click();
    await (await this.selectFeatures).click();
    await (await this.optionLastFeature).click();
    await (await common.btnSubmit).click();
  }

  get linkLastDefect() {
    return $("tbody tr:last-of-type td[id='title'] a");
  }
}

export default new Defects();
