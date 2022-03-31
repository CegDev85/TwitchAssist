console.log('hi');

let hi = 'hello'

const txtfile =  `{QTtext} {font:Tahoma}
{plain} {size:20}
{timeScale:30}
{width:160} {height:32}
{timestamps:absolute} {language:0}
[00:00:01.08]
testing.
[00:00:02.04]

[00:00:02.11]
Testing.
[00:00:02.02]

[00:00:02.02]
This is just a no deal.
[00:00:04.14]

[00:00:04.14]
Test testing for what deal?
[00:00:08.18]

[00:00:09.08]
Bananas.
[00:00:10.06]`


let badWords = ['Fuck','fuck','Shit','shit']
let testTxt = 'Hi Welcome, Shit Fuck em fuck to the channel.....(shit)'
let foundWords = []


function wordChecker(txt, wordslist) {
    for (word of wordslist) {
        if (txt.includes(word)) {
            foundWords.push(word)
    }}return 'The sentence contains the following - ' + foundWords

}

function resultChecker (l) {
    if (l.length == 0) {
        return 'No bad words found'
    }else
    return foundWords
}

console.log(wordChecker(testTxt, badWords))
console.log(resultChecker(foundWords))






