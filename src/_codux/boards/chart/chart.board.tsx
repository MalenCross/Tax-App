import { createBoard } from '@wixc3/react-board';
import { Chart } from '../../../Chart';

export default createBoard({
    name: 'Chart',
    Board: () => <Chart />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 630
    }
});
