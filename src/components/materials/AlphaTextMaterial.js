import {ShaderMaterial, Color} from 'three'
import {extend} from 'react-three-fiber'

class AlphaTextMaterial extends ShaderMaterial {
    constructor() {
        super({
            uniforms: {
                opacity: {value: 1},
                color: {value: new Color('white')},
                image_texture: {value: null},
                scale: {value: 0},
                shift: {value: 0},
            },

            vertexShader: `
                uniform float scale;
                uniform float shift;
                varying vec2 vUv;
                void main() {
                  vec3 pos = position;
                  pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 5.0) * 0.125);
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
              }`,

            fragmentShader: `
                uniform sampler2D image_texture;
                uniform float shift;
                uniform float scale;
                uniform vec3 color;
                uniform float opacity;
                varying vec2 vUv;
                void main() {
                  vec4 texel = texture2D(image_texture, vUv);
                  float alpha = 1.0 - clamp((texel.r + texel.g + texel.b), 0.0, 1.0);
                  vec3 final = texel.rgb * alpha;

                  // make red channel of image transparent

                  gl_FragColor = vec4(final.r, final.g, final.b, alpha);
            }`,
        })
    }

    get color() {
        return this.uniforms.color.value
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

    set scale(value) {
        this.uniforms.scale.value = value
    }

    get scale() {
        return this.uniforms.scale.value
    }

    set shift(value) {
        this.uniforms.shift.value = value
    }

    get shift() {
        return this.uniforms.shift.value
    }
}

extend({AlphaTextMaterial})
