function countString() {
    let str = document.getElementById('count').value;

    let words = str.trim().split(/\s+/).length;
    console.log(words);

    document.getElementById('wordCount').innerText = "Word count: " + words;
}