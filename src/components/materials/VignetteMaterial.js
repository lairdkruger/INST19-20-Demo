import {ShaderMaterial, Color} from 'three'
import {extend} from 'react-three-fiber'

class VignetteMaterial extends ShaderMaterial {
    constructor() {
        super({
            uniforms: {
                uColor: {value: new Color('#000000')},
            },

            vertexShader: `
                varying vec2 vUv;
                void main() {
                  vec3 pos = position;
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
            }`,

            fragmentShader: `
                uniform vec3 uColor;
                varying vec2 vUv;

                void main() {
                  float distance = length(vUv - vec2(0.5, 0.5));

                  float opacity = distance;

                  gl_FragColor = vec4(uColor.rgb, opacity);
            }`,
        })
    }

    set uColor(value) {
        this.uniforms.uColor.value = value
    }

    get uColor() {
        return this.uniforms.uColor.value
    }
}

extend({VignetteMaterial})
