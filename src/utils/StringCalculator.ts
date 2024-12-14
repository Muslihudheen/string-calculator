export class StringCalculator {
    private callCount = 0;
  
    calculate(expression: string): number {
      this.callCount++;
  
      if (!expression) throw new Error('Input is empty.');
  
      // Check for invalid characters
      if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        throw new Error('Invalid characters in the expression.');
      }
  
      try {
        const sanitizedExpression = expression.replace(/\s+/g, '');
        const result = this.evaluate(sanitizedExpression);
        return result;
      } catch (err) {
        throw new Error('Invalid mathematical expression.');
      }
    }
  
    private evaluate(expression: string): number {
      const safeExpression = expression.replace(/[^0-9+\-*/().]/g, '');
      const result = new Function(`return ${safeExpression}`)();
      if (isNaN(result)) throw new Error('Evaluation failed.');
      return result;
    }
  
    getCalledCount(): number {
      return this.callCount;
    }
  }