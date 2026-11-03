import { Locator, Page, expect } from "@playwright/test"
import { CommonPage } from "./CommonPage"


export class HomePage extends CommonPage {

    // HERE WE HAVE DECLARED THE PAGE VARIABLE AS A PAGE TYPE TO STORE THE PAGE VARIABLE WHICH IS RECEIVED FROM THE HOMEPAGE.SPEC FILE
    // page: Page
    profileIcon: Locator
    topHeadingTitle : Locator
    todaysOrder : Locator
    todaysDeliveries : Locator
    monthlyReceipts : Locator
    activeGrowingBatches : Locator
    revenueOverviewTitle : Locator
    farmPrioritiesTitle : Locator
    upcommingDeliveriesTitle: Locator
    growingOnYourFarm : Locator

    // RECEIVING THE PAGE PARAMETER FROM HOMEPAGE.SPEC FILE AND STRORING IT INTO THE THIS.PAGE VARIABLE
    constructor(page: Page) {
        super(page)
        // this.page = page
        this.profileIcon = page.getByTestId('app-account-and-password-button')
        this.topHeadingTitle = page.getByTestId('page-heading-h1')
        this.todaysOrder = page.getByTestId("dashboard-span-Today's orders")
        this.todaysDeliveries = page.getByTestId("dashboard-span-Today's deliveries")
        this.monthlyReceipts = page.getByTestId("dashboard-span-Monthly receipts")
        this.activeGrowingBatches = page.getByTestId("dashboard-span-Active growing batches")
        this.revenueOverviewTitle = page.getByTestId("dashboard-revenue-overview-h2")
        this.farmPrioritiesTitle = page.getByTestId("dashboard-farm-priorities-h2")
        this.upcommingDeliveriesTitle = page.getByTestId('dashboard-upcoming-deliveries-h2')
        this.growingOnYourFarm = page.getByTestId("dashboard-growing-on-your-farm-h2")
    }

    async verifyProfileIcon() {
        // YOUR ACCOUNT MODAL POPUP VALIDATIONS
        await this.profileIcon.waitFor({ state: 'visible' })
        await expect(this.profileIcon).toBeVisible()
    }

    // VERIFY THE HOME PAGE ELEMENTS
    async verifyHomePageElements() {
        await expect(this.topHeadingTitle).toBeVisible()
        await expect(this.todaysOrder).toBeVisible()
        await expect(this.todaysDeliveries).toBeVisible()
        await expect(this.monthlyReceipts).toBeVisible()
        await expect(this.activeGrowingBatches).toBeVisible()
        await expect(this.revenueOverviewTitle).toBeVisible()
        await expect(this.farmPrioritiesTitle).toBeVisible()
        await expect(this.upcommingDeliveriesTitle).toBeVisible()
        await expect(this.growingOnYourFarm).toBeVisible()
    }

    // HOME PAGE TABLE HEADER VALIDATIONS
    async verifyHomePageTableHeader(locator: string, columns: string[]){
        await this.verifyTableHeader(locator, columns)
    }
}