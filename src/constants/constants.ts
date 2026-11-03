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
    area = 'T Nagar',
    pincode = '600017',
    paymentTerms = '30',
    notes = 'New customer created for testing'
}