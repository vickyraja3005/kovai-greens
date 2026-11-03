import { expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { newCustomerData } from "../constants/constants";

export class CustomerPage extends CommonPage {

    newCustomerButton: Locator
    customerName: Locator
    customerType: Locator
    contactPerson: Locator
    customerPhone: Locator
    customerEmail: Locator
    customerBillingAddress: Locator
    customerDeliveryAddress: Locator
    customerArea: Locator
    customerPincode: Locator
    customerPaymentTerms: Locator
    customerNotes: Locator
    submitButton: Locator
    successMessage: Locator

    constructor(page: Page) {
        super(page)
        this.newCustomerButton = page.getByTestId('records-button-button-2-customers')
        this.customerName = page.getByTestId('record-form-field-customers-name')
        this.customerType = page.getByTestId('record-form-field-customers-type')
        this.contactPerson = page.getByTestId('record-form-field-customers-contact')
        this.customerPhone = page.getByTestId('record-form-field-customers-phone')
        this.customerEmail = page.getByTestId('record-form-field-customers-email')
        this.customerBillingAddress = page.getByTestId('record-form-field-customers-billingAddress')
        this.customerDeliveryAddress = page.getByTestId('record-form-field-customers-deliveryAddress')
        this.customerArea = page.getByTestId('record-form-field-customers-area')
        this.customerPincode = page.getByTestId('record-form-field-customers-pincode')
        this.customerPaymentTerms = page.getByTestId('record-form-field-customers-paymentTermsDays')
        this.customerNotes = page.getByTestId('record-form-field-customers-notes')
        this.submitButton = page.getByTestId('record-form-button-button-2-customers')
        this.successMessage = page.getByTestId('app-toast-div')
    }

    // ADD NEW CUSTOMER
    async addNewCustomer() {
        await this.newCustomerButton.click()
        await this.customerName.fill(newCustomerData.customerName)
        await this.customerType.selectOption(newCustomerData.customerType)
        await this.contactPerson.fill(newCustomerData.contactPerson)
        await this.customerPhone.fill(newCustomerData.phone)
        await this.customerEmail.fill(newCustomerData.email)
        await this.customerBillingAddress.fill(newCustomerData.billingAddress)
        await this.customerDeliveryAddress.fill(newCustomerData.deliveryAddress)
        await this.customerArea.fill(newCustomerData.area)
        await this.customerPincode.fill(newCustomerData.pincode)
        await this.customerPaymentTerms.fill(newCustomerData.paymentTerms)
        await this.customerNotes.fill(newCustomerData.notes)
        await this.submitButton.click()
        await expect(this.successMessage).toBeVisible()
    }
}