//  HOME PAGE UPCOMMING TABLE HEADERS
export const upcommingDeliveriesTableHeader = ['Customer', 'Order', 'Delivery', 'Status']

// APPLICATION SIDE BAR MENU ITMES LOCATORS AND PAGE URL'S
export const sideBarMenuItems = {
    overview: {
        locator: 'app-span-2-dashboard-OVERVIEW',
        expectedURL: 'https://kovai-greens.vercel.app/'
    },
    cropPlanning: {
        locator: 'app-span-2-planning-OVERVIEW',
        expectedURL: 'https://kovai-greens.vercel.app/planning'
    },
    growingBatches: {
        locator: 'app-span-2-batches-FARM OPERATIONS',
        expectedURL: 'https://kovai-greens.vercel.app/batches'
    },
    harvests: {
        locator: 'app-span-2-harvests-FARM OPERATIONS',
        expectedURL: 'https://kovai-greens.vercel.app/harvests'
    },
    customers: {
        locator: 'app-span-2-customers-BUSINESS',
        expectedURL: 'https://kovai-greens.vercel.app/customers'
    },
    products: {
        locator: 'app-span-2-products-FARM OPERATIONS',
        expectedURL: 'https://kovai-greens.vercel.app/products'
    }
}

// GROWINGBATCHES PAGE TABLE STATUS DROPDOWN VALUES
export const tableStatus = {
    planned: {
        dropdownValue: 'PLANNED',
        tableStatusValue: 'Planned'
    },
    sown: {
        dropdownValue: 'SOWN',
        tableStatusValue: 'Sown'
    },
    germintaing: {
        dropdownValue: 'GERMINATING',
        tableStatusValue: 'Germinating'
    },
    growing: {
        dropdownValue: 'GROWING',
        tableStatusValue: 'Growing'
    },
    readytoharvest: {
        dropdownValue: 'READY_TO_HARVEST',
        tableStatusValue: 'Ready To Harvest'
    },
    failed: {
        dropdownValue: 'FAILED',
        tableStatusValue: 'Failed'
    }
}

// CUSTOMER PAGE - ADD NEW CUSTOMER TEST DATA
export const enum newCustomerData {
    customerName = 'ABC Technologies',
    customerType = 'Hotel',
    contactPerson = 'Ramesh Kumar',
    phone = '9876543210',
    email = 'ramesh.kumar@example.com',
    billingAddress = '12 Anna Salai',
    deliveryAddress = '25 T Nagar Main Road',
    area = 'Allampatti',
    pincode = '600017',
    paymentTerms = '30',
    notes = 'New customer created for testing'
}

// PRODUCT PAGE NEW PRODUCT TEST DATA
export const enum newProduct {
    productDescription = 'Testing Description',
    productSellingPrice = '100',
    productLowStockAlert = '5',
    productStorageInstruction = 'Testing instructions',
    productPriceOne='99',
    productPriceTwo='199'
}