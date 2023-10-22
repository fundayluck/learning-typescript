describe('Array', () => {
    //Array
    it('should same with javascript', () => {

        const names: string[] = ["eko", "budi", "joko"]
        const values: number[] = [1, 2, 3]

        console.info(names)
        console.info(values)
    })

    //ReadOnly Array
    it('should support readonly array', () => {
        const hobbies: ReadonlyArray<string> = ["reading", "writing"]
        console.info(hobbies)

        // hobbies[0] = "Main Game" error result
        // just read array
    })

    //Tupple
    it('should support tupple', () => {
        const person: readonly [string, string, number] = ["Afan", "Dayu", 28]
        console.info(person)

        // person[0] = "Afan"

    })
})