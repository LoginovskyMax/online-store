import './style.scss';
import { iComponent } from '../component';

export class Header implements iComponent {
    render(root: HTMLElement) {
        const $block1 = document.createElement('div');

        $block1.textContent = 'Header';

        root.append($block1);
    }
}