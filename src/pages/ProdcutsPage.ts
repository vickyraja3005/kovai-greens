import { expect, Locator, Page } from "@playwright/test"
import { CommonPage } from "./CommonPage";
import { newProduct } from "../constants/constants";

export class ProdcutsPage extends CommonPage {

    newProductButton : Locator
    newProducutName : Locator
    newProductVariety : Locator
    newProductDescription : Locator
    newProductSellingPrice : Locator
    newProductLowStockAlert : Locator
    newProductStorageInstruction : Locator
    newProductPriceOne : Locator
    newProductPriceTwo : Locator
    newProdcutSave : Locator
    successMessage : Locator

    constructor(page: Page) {
        super(page)
        this.newProductButton = page.getByTestId('records-button-button-2-products')
        this.newProducutName = page.getByTestId('record-form-field-products-name')
        this.newProductVariety = page.getByTestId('record-form-field-products-variety')
        this.newProductDescription = page.getByTestId('record-form-field-products-description')
        this.newProductSellingPrice = page.getByTestId('record-form-field-products-pricePaisePerKg')
        this.newProductLowStockAlert = page.getByTestId('record-form-field-products-lowStockGrams')
        this.newProductStorageInstruction = page.getByTestId('record-form-field-products-storageInstructions')
        this.newProductPriceOne = page.getByTestId('record-form-f-price-paise-input-products-0')
        this.newProductPriceTwo = page.getByTestId('record-form-f-price-paise-input-products-1')
        this.newProdcutSave = page.getByTestId('record-form-button-button-2-products')
        this.successMessage = page.getByTestId('app-toast-div')
    }

    async addNewProdcut(){
        await this.newProductButton.click()
        await this.newProducutName.fill(await this.generateProductName())
        await this.newProductVariety.fill(await this.generateVarietyName())
        await this.newProductDescription.fill(newProduct.productDescription)    
        await this.newProductSellingPrice.fill(newProduct.productSellingPrice)
        await this.newProductLowStockAlert.fill(newProduct.productLowStockAlert)
        await this.newProductStorageInstruction.fill(newProduct.productStorageInstruction)
        await this.newProductPriceOne.fill(newProduct.productPriceOne)
        await this.newProductPriceTwo.fill(newProduct.productPriceTwo)
        await this.newProdcutSave.click()
        await expect(this.successMessage).toBeVisible()
    }
}