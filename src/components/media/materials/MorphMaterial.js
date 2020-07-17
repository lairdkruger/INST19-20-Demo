import {ShaderMaterial} from 'three'
import {extend} from 'react-three-fiber'

class MorphMaterial extends ShaderMaterial {
    constructor() {
        super({
            uniforms: {
                opacity: {value: 1},
                uTexture: {value: null},
                uPreviousTexture: {value: null},
                uMixValue: {value: 0},
            },

            vertexShader: `
                uniform vec2 uOffset;

                varying vec2 vUv;

                vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
                    float M_PI = 3.1415926535897932384626433832795;
                    position.x = position.x + (sin(uv.y * M_PI) * offset.x);
                    position.y = position.y + (sin(uv.x * M_PI) * offset.y);
                    return position;
                }

                void main() {
                    vUv =  uv;
                    vec3 newPosition = position;
                    newPosition = deformationCurve(position,uv,uOffset);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
                }`,

            fragmentShader: `
                uniform sampler2D uTexture;
                uniform sampler2D uPreviousTexture;
                uniform float opacity;
                uniform float uMixValue;

                varying vec2 vUv;

                float strength = 0.5;

                //https://github.com/gl-transitions/gl-transitions/blob/master/transitions/morph.glsl
                vec3 transition(vec2 uv) {
                    float inv = 1.0 - uMixValue;

                    vec4 fromColor = texture2D(uPreviousTexture, uv);
                    vec4 toColor = texture2D(uTexture, uv);

                    vec2 fromOffset = (((fromColor.rg + fromColor.b) * 0.5) * 2.0 - 1.0);
                    vec2 toOffset = (((toColor.rg + toColor.b) * 0.5) * 2.0 - 1.0);
                    vec2 offset = mix(fromOffset, toOffset, 0.5) * strength;
                    
                    return mix(texture2D(uPreviousTexture, uv + offset * uMixValue).rgb, texture2D(uTexture, uv - offset * inv).rgb, uMixValue);
                }
        
                void main() {
                    //float mixValue = pow(uMixValue, 4.0);
                    vec3 trans = transition(vUv);
                    //vec3 outColor = mix(transition(vUv), vec3(mixValue, 0.0, 0.0), mixValue); 

                    gl_FragColor = vec4(trans.rgb, opacity);
                }`,
        })
    }

    get opacity() {
        return this.uniforms.opacity.value
    }

    set opacity(value) {
        if (this.uniforms) this.uniforms.opacity.value = value
    }

    set uTexture(value) {
        this.uniforms.uTexture.value = value
    }

    get uTexture() {
        return this.uniforms.uTexture.value
    }

    set uPreviousTexture(value) {
        this.uniforms.uPreviousTexture.value = value
    }

    get uPreviousTexture() {
        return this.uniforms.uPreviousTexture.value
    }

    set uMixValue(value) {
        this.uniforms.uMixValue.value = value
    }

    get uMixValue() {
        return this.uniforms.uMixValue.value
    }
}

extend({MorphMaterial})
