import { test } from "../src/config/fixtures"
import { GrowingBatches } from "../src/pages/GrowingBatches"
import { sideBarMenuItems } from "../src/constants/constants"
import { tableStatus } from "../src/constants/constants"

// npx playwright test tests/login.spec.ts --project=chromium --headed
test.describe('Growing Batches Page Validations', async () => {

    let growingBatches: GrowingBatches

    test.beforeEach(async ({ pageWithLogin }) => {
        growingBatches = new GrowingBatches(pageWithLogin)
    })

    test('Verifying Growing Batches Page Total Record Validations', async ({ }) => {
        await growingBatches.navigateViaHomePage(sideBarMenuItems.growingBatches.locator, sideBarMenuItems.growingBatches.expectedURL)
        await growingBatches.grabTotalRecordsCount()
    })

    // npx playwright test -g "Verifying Growing Batches Page Planned Status Total Record Validations" --project=chromium --headed
    test('Verifying Growing Batches Page Planned Status Total Record Validations', async ({ }) => {
        await growingBatches.navigateViaHomePage(sideBarMenuItems.growingBatches.locator, sideBarMenuItems.growingBatches.expectedURL)
        await growingBatches.verifyTableStatus(tableStatus.planned.dropdownValue, tableStatus.planned.tableStatusValue)
    })

    test('Verifying Growing Batches Page Sown Status Total Record Validations', async ({ }) => {
        await growingBatches.navigateViaHomePage(sideBarMenuItems.growingBatches.locator, sideBarMenuItems.growingBatches.expectedURL)
        await growingBatches.verifyTableStatus(tableStatus.sown.dropdownValue, tableStatus.sown.tableStatusValue)
    })
})