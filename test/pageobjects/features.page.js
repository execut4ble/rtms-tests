import common from "./common";
import Page from "./page";

class Features extends Page {
  get ctrHeading() {
    return $(".section.features h3");
  }

  get inputTicket() {
    return $("input#ticket");
  }

  get inputSprint() {
    return $("input#sprint");
  }

  get inputSlug() {
    return $("input#slug");
  }

  get inputTitle() {
    return $("input#featureTitle");
  }

  get textareaDescription() {
    return $("textarea#description");
  }

  async fillDetails() {
    await (await this.inputTicket).setValue("AUTO-TEST-001");
    await (await this.inputSprint).setValue("Sprint 2");
    await (await this.inputSlug).setValue("auto-test");
    await (await this.inputTitle).setValue("Automated testing");
    await (
      await this.textareaDescription
    ).setValue(
      "This feature has been created with the help of automation testing"
    );
    await (await common.btnSubmit).click();
  }

  get rowLastFeature() {
    return $("tbody tr:last-of-type");
  }

  get columnLastFeatureTitle() {
    return $('tbody tr:last-of-type td[id="title"]');
  }

  get linkLastFeature() {
    return $('tbody tr:last-of-type td[id="title"] a');
  }
}

export default new Features();
