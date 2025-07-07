function countVowels() {
    const text = document.getElementById("textInput").value;
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    document.getElementById("result").textContent = `Total vowels: ${count}`;
}
