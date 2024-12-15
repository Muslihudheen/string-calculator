export class StringCalculator {
  private callCount = 0;
  private static DEFAULT_DELIMITER = /,|\n/;

  public calculate(input: string): number {
    this.callCount++;

    if (!input) return 0;

    const { numbers, delimiters } = this.parseInput(input);

    const negatives = numbers.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return numbers.filter((n) => n <= 1000).reduce((acc, curr) => acc + curr, 0);
  }

  private parseInput(input: string): { numbers: number[]; delimiters: RegExp } {
    let delimiters = StringCalculator.DEFAULT_DELIMITER;
    let numbersString = input;

    if (input.startsWith('//')) {
      const delimiterEndIndex = input.indexOf('\n');
      const customDelimiterSection = input.substring(2, delimiterEndIndex);

      delimiters = new RegExp(
        customDelimiterSection
          .split('][')
          .map((delim) => delim.replace(/\[|\]/g, ''))
          .map((delim) => delim.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
          .join('|')
      );

      numbersString = input.substring(delimiterEndIndex + 1);
    }

    const numbers = numbersString
      .split(delimiters)
      .map((num) => parseInt(num, 10))
      .filter((num) => !isNaN(num));

    return { numbers, delimiters };
  }

  public getCalledCount(): number {
    return this.callCount;
  }
}