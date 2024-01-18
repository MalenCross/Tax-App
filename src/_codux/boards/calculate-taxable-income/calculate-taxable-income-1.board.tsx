import { createBoard } from '@wixc3/react-board';
import { calculateTaxableIncome } from '../../../TaxInfo';

export default createBoard({
    name: 'calculateTaxableIncome 1',
    Board: () => <calculateTaxableIncome />,
    isSnippet: true,
});
