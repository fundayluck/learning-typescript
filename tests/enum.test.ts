import { Customer, CustomerType } from "../src/type-alias"

describe('enum type', function () {
    it('should be enum type', function () {
        const customer: Customer = {
            id: 1,
            name: 'Afan',
            type: CustomerType.GOLD
        }

        console.info(customer)
    })
})