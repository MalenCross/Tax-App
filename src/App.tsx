import "./App.css";
import { Chart } from "./Chart";
import logo from "./images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { calculateTotalTax, TaxOutput } from "./TaxInfo";
import { useState } from "react";
import Classnames from 'classnames';

export type FilingStatus = "single" | "married";

function App() {
    const [grossIncome, setGrossIncome] = useState(0);
    const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
    const [credits, setCredits] = useState(0);
    const [retirementContribution, setRetirementContribution] = useState(0);
    const [taxResult, setTaxResult] = useState<TaxOutput | null>(null);

    const handleFilingStatusChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value;
        // Here we can add a TypeScript type assertion to ensure the value is of the correct type
        setFilingStatus(value as FilingStatus);
    };

    const handleCreditsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Similarly, convert the input value to a number for the credits.
        setCredits(Number(event.target.value));
    };
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const totalTax = calculateTotalTax(
            Number(grossIncome),
            filingStatus,
            Number(credits),
            retirementContribution
        );
        setTaxResult(totalTax);
    };

    return (
        <>
            <div className="root">
                <h1 style={{ fontSize: "60px", margin: "10px" }}>Taxation Is Theft</h1>
                <h2 style={{ fontSize: "35px", margin: "20px" }}> W2 Tax Calculator</h2>

                <div className="flex">
                    <Form onSubmit={handleSubmit}>
                        <div className={Classnames('flexbox-item', 'flexbox-item-1', 'shadow')}>
                            <h2
                                style={{
                                    fontSize: '39px',
                                    margin: "8px",
                                    marginBottom: "25px", border: '0px dashed black'
                                }}
                            >
                                Input
                            </h2>
                            <h3 className="margin">Net Income</h3>
                            <input
                                type="number"
                                value={grossIncome}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setGrossIncome(Number(event.target.value));
                                }}
                                className="shadow"
                            ></input>

                            <h3 className="margin"> Retirement Contributions</h3>
                            <input
                                type="number"
                                value={retirementContribution}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const retirementContributionFromInput = event.target.value;
                                    // console.log('setting retirement contribution to ', retirementContributionFromInput)
                                    setRetirementContribution(
                                        Number(retirementContributionFromInput)
                                    );
                                }}
                                className="shadow"
                            ></input>

                            <h3 className="margin"> Marital Status</h3>
                            <Form.Select
                                className={Classnames('form-select', 'form', 'formStyle', 'shadow')}
                                aria-label="Default select example"
                                value={filingStatus}
                                onChange={handleFilingStatusChange}
                            >
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </Form.Select>

                            <h3>Credits</h3>
                            <input
                                type="number"
                                value={credits}
                                onChange={handleCreditsChange}
                                className="shadow"
                            ></input>

                            <button
                                style={{ margin: "30px" }}
                                type="submit"
                                className={Classnames('btn', 'btn-primary', 'shadow')}
                            >
                                Calculate Taxes
                            </button>
                        </div>
                    </Form>

                    <Chart   filingStatus ={filingStatus}></Chart>
                </div>

                <div
                    className="resultBox">


                    <img className="logo" src={logo} width={200} height={200} />

                    {taxResult && (
                        <div className="result">
                            <p>Taxable Income: {Math.round(taxResult.taxableIncome)}</p>
                            <p>Income Tax: {Math.round(taxResult.incomeTax)}</p>
                            <p>FICA Tax: {Math.round(taxResult.ficaTax)}</p>
                            <p>Total Tax: {Math.round(taxResult.totalTax)}</p>
                            <p>Tax After Credits: {Math.round(taxResult.taxAfterCredits)}</p>
                            <p>Take Home Pay: {Math.round(taxResult.takeHomePay)}</p>
                        </div>
                    )}


                    <img className="logo" src={logo} width={200} height={200} />

                    <img src="https://as2.ftcdn.net/v2/jpg/04/49/06/87/1000_F_449068769_S6KKOywJ6lzKDOl96KolpLQ2JiAxFrFA.jpg" alt="" />

                </div>
            </div>
        </>
    );
}

export default App;
