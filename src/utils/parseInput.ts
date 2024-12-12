export function parseInput(input: string): number {
    // Check for custom delimiter
    const delimiterPattern = /^\/\/\[(.*?)\]\n/;
    const multiDelimiterPattern = /^\/\/\[(.*?)\](?:\n)?/;

    let delimiter = ',';
    let numbers = input;

    // If custom delimiter exists
    if (input.startsWith('//')) {
        const delimiterMatch = input.match(delimiterPattern);
        if (delimiterMatch) {
            delimiter = delimiterMatch[1];
            numbers = input.replace(delimiterMatch[0], '');
        } else {
            const multiDelimiterMatch = input.match(multiDelimiterPattern);
            if (multiDelimiterMatch) {
                const delimiters = multiDelimiterMatch[1].split('][');
                delimiters.forEach((delim) => {
                    numbers = numbers.replace(new RegExp(`\\${delim}`, 'g'), ',');
                });
                numbers = numbers.replace(multiDelimiterMatch[0], '');
            }
        }
    }

    // Split the numbers by commas or newlines
    const numArray = numbers.split(/[,\n]+/).map((num) => parseInt(num.trim(), 10));

    // Check for negative numbers
    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    // Ignore numbers greater than 1000
    const filteredNumbers = numArray.filter((num) => num <= 1000);

    // Return the sum of the numbers
    return filteredNumbers.reduce((acc, num) => acc + num, 0);
}
