const { By, Key, until } = require('selenium-webdriver');

function AutoHelpers(driver) {
    this.driver = driver;
    this.clickElement = function (xpath) {
        var me = this;
        return new Promise((resolve, reject) => {
            me.driver.wait(until.elementLocated(By.xpath(xpath)), 5000).then(el => {
                me.driver.wait(until.elementIsVisible(el), 5000).then(vel => {
                    return vel.click().then(() => resolve(), (err) => reject(err));
                })
            }).catch((error) => reject(error));
        });
    }


    this.sendKeys = function (xpath, keys) {
        var me = this;
        return new Promise((resolve, reject) => {
            me.driver.wait(until.elementLocated(By.xpath(xpath)), 5000).then(el => {
                me.driver.wait(until.elementIsVisible(el), 5000).then(vel => {
                    vel.sendKeys(Key.chord(Key.CONTROL, "a"));
                    return vel.sendKeys(keys).then(() => resolve(), (err) => reject(err));
                })
            }).catch((error) => reject(error));
        });
    }
    
}




module.exports = AutoHelpers;
