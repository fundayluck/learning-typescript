import { Category, Product } from "../src/type-alias"

describe('type alias', function () {
    it('should support typscript', function () {

        const category: Category = {
            id: '1',
            name: 'handphone'
        }

        const product: Product = {
            id: '1',
            name: 'samsung',
            price: 2000000,
            category: category
        }

        console.info(category)
        console.info(product)

    })
})