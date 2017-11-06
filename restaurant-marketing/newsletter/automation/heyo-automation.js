const { Builder, By, Key, until } = require('selenium-webdriver');
const { config } = require('../config');

let driver = null;

function setupContest(type) {
    const userId = config.heyo.userId;
    const password = config.heyo.password;

    driver = new Builder()
    .forBrowser('chrome')
    .build();
    driver.get('https://www.heyo.com/app/login');

    loginToHeyo(userId, password).then(() => {
        console.log("login successful");
    });
    //driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    //driver.quit();
}

function loginToHeyo(userId, password) {
    return new Promise((resolve, reject) => {

        driver.findElement(By.name("username")).sendKeys(userId);
        driver.findElement(By.name("password")).sendKeys(password);
        driver.findElement(By.xpath("//button[@type='submit']")).click();
        driver.wait(until.titleIs("Heyo :: Bjs Market Cafe"), 10000, "Waited for login to be successful, but never found the Search Campaigns input.").then(()=>resolve());
    });
}

exports.setupContest = setupContest;