import { Seller } from "../src/seller"

describe('interface', function () {
    it('should support in typescript', function () {

        const seller: Seller = {
            id: 1,
            name: 'Afan',
            nib: '123123123',
            npwp: '12341234123'
        }

        seller.name = 'Toko Afan'
        // seller.nib = '12312312312' #ERROR READONLY

        console.info(seller)

    })

    it('should support function interface', function () {

        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(2, 2)).toBe(4)
    })
})