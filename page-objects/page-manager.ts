import { Page } from "@playwright/test";
import { InputData } from "./inputData.page";
import { Migration } from "./migration.page";
import { Modelling } from "./modelling.page";
import { Reports } from "./reports.page";
import { CommonPage } from "./common.page";
import { DataSummary } from "./data_summary.page";
import { Adjustments } from "./adjustments.page";

export class PageManager{

    readonly page: Page
    private readonly _inputDataPage: InputData
    private readonly _migrationPage: Migration
    private readonly _modellingPage: Modelling
    private readonly _reportsPage: Reports
    private readonly _commonPage: CommonPage
    private readonly _dataSummaryPage: DataSummary
    private readonly _adjustmentsPage: Adjustments

    constructor(page: Page){
        this.page = page
        this._inputDataPage = new InputData(this.page)
        this._migrationPage = new Migration(this.page)
        this._modellingPage = new Modelling(this.page)
        this._reportsPage = new Reports(this.page)
        this._commonPage = new CommonPage(this.page)
        this._dataSummaryPage = new DataSummary(this.page)
        this._adjustmentsPage = new Adjustments(this.page)
    }

    inputDataPage(){
        return this._inputDataPage
    }

    migrationPage(){
        return this._migrationPage
    }

    modellingPage(){
        return this._modellingPage
    }

    reportsPage(){
        return this._reportsPage
    }

    commonPage(){
        return this._commonPage
    }

    dataSummaryPage(){
        return this._dataSummaryPage
    }

    adjustmentsPage(){
        return this._adjustmentsPage
    }
}