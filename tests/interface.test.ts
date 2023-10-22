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
})