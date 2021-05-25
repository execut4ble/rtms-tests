import common from "./common";
import Page from "./page";

class Testcases extends Page {
  get inputFeatureTitle() {
    return $("input#featureTitle");
  }

  get inputScenario() {
    return $("input#testcaseScenario");
  }

  get textareaDescription() {
    return $("textarea#description");
  }

  async fillDetails() {
    await (
      await this.inputScenario
    ).setValue("A testcase can be created through testcase creation dialogue");
    await (
      await this.textareaDescription
    ).setValue(
      "This testcase has been created with the help of automation testing"
    );
    await (await common.btnSubmit).click();
  }

  get rowLastTestcase() {
    return $("tbody tr:last-of-type");
  }

  get columnLastTestcaseScenario() {
    return $('tbody tr:last-of-type td[id="scenario"]');
  }

  get btnEditLastTestcase() {
    return $("tbody tr:last-of-type button#editTestcase");
  }

  get btnRemoveLastTestcase() {
    return $("tbody tr:last-of-type button#deleteTestcase");
  }
}

export default new Testcases();
