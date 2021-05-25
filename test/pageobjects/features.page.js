import Page from "./page";

class Features extends Page {
  get ctrHeading() {
    return $(".section.features h3");
  }

  get btnCreateFeature() {
    return $(".row button[class='crud']");
  }

  get modalHeading() {
    return $("#transition-modal-title");
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

  get btnSubmit() {
    return $("input[type='submit']");
  }

  async fillDetails() {
    await (await this.inputTicket).setValue("AUTO-TEST-001");
    await (await this.inputSprint).setValue("Sprint 2");
    await (await this.inputSlug).setValue("auto-test");
    await (await this.inputTitle).setValue("Automated testing");
    await (await this.textareaDescription).setValue(
      "This feature has been created with the help of automation testing"
    );
    await (await this.btnSubmit).click();
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
