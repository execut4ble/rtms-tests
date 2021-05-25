import Page from "./page";

class Dashboard extends Page {
  get ctrDashboard() {
    return $("#dashboard .section-heading");
  }

  get btnDashboard() {
    return $("#nav ul li a[href='/']");
  }

  get btnFeatures() {
    return $("#nav ul li a[href='/features']");
  }

  get btnExecutions() {
    return $("#nav ul li a[href='/executions']");
  }

  get btnDefects() {
    return $("#nav ul li a[href='/defects']");
  }

  get linkLastExecution() {
    return $(
      "div.row:last-child > div:first-child > div:first-child > a:first-child"
    );
  }
}

export default new Dashboard();
