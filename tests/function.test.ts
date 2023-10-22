describe('Function', function () {
    it('should support in typescript', function () {

        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello('Afan')).toBe("Hello Afan")

        function printHello(name: string): void {
            console.info(`Hello ${name}`)
        }

        printHello('Afan')
    })
})