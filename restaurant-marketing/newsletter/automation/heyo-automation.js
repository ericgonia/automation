const { Builder, By, Key, until } = require('selenium-webdriver');

function setupContest(type) {
    let driver = new Builder()
        .forBrowser('chrome')
        .build();

    driver.get('https://www.heyo.com/app/login');
    driver.findElement(By.className("btn-primary")).click();
    //driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    //driver.quit();
}

exports.setupContest = setupContest;