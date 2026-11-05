import { HomePage } from '../src/pages/homePage'
import { upcommingDeliveriesTableHeader } from "../src/constants/constants"
import { test } from "../src/config/fixtures"

// npx playwright test e2e --project=chromium --headed
test.describe('Home Page Validations', async () => {

    let homePage: HomePage

    test.beforeEach(async ({ pageWithLogin }) => {
        homePage = new HomePage(pageWithLogin)
    })

    test('Header Profile Icon Validation', async ({ }) => {
        await homePage.verifyProfileIcon()
    })

    test('Home Page Elements Validation', async ({ }) => {
        await homePage.verifyHomePageElements()
    })

    test('Home Page Table Header Validation', async ({ }) => {
        await homePage.verifyHomePageTableHeader('thead tr th', upcommingDeliveriesTableHeader)
    })
})