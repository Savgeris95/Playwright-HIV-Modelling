import { expect,Page } from "@playwright/test";

export class Adjustments{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async applyRegrouping(){
        await this.page.locator('#apply-regrouping-btn').click();
    }

    caseBaseDataAdjustmentsText(){
        return this.page.getByText('Case-base data adjustments parameters')
    }

    multipleImputationListOptions(){
        return this.page.locator('#imputation-radio')
    }

    reportingDelaysOptions(){
        return this.page.locator('#delays-radio')
    }

    async checkImputationListOptions(option: 'None'|'Joint Modelling - JOMO'|'Chained Equations - MICE'){
        await this.multipleImputationListOptions().getByRole('option', {name: option}).check()
    }

    async checkReportingDelaysOptions(option: 'None'|'Without trend'|'With trend'){
        await this.reportingDelaysOptions().getByRole('option', {name: option}).check()
    }

    //Joing Modelling - JOMO & Chained Equations - MICE slider
    slider(){
        return this.page.locator('span[role="slider"]')
    }

    //Joing Modelling - JOMO & Chained Equations - MICE slider input value
    sliderMaxInput(){
        return this.page.locator('.dash-range-slider-max-input').inputValue()
    }

    async runAdjustments(){
        await this.page.getByRole('tab', {name: 'Run'}).click()
        await this.page.locator('#run-adjustments-button').click()
        await expect(this.page.locator('#run-log-content')).toContainText('Adjustments completed successfully!',{timeout: 220000})
    }

    async setNumberOfImputations(value: number){
        await this.page.locator('#jomo-nimp').clear()
        await this.page.locator('#jomo-nimp').fill(value.toString())
    }

}