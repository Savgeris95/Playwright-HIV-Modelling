import { expect, Page } from "@playwright/test";

export class Modelling{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async navigateToSubPage(subPage: string){
        await this.page.locator('.nav-item',{hasText: subPage}).click()
    }

    async runMainModel(){
        await this.page.locator('#run-main-model-button').click()
        await expect(this.page.locator('#main-model-log-content')).toContainText('Main fit completed',{timeout: 15000})
    }
}