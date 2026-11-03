import { test } from "../src/config/fixtures"
import { sideBarMenuItems } from "../src/constants/constants"
import { CustomerPage } from "../src/pages/CustomerPage"

// npx playwright test tests/login.spec.ts --project=chromium --headed
test.describe('Customer Page Validations', async () => {

    let customerPage: CustomerPage

    test.beforeEach(async ({ pageWithLogin }) => {
        customerPage = new CustomerPage(pageWithLogin)
    })
    
    test('Verifying Add New Customer Flow', async ({ }) => {
        await customerPage.navigateViaHomePage(sideBarMenuItems.customers.locator, sideBarMenuItems.customers.expectedURL)
        await customerPage.addNewCustomer()
    })
})