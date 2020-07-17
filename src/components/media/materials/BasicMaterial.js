import {ShaderMaterial, Color} from 'three'
import {extend} from 'react-three-fiber'

class BasicMaterial extends ShaderMaterial {
    constructor() {
        super({
            uniforms: {
                opacity: {value: 1},
                image_texture: {value: null},
            },

            vertexShader: `
                varying vec2 vUv;

                void main() {
                    vec3 pos = position;
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
            }`,

            fragmentShader: `
                uniform sampler2D image_texture;
                uniform float opacity;

                varying vec2 vUv;
                
                void main() {
                    vec4 outColor = texture2D(image_texture, vUv);

                    gl_FragColor = vec4(outColor.rgb, opacity);
            }`,
        })
    }

    get opacity() {
        return this.uniforms.opacity.value
    }

    set opacity(value) {
        if (this.uniforms) this.uniforms.opacity.value = value
    }

    set map(value) {
        this.uniforms.image_texture.value = value
    }

    get map() {
        return this.uniforms.image_texture.value
    }
}

extend({BasicMaterial})
