// G3D_TEMPLATE_GENERATED
import G3D from '../src/G3D';

import main from './001-first-steps-main';
import loader from './lib/loader';
import pbrAssets from './lib/pbr-assets';
import { controlArcRotateCamera } from './lib/attach-control';
import * as dat from 'dat.gui';

const canvas = document.getElementById('canvas');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

main(G3D, {
    canvas,
    requestAnimationFrame,
    controlArcRotateCamera,
    pbrAssets,
    loader,
    onClickCanvas: function (callback) {
        canvas.addEventListener('click', callback)
    }
});




// GUI Control
const data = {
    destroy: () => {
        if (G3D.Engine.instance) {
            G3D.Engine.instance.destroy();
        }
    }
}
var gui = new dat.GUI();
Object.keys(data).forEach((key) => {
    gui.add(data, key);
});