export const parseInput = (input: string): number => {
    if (!input) return 0;

    let delimiterRegex = /,|\n/;
    let processedInput = input;

    if (input.startsWith('//')) {
        const delimiterEndIndex = input.indexOf('\n');
        const delimiters = input.substring(2, delimiterEndIndex)
            .match(/\[.*?\]/g)
            ?.map((delim) => delim.slice(1, -1)) || [input.substring(2, delimiterEndIndex)];
        delimiterRegex = new RegExp(delimiters.join('|'));
        processedInput = input.substring(delimiterEndIndex + 1);
    }

    const numbers = processedInput.split(delimiterRegex).map(Number);
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return numbers.filter((num) => num <= 1000).reduce((acc, num) => acc + num, 0);
};
