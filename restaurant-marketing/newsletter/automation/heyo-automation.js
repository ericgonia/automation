const { Builder, By, Key, until } = require('selenium-webdriver');
const { config } = require('../config');
var AutoHelpers = require('./auto-helpers');

let driver = null;
let autoHelpers = null;

function setupContest(type) {
    const userId = config.heyo.userId;
    const password = config.heyo.password;

    driver = new Builder()
        .forBrowser('chrome')
        .build();
    autoHelpers = new AutoHelpers(driver);

    driver.get('https://www.heyo.com/app/login');

    loginToHeyo(userId, password).then(() => {
        duplicateCampaign().then(() => {
            console.log('campaign duplicated');
        }, (error) => console.log(error));
    }, (error) => console.log(error));

    //driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    //driver.quit();
}

function loginToHeyo(userId, password) {
    return new Promise((resolve, reject) => {

        driver.findElement(By.name("username")).sendKeys(userId);
        driver.findElement(By.name("password")).sendKeys(password);
        driver.findElement(By.xpath("//button[@type='submit']")).click();
        driver.wait(until.titleIs("Heyo :: Bjs Market Cafe"), 10000, "Waited for login to be successful, but the title never matched.").then(() => resolve(), (error) => reject(error));
    });
}


function duplicateCampaign() {
    return new Promise((resolve, reject) => {
        autoHelpers.clickElement("//*[@id=\"drop_heyo225_views_form_Dropdown_1\"]").then(() => {
            autoHelpers.clickElement("//*[@id=\"heyo225_views_form_Dropdown_1\"]/ul/li[1]/a").then(() => {
                resolve();
            }, (error) => reject(error));
        }, (error) => reject(error));
    });
}

exports.setupContest = setupContest;