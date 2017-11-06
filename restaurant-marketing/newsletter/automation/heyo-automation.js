const { Builder, By, Key, until } = require('selenium-webdriver');
const { config } = require('../config');

function setupContest(type) {
    let driver = new Builder()
        .forBrowser('chrome')
        .build();

    driver.get('https://www.heyo.com/app/login');

    const userId = config.heyo.userId;
    const password = config.heyo.password;

    driver.findElement(By.name("username")).sendKeys(userId);
    driver.findElement(By.name("password")).sendKeys(password);
    driver.findElement(By.xpath("//button[@type='submit']")).click();
    //driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    //driver.quit();
}

exports.setupContest = setupContest;