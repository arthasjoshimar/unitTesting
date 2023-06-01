import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';

describe('Calculator services', () => {
  
  it('should add two numbers', () => {
    let loggerService = new LoggerService();
    spyOn(loggerService, 'log');
    // spyOn(loggerService, 'log').and.callThrough();
    const calculator = new CalculatorService(loggerService);
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let loggerService = new LoggerService();
    spyOn(loggerService, 'log');
    let calculator = new CalculatorService(loggerService);
    let result = calculator.subtract(2,2);
    expect(result).toBe(0);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
});
