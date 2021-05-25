import common from "./common";
import Page from "./page";

class Executions extends Page {
  get ctrHeading() {
    return $(".section.executions h3");
  }

  get filterExecutions() {
    return $("#executionsFilter");
  }

  get inputSlug() {
    return $("input#slug");
  }

  get inputTitle() {
    return $("input#executionTitle");
  }

  get selectFeatures() {
    return $("select#featureSelect");
  }

  get optionLastFeature() {
    return $("select#featureSelect option:last-of-type");
  }

  async fillDetails() {
    await (await this.inputSlug).setValue("auto-test");
    await (await this.inputTitle).setValue("Automated testing");
    await (await this.selectFeatures).click();
    await (await this.optionLastFeature).click();
    await (await common.btnSubmit).click();
  }

  get linkLastExecution() {
    return $(".row:last-of-type .one-half div a");
  }
}

export default new Executions();
