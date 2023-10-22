describe('union', function () {
    it('should be union type', function () {

        let sample: number | string | boolean = "afan"

        sample = 100;
        // sample = false;

        console.info(sample)
    })

    it('should support typeof operator', function () {
        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toLocaleUpperCase()
            } else if (typeof value === "number") {
                return value + 2
            } else {
                return !value
            }
        }
        expect(process('Afan')).toBe("AFAN")
        expect(process(50)).toBe(52)
        expect(process(true)).toBe(false)
    })
})

