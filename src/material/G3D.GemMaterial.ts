import ShaderMaterial from './G3D.ShaderMaterial';

import { IWebGLTexture } from '../types/webgl';

import * as vertexShaderSource from '../shaders/material-gem.vert.glsl';
import * as fragmentShaderSource from '../shaders/material-gem.frag.glsl';

class GemMaterial extends ShaderMaterial {

    refractionCubeMap = null;
    envCubeMap = null;

    constructor({ refraction, env }) {

        super({
            name: 'G3D_EXTRA_GEM',
            vertexShaderSource,
            fragmentShaderSource,
            macros: [],
            uniforms: [
                'uRefractionMap',
                'uEnvMap'
            ],
            lighting: false,
            shadow: false,
            camera: true,
            passes: [
                {
                    depthTest: false,
                    blend: false,
                    cullFace: false,
                    uniforms: [{
                        name: 'uCullBack',
                        value: [true]
                    }]
                },
                {
                    depthTest: true,
                    blend: true,
                    cullFace: true,
                    uniforms: [{
                        name: 'uCullBack',
                        value: [false]
                    }]
                }
            ]
        })

        this.refractionCubeMap = refraction;
        this.envCubeMap = env;
    }

    uniform(name: string): Float32Array | IWebGLTexture {
        switch (name) {
            case 'uRefractionMap':
                return this.getRefractionMap();
            case 'uEnvMap':
                return this.getEnvMap();
            default:
                return super.uniform(name);
        }
    }


    private getRefractionMap(): IWebGLTexture {
        return this.refractionCubeMap.glTexture;
    }

    private getEnvMap(): IWebGLTexture {
        return this.envCubeMap.glTexture;
    }

}

export default GemMaterial;