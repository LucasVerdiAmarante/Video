const readline = require ('readline-sync');


function start()
{
    let content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefixes = askAndReturnPrefix();


    function askAndReturnSearchTerm ()
    {

        return readline.question('Type a wikipedia search term: ')
    }

    function askAndReturnPrefix ()
    {
        const prefixes = ['Who is', "What is", "The history of"]
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Choose one option')
        const seletedPrefixText = prefixes [selectedPrefixIndex]

        return(seletedPrefixText)
    } 


    console.log(content)


}
start()