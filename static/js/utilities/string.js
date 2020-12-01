function abbreviate(string) {
    var stringWords = string.split(" ");
    var abbreviation = "";
    stringWords.forEach(function (word) {
        abbreviation += word[0];
    });
    abbreviation.toUpperCase();
    return abbreviation;
}

export { abbreviate };