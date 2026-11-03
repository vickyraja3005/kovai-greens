import { expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class GrowingBatches extends CommonPage {


    loadingIcon: Locator
    recordsCount: Locator
    countDropDown: Locator

    constructor(page: Page) {
        super(page)
        this.loadingIcon = page.getByTestId('empty-empty-icon-div')
        this.recordsCount = page.getByTestId('records-records-span-batches')
        this.countDropDown = page.getByTestId('records-page-size-select-batches')
    }

    async loadingIconDisappear() {
        await this.loadingIcon.waitFor({ state: 'detached' })
    }

    async getRecordsCount() {
        const totalRecordsCount = await this.recordsCount.innerText()
        const count = totalRecordsCount.split(' ')[0]
        return count
    }

    async grabTotalRecordsCount() {
        await this.loadingIconDisappear()
        await this.countDropDown.selectOption('100')
        await this.loadingIconDisappear()
        const count = await this.getRecordsCount()

        for (let i = 0; i < Number(count); i++) {
            await this.page.locator(`[row-index="${i}"]`).scrollIntoViewIfNeeded()
            await this.page.locator(`[row-index="${i}"]`).waitFor({ state: 'visible' })
            await expect(this.page.locator(`[row-index="${i}"]`)).toBeVisible()
        }
    }

    async verifyTableStatus(drpdownValue: string, tableStatusValue: string) {
        await this.page.getByTestId('records-filter-status-select-batches').selectOption(drpdownValue)
        await this.loadingIconDisappear()
        const count = await this.getRecordsCount()

        for (let i = 0; i < Number(count); i++) {
            await this.page.locator(`[row-index="${i}"] [col-id="7"]`).scrollIntoViewIfNeeded()
            const grabbedValues = await this.page.locator(`[row-index="${i}"] [col-id="7"]`).getByText(tableStatusValue).innerText()
            await expect(grabbedValues).toBe(tableStatusValue)
        }
    }

}