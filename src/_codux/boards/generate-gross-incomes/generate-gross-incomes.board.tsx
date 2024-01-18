import { createBoard } from '@wixc3/react-board';
import { generateGrossIncomes } from '../../../ChartHelpers';

export default createBoard({
    name: 'generateGrossIncomes',
    Board: () => <generateGrossIncomes />,
    isSnippet: true,
});
