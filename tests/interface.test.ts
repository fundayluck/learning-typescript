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

    it('should support indexable interface', function () {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Afan", "Dayu", "Laksono"]
        console.info(names)
    })

    it('should support indexable interface for non number index', function () {
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            "name": "Afan",
            "address": "indonesia"
        }
        expect(dictionary["name"]).toBe("Afan")
        expect(dictionary["address"]).toBe("indonesia")
    })
})