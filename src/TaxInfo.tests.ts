import { MarriedTaxBrackets, SingleTaxBrackets, TotalFicaTax, calculateIncomeTax, calculateTaxableIncome, calculateTotalTax, } from "./TaxInfo";


test('get the taxable income', () => {
    expect(calculateTaxableIncome(9345,12950)).toEqual(0);
    expect(calculateTaxableIncome(30000,12950)).toEqual(17050);
    expect(calculateTaxableIncome(75000,12950)).toEqual(62050);
    expect(calculateTaxableIncome(150000,12950)).toEqual(137050);
    expect(calculateTaxableIncome(200000,12950)).toEqual(187050);
    expect(calculateTaxableIncome(500000,25900)).toEqual(474100);
    expect(calculateTaxableIncome(750000,12950)).toEqual(737050);
    expect(calculateTaxableIncome(1000000,25900)).toEqual(974100);
    expect(calculateTaxableIncome(1500000,12950)).toEqual(1487050);
    expect(calculateTaxableIncome(10000000,25900)).toEqual(9974100);
});

test('get the income tax', () => {
    expect(calculateIncomeTax(9345,MarriedTaxBrackets)).toEqual(934.5);
    expect(calculateIncomeTax(30000,SingleTaxBrackets)).toEqual(3394.38);
    expect(calculateIncomeTax(150000,SingleTaxBrackets)).toEqual(29834.92);
    expect(calculateIncomeTax(200000,MarriedTaxBrackets)).toEqual(34799.42);
    expect(calculateIncomeTax(500000,SingleTaxBrackets)).toEqual(148751.75);
    expect(calculateIncomeTax(750000,MarriedTaxBrackets)).toEqual(175956.7);
    expect(calculateIncomeTax(1000000,SingleTaxBrackets)).toEqual(332953.38);
    expect(calculateIncomeTax(1500000,MarriedTaxBrackets)).toEqual(453456.7);
    expect(calculateIncomeTax(10000000,SingleTaxBrackets)).toEqual(3662953.38);
});


test('for total fica tax get taxes owed', () => {
    expect(TotalFicaTax(9345)).toEqual(714.89);
    expect(TotalFicaTax(30000)).toEqual(2295);
    expect(TotalFicaTax(75000)).toEqual(5737.5);
    expect(TotalFicaTax(150000)).toEqual(11475);
    expect(TotalFicaTax(200000)).toEqual(12832.4);
    expect(TotalFicaTax(500000)).toEqual(17182.4);
    expect(TotalFicaTax(750000)).toEqual(20807.4);
    expect(TotalFicaTax(1000000)).toEqual(24432.4);
    expect(TotalFicaTax(1500000)).toEqual(31682.4);
    expect(TotalFicaTax(10000000)).toEqual(154932.4);
});

test('get all tax info', () => {
    expect(calculateTotalTax(73000,'single',0,0)).toEqual({"ficaTax": 4593.82, "incomeTax": 8827.66, "takeHomePay": 59578.520000000004, "taxAfterCredits": 13421.48, "taxableIncome": 60050, "totalTax": 13421.48});
    expect(calculateTotalTax(73000, 'married', 0,0)).toEqual({"ficaTax": 3603.15, "incomeTax": 5211.88, "takeHomePay": 64184.97, "taxAfterCredits": 8815.03, "taxableIncome": 47100, "totalTax": 8815.03});
    expect(calculateTotalTax(120000, 'married',2000,0)).toEqual({"ficaTax": 7198.65, "incomeTax": 11316.660000000002, "takeHomePay": 103484.69, "taxAfterCredits": 16515.31, "taxableIncome": 94100, "totalTax": 18515.31});
    expect(calculateTotalTax(150000,'married',0,0)).toEqual({"ficaTax": 9493.65, "incomeTax": 17916.66, "takeHomePay": 122589.69, "taxAfterCredits": 27410.309999999998, "taxableIncome": 124100, "totalTax": 27410.309999999998});
    expect(calculateTotalTax(200000,'single',4000,0)).toEqual( {"ficaTax": 12644.63, "incomeTax": 40086.6, "takeHomePay": 151268.77000000002, "taxAfterCredits": 48731.229999999996, "taxableIncome": 187050, "totalTax": 52731.229999999996});
    expect(calculateTotalTax(500000,'married',2000,0)).toEqual({"ficaTax": 16806.85, "incomeTax": 78267.06999999999, "takeHomePay": 406926.08, "taxAfterCredits": 93073.91999999998, "taxableIncome": 474100, "totalTax": 95073.91999999998});
    expect(calculateTotalTax(750000,'single',0,0)).toEqual({"ficaTax": 20619.63, "incomeTax": 235661.88, "takeHomePay": 493718.49, "taxAfterCredits": 256281.51, "taxableIncome": 737050, "totalTax": 256281.51});
    expect(calculateTotalTax(1000000,'married',6000,0)).toEqual({"ficaTax": 24056.85, "incomeTax": 258873.7, "takeHomePay": 723069.45, "taxAfterCredits": 276930.55, "taxableIncome": 974100, "totalTax": 282930.55});
    expect(calculateTotalTax(1500000,'single',8000,0)).toEqual( {"ficaTax": 31494.63, "incomeTax": 513161.88, "takeHomePay": 963343.49, "taxAfterCredits": 536656.51, "taxableIncome": 1487050, "totalTax": 544656.51});
    expect(calculateTotalTax(10000000,'married',8000,0)).toEqual({"ficaTax": 154556.85, "incomeTax": 2571433.38, "takeHomePay": 7282009.77, "taxAfterCredits": 2717990.23, "taxableIncome": 9974100, "totalTax": 2725990.23});
});




