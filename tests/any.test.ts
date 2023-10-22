describe('Any', function () {
    it('should support in typescript', function () {

        const person: any = {
            id: 1,
            name: "Afan Dayu Laksono",
            age: 28
        }

        person.age = 10
        person.address = "indonesia"

        console.info(person)
    })
})