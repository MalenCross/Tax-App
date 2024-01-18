import { createBoard } from '@wixc3/react-board';
import { TotalFicaTax } from '../../../TaxInfo';

export default createBoard({
    name: 'TotalFicaTax',
    Board: () => <TotalFicaTax />,
    isSnippet: true,
});
