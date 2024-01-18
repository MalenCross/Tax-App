import { createBoard } from '@wixc3/react-board';
import { calculateTaxableIncome } from '../../../TaxInfo';

export default createBoard({
    name: 'calculateTaxableIncome',
    Board: () => <calculateTaxableIncome />,
    isSnippet: true,
});
