import { expect,Page } from "@playwright/test";

export class Reports{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async createReport(){
       await this.page.locator('#create-report-button').click()
       await expect(this.page.locator('#introduction')).toBeAttached({timeout: 10000})
       await expect(this.page.locator('#before-and-after-adjustments')).toBeAttached({timeout: 10000})
    }
    
}