import LoginPage from "../pageobjects/login.page";
import Dashboard from "../pageobjects/dashboard.page";
import dashboardPage from "../pageobjects/dashboard.page";
import featuresPage from "../pageobjects/features.page";
import testcasesPage from "../pageobjects/testcases.page";
import executionsPage from "../pageobjects/executions.page";
import testPage from "../pageobjects/test.page";
import defectsPage from "../pageobjects/defects.page";
import defectInfoPage from "../pageobjects/defectinfo.page";

const credentials = require("../constants/credentials");

describe("Login tests", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login(credentials.testUser.user, credentials.testUser.pass);
    await expect(Dashboard.ctrDashboard).toBeExisting();
    await expect(Dashboard.ctrDashboard).toHaveTextContaining("Dashboard");
  });
});

describe("Feature tests", () => {
  it("should open features page", async () => {
    await (await dashboardPage.btnFeatures).click();
    await expect(featuresPage.ctrHeading).toBeExisting();
    await expect(featuresPage.ctrHeading).toHaveTextContaining("Features");
  });

  it("should create new feature", async () => {
    await (await featuresPage.btnCreateFeature).click();
    await expect(featuresPage.modalHeading).toBeVisible();
    await expect(featuresPage.modalHeading).toHaveTextContaining(
      "Add new feature"
    );
    await featuresPage.fillDetails();
    await expect(featuresPage.modalHeading).not.toBeVisible();
    await expect(featuresPage.rowLastFeature).toBeVisible();
    await expect(featuresPage.columnLastFeatureTitle).toHaveTextContaining(
      "Automated testing"
    );
  });

  it("should enter feature details page", async () => {
    await expect(featuresPage.modalHeading).not.toBeVisible();
    await (await featuresPage.columnLastFeatureTitle).click();
    await expect(testcasesPage.ctrHeading).toBeExisting();
    await expect(testcasesPage.ctrHeading).toHaveTextContaining(
      "Automated testing"
    );
  });

  it("should edit feature", async () => {
    await (await testcasesPage.btnEditFeature).click();
    await expect(testcasesPage.modalHeading).toBeVisible();
    await (
      await testcasesPage.inputFeatureTitle
    ).setValue("Edited feature title");
    await (await testcasesPage.btnSubmit).click();
    await expect(testcasesPage.modalHeading).not.toBeVisible();
    await expect(testcasesPage.ctrHeading).toHaveTextContaining(
      "Edited feature title"
    );
  });

  it("should remove feature", async () => {
    await (await testcasesPage.btnRemoveFeature).click();
    await expect(testcasesPage.modalHeading).toBeVisible();
    await (await testcasesPage.btnSubmit).click();
    await expect(browser).toHaveUrlContaining("features");
  });
});

describe("Testcase tests", () => {
  it("should create new testcase", async () => {
    await (await featuresPage.linkLastFeature).click();
    await (await testcasesPage.btnCreateTestcase).click();
    await expect(testcasesPage.modalHeading).toBeVisible();
    await testcasesPage.fillDetails();
    await expect(testcasesPage.modalHeading).not.toBeVisible();
    await expect(testcasesPage.rowLastTestcase).toBeVisible();
    await expect(testcasesPage.columnLastTestcaseScenario).toHaveTextContaining(
      "A testcase can be created through testcase creation dialogue"
    );
  });

  it("should edit testcase", async () => {
    await (await testcasesPage.btnEditLastTestcase).click();
    await expect(testcasesPage.modalHeading).toBeVisible();
    await (
      await testcasesPage.inputScenario
    ).setValue("A testcase can be edited");
    await (await testcasesPage.btnSubmit).click();
    await expect(testcasesPage.modalHeading).not.toBeVisible();
    await expect(testcasesPage.columnLastTestcaseScenario).toHaveTextContaining(
      "A testcase can be edited"
    );
  });

  it("should remove testcase", async () => {
    await (await testcasesPage.btnRemoveLastTestcase).click();
    await expect(testcasesPage.modalHeading).toBeVisible();
    await (await testcasesPage.btnSubmit).click();
    await expect(testcasesPage.modalHeading).not.toBeVisible();
    await expect(
      testcasesPage.columnLastTestcaseScenario
    ).not.toHaveTextContaining("A testcase can be edited");
  });
});

describe("Execution tests", () => {
  it("should open executions page", async () => {
    await (await dashboardPage.btnExecutions).click();
    await expect(executionsPage.ctrHeading).toBeExisting();
    await expect(executionsPage.ctrHeading).toHaveTextContaining(
      "Test Executions"
    );
    await expect(executionsPage.filterExecutions).toBeExisting();
  });

  it("should create new execution", async () => {
    await (await dashboardPage.btnExecutions).click();
    await (await executionsPage.btnCreateExecution).click();
    await expect(testcasesPage.modalHeading).toBeVisible();
    await expect(testcasesPage.modalHeading).toHaveTextContaining(
      "Add new test execution"
    );
    await executionsPage.fillDetails();
    await expect(executionsPage.modalHeading).not.toBeVisible();
    await expect(executionsPage.linkLastExecution).toBeVisible();
    await expect(executionsPage.linkLastExecution).toHaveTextContaining(
      "Automated testing"
    );
  });

  it("should execute test", async () => {
    await (await executionsPage.linkLastExecution).click();
    await expect(testPage.btnStatus).toBeVisible();
    await expect(testPage.btnStatus).toHaveTextContaining("TBD");
    await (await testPage.btnStatus).click();
    await expect(testPage.btnStatus).toHaveTextContaining("PASSED");
    await (await testPage.btnStatus).click();
    await expect(testPage.btnStatus).toHaveTextContaining("FAILED");
    await (await testPage.btnStatus).click();
    await expect(testPage.btnStatus).toHaveTextContaining("TBD");
  });

  it("should edit execution", async () => {
    await (await testPage.btnEditExecution).click();
    await expect(testPage.modalHeading).toBeVisible();
    await (
      await testPage.inputExecutionTitle
    ).setValue("Edited execution title");
    await (await testPage.btnSubmit).click();
    await expect(testPage.modalHeading).not.toBeVisible();
    await expect(testPage.ctrHeading).toHaveTextContaining(
      "Edited execution title"
    );
  });

  it("should be able to watch execution", async () => {
    await (await testPage.btnWatch).click();
    await expect(testPage.btnUnwatch).toBeExisting();
    await (await dashboardPage.btnDashboard).click();
    await expect(dashboardPage.linkLastExecution).toBeExisting();
    await expect(dashboardPage.linkLastExecution).toHaveTextContaining(
      "Edited execution title"
    );
  });

  it("should remove execution", async () => {
    await (await dashboardPage.linkLastExecution).click();
    await (await testPage.btnRemoveExecution).click();
    await expect(testPage.modalHeading).toBeVisible();
    await (await testPage.btnSubmit).click();
    await expect(browser).toHaveUrlContaining("executions");
  });
});

describe("Defects tests", () => {
  it("should open defects page", async () => {
    await (await dashboardPage.btnDefects).click();
    await expect(defectsPage.ctrHeading).toBeExisting();
    await expect(defectsPage.ctrHeading).toHaveTextContaining("Defects");
    await expect(defectsPage.filterDefects).toBeExisting();
  });

  it("should create new defect", async () => {
    await (await defectsPage.btnCreateDefect).click();
    await expect(defectsPage.modalHeading).toBeVisible();
    await expect(defectsPage.modalHeading).toHaveTextContaining(
      "Add new defect"
    );
    await defectsPage.fillDetails();
    await expect(defectsPage.modalHeading).not.toBeVisible();
    await expect(defectsPage.linkLastDefect).toBeVisible();
    await expect(defectsPage.linkLastDefect).toHaveTextContaining(
      "Automated testing defect"
    );
  });

  it("should enter defect details page", async () => {
    await (await defectsPage.linkLastDefect).click();
    await expect(defectInfoPage.ctrHeading).toBeExisting();
    await expect(defectInfoPage.ctrHeading).toHaveTextContaining(
      "Automated testing defect"
    );
  });

  it("should be able to change defect status", async () => {
    await expect(defectInfoPage.btnStatus).toBeExisting();
    await expect(defectInfoPage.btnStatus).toHaveTextContaining("OPEN");
    await (await defectInfoPage.btnStatus).click();
    await expect(defectInfoPage.btnStatus).toHaveTextContaining("CLOSED");
  });

  it("should edit defect", async () => {
    await (await defectInfoPage.btnEditDefect).click();
    await expect(defectInfoPage.modalHeading).toBeVisible();
    await (
      await defectInfoPage.inputDefectTitle
    ).setValue("Edited defect title");
    await (await defectInfoPage.btnSubmit).click();
    await expect(defectInfoPage.modalHeading).not.toBeVisible();
    await expect(defectInfoPage.ctrHeading).toHaveTextContaining(
      "Edited defect title"
    );
  });

  it("should remove defect", async () => {
    await (await defectInfoPage.btnRemoveDefect).click();
    await expect(defectInfoPage.modalHeading).toBeVisible();
    await (await defectInfoPage.btnSubmit).click();
    await expect(browser).toHaveUrlContaining("defects");
  });
});
