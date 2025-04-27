import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite: formatCurrency', ()=>{
    it('Converts cents in to dollars', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with zero', ()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds upto the nearest cent',  ()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});