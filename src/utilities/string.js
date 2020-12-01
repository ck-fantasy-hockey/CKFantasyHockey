function abbreviate(string) {
        const stringWords = string.split(" ")
        let abbreviation = ""
        stringWords.forEach((word) => {
            abbreviation += word[0]
        })
        abbreviation.toUpperCase()
        return abbreviation
    }

export { abbreviate }