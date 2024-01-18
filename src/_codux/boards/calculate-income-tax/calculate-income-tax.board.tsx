import { createBoard } from '@wixc3/react-board';
import { calculateIncomeTax } from '../../../TaxInfo';

export default createBoard({
    name: 'calculateIncomeTax',
    Board: () => <calculateIncomeTax />,
    isSnippet: true,
});
