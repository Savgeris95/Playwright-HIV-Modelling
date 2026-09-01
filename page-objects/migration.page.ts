import { expect, Page } from "@playwright/test";

export class Migration{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }
    
    runMigrationButton(){
        return this.page.locator('#run-migration-button')
    }

    async runMigration(){
        await this.runMigrationButton().click()
        await expect(this.page.locator('#migr-log-content')).toContainText(/Migration completed/i, { timeout: 60000 })
    }
}
