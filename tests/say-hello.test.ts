import { sayHello } from "../src/say-hello";

describe('sayHello', function(): void {
    it('should return hello afan', function (): void {
        expect(sayHello('Afan')).toBe('Hello Afan')
    })
})