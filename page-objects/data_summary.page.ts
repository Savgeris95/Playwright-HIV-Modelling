import { expect, Page } from "@playwright/test";

export class DataSummary {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private diagnosisYearContainer() {
        return this.page.locator('.card-body').filter({hasText: 'DIAGNOSIS YEAR'});
    }

    async diagnosisYearMinInput() {
        await this.page.waitForLoadState('networkidle');
        await this.diagnosisYearContainer().locator('.dash-range-slider-min-input').scrollIntoViewIfNeeded();
        return this.diagnosisYearContainer().locator('.dash-range-slider-min-input')
    }

    async diagnosisYearMaxInput() {
        await this.page.waitForLoadState('networkidle');
        await this.diagnosisYearContainer().locator('.dash-range-slider-max-input').scrollIntoViewIfNeeded();
        return this.diagnosisYearContainer().locator('.dash-range-slider-max-input')
    }

    diagnosisYearMinSlider() {
        return this.diagnosisYearContainer().getByRole('slider', { name: 'Minimum' });
    }

    diagnosisYearMaxSlider() {
        return this.diagnosisYearContainer().getByRole('slider', { name: 'Maximum' });
    }

    private notificationQuarterContainer() {
        return this.page.getByRole('heading', { level: 5, name: 'NOTIFICATION QUARTER' }).locator('..');
    }

    notificationQuarterMinSlider() {
        return this.notificationQuarterContainer().getByRole('slider', { name: 'Minimum' });
    }

    notificationQuarterMaxSlider() {
        return this.notificationQuarterContainer().getByRole('slider', { name: 'Maximum' });
    }

    notificationQuarterMinSpinbutton() {
        return this.notificationQuarterContainer().getByRole('spinbutton').first();
    }

    notificationQuarterMaxSpinbutton() {
        return this.notificationQuarterContainer().getByRole('spinbutton').last();
    }

    applyToAdjustmentsCheckboxes() {
        return this.page.getByRole('checkbox', { name: 'Apply this data selection in adjustments' });
    }

    recordsCountText() {
        return this.page.locator('p').filter({ hasText: 'Number of records in the selection' });
    }

    missingDataSummaryHeading() {
        return this.page.getByRole('heading', { name: 'Missing data summary: key variables' });
    }

    reportingDelaysSummaryHeading() {
        return this.page.getByRole('heading', { name: 'Reporting delays summary' });
    }

    missingDataGenderListbox() {
        return this.page.getByRole('listbox').first();
    }

    reportingDelaysGenderListbox() {
        return this.page.locator('#reporting-gender-radio');
    }

    async selectMissingDataGender(gender: 'All' | 'Female' | 'Male') {
        await this.missingDataGenderListbox().getByRole('option', { name: gender, exact: true }).click();
    }

    async selectReportingDelaysGender(gender: 'All' | 'Female' | 'Male') {
        await this.reportingDelaysGenderListbox().getByRole('option', { name: gender, exact: true }).click();
    }

    caseBasedSummaryText(){
        return this.page.getByText('Select case-based data for summary')
    }

}
