
const IS_WEB = !('process' in window)

const ASSETS = {
    "matcap": {
        "Anomaly (4N0M4LY)": "Anomaly (4N0M4LY).png",
        "Aspect (45P3C7)": "Aspect (45P3C7).png",
        "Blade (BL4D3)": "Blade (BL4D3).png",
        "Boggle (B066L3)": "Boggle (B066L3).png",
        "DFDFCA_4D2D07_6B5224_857145-256px": "DFDFCA_4D2D07_6B5224_857145-256px.png",
        "DFDFD6_58544E_81766A_989288-256px": "DFDFD6_58544E_81766A_989288-256px.png",
        "Essence (3553NC3)": "Essence (3553NC3).png",
        "Fluke (FLUK3)": "Fluke (FLUK3).png",
        "Ghoul (6H0UL)": "Ghoul (6H0UL).png",
        "Grace (6R4C3)": "Grace (6R4C3).png",
        "Knot (KN07)": "Knot (KN07).png",
        "Myth (MY7H)": "Myth (MY7H).png",
        "Nightmare (N16H7M4R3)": "Nightmare (N16H7M4R3).png",
        "Oddity (0DD17Y)": "Oddity (0DD17Y).png",
        "Quake (QU4K3)": "Quake (QU4K3).png",
        "Riddle (R1DDL3)": "Riddle (R1DDL3).png",
        "Rogue (R06U3)": "Rogue (R06U3).png",
        "Sage (5463)": "Sage (5463).png",
        "Serenity (53R3N17Y)": "Serenity (53R3N17Y).png",
        "Serpent (53RP3N7)": "Serpent (53RP3N7).png",
        "Trixy (7R1XY)": "Trixy (7R1XY).png",
        "Vacuum (V4CUUM)": "Vacuum (V4CUUM).png"
    },
    "samples": {
        "ClearcoatTest.glb": "ClearcoatTest.glb",
        "DamagedHelmet.gltf": "DamagedHelmet.gltf",
        "IridescentDishWithOlives.glb": "IridescentDishWithOlives.glb",
        "mesh_party.fbx": "mesh_party.fbx",
        "mesh_party.glb": "mesh_party.glb",
        "mesh_party.obj": "mesh_party.obj",
        "Parrot.glb": "Parrot.glb",
        "Soldier.glb": "Soldier.glb",
        "Teapot.glb": "Teapot.glb",
        "transparency.glb": "transparency.glb"
    },
    "hdr": {
        "atelier": "atelier.hdr",
        "autumn": "autumn.hdr",
        "clouds": "clouds.hdr",
        "flick": "flick.hdr",
        "gdansk": "gdansk.hdr",
        "lenong": "lenong.hdr",
        "panorama": "panorama.hdr",
        "patio": "patio.hdr",
        "quarry": "quarry.hdr",
        "tomoco": "tomoco.hdr"
    },
    "texts": {
        "about_md": "# preview_3d\nFeature-rich meshes preview for Windows, Macos and Linux.\n## Authors\n    - Code: __@sanyabeast__\n    - Icon: __@nataleesha__\n## Credids\n    - Mr. Doob & THREE.js team\n    - Electron team\n    - Tweakpane team\n__Kyiv, Ukraine, 2023__",
        "dither_alphatest_glsl": "\r\n\r\n#ifdef USE_ALPHATEST\r\nfloat ad_pi = 3.14159;\r\nfloat ad_dsq2 = 2.;\r\nfloat ad_half_pi = ad_pi / 2.;\r\nfloat ad_orig_alpha = diffuseColor.a;\r\nfloat alpha_dithered = 1.;\r\nfloat alpha_inverted = 1. - ad_orig_alpha;\r\n// float ad_x_fract = fract(gl_FragCoord.x / (alpha_inverted) + 1.);\r\n// float ad_y_fract = fract(gl_FragCoord.y / (alpha_inverted) + 1.);\r\nfloat ad_x_cosine_a = sin((gl_FragCoord.x) * ad_pi);\r\nfloat ad_y_cosine_a = cos((gl_FragCoord.y + gl_FragCoord.x) * ad_pi);\r\nfloat ad_x_cosine_b = sin((gl_FragCoord.x) * ad_half_pi);\r\nfloat ad_y_cosine_b = cos((gl_FragCoord.y + gl_FragCoord.x) * ad_half_pi);\r\nfloat ad_pat_a = (ad_x_cosine_a + ad_y_cosine_a);\r\nfloat ad_pat_b = (ad_x_cosine_b + ad_y_cosine_b);\r\n\r\n\t// alpha_dithered = pow(\r\n\t// \t(ad_x_fract + ad_y_fract) * pow(ad_orig_alpha, mix(0.2, 1.5, ad_orig_alpha)) + pow(ad_orig_alpha, 1.5),\r\n\t// \t2.\r\n\t// );\r\n\r\nalpha_dithered = mix(((ad_pat_a + ad_pat_b) / ad_dsq2) * (ad_orig_alpha) * ad_dsq2, ((ad_pat_a + ad_pat_b) / ad_dsq2) + (ad_orig_alpha) * ad_dsq2, ad_orig_alpha);\r\n\r\nif(alpha_dithered < alphaTest) discard;\r\n#endif\r\n",
        "dither_alphatest2_glsl": "\r\n#ifdef USE_ALPHATEST\r\n    vec4 ditherTex = texture2D(screenDoorTexture, gl_FragCoord.xy / 6.);\r\n    float ditherAlpha = clamp(ditherTex.r * (diffuseColor.a * 2.), 0., 1.);\r\n\r\n    if(ditherAlpha < 0.5) {\r\n        discard;\r\n    }\r\n#endif\r\n\r\n",
        "info_md": "\n# mouse and trackpad\n\n## rotate viewport\n- [lmb]\n\n## pan viewport\n- [rmb]\n\n## zoom viewport\n- [mmb]\n- [mousewheel]\n\n## alter environment rot.\n- [alt]+[lmb] \n\n## alter sun rotation\n- [alt]+[rmb] \n\n## alter sun height\n- [alt]+[mmb] (horizontally) \n\n## alter env. influence\n- [alt]+[mmb] (vertically) \n\n# keyboard\n\n## viewport navigation\n- [w]\n- [a]\n- [s]\n- [d] \n\n## frame scene\n- [f] \n- [space] \n- [numpad .] \n- [\\]\n\n## open file\n- [enter]\n- [o]\n- \n## reload scene\n- [r]\n- [ctrl]+[r] (hard reload)\n\n## new window\n- [ctrl]+[n]\n\n## close window\n- [ctrl]+[w]\n\n## collapse gui\n- [escape]\n- [backspace]\n",
        "pcss_glsl": "#define LIGHT_WORLD_SIZE 0.005\n#define LIGHT_FRUSTUM_WIDTH 3.75\n#define LIGHT_SIZE_UV (LIGHT_WORLD_SIZE / LIGHT_FRUSTUM_WIDTH)\n#define NEAR_PLANE 9.5\n\n#define NUM_SAMPLES 17\n#define NUM_RINGS 11\n#define BLOCKER_SEARCH_NUM_SAMPLES NUM_SAMPLES\n\nvec2 poissonDisk[NUM_SAMPLES];\n\nvoid initPoissonSamples(const in vec2 randomSeed) {\n    float ANGLE_STEP = PI2 * float(NUM_RINGS) / float(NUM_SAMPLES);\n    float INV_NUM_SAMPLES = 1.0 / float(NUM_SAMPLES);\n\n\t\t\t\t\t// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/\n    float angle = rand(randomSeed) * PI2;\n    float radius = INV_NUM_SAMPLES;\n    float radiusStep = radius;\n\n    for(int i = 0; i < NUM_SAMPLES; i++) {\n        poissonDisk[i] = vec2(cos(angle), sin(angle)) * pow(radius, 0.75);\n        radius += radiusStep;\n        angle += ANGLE_STEP;\n    }\n}\n\nfloat penumbraSize(const in float zReceiver, const in float zBlocker) { // Parallel plane estimation\n    return (zReceiver - zBlocker) / zBlocker;\n}\n\nfloat findBlocker(sampler2D shadowMap, const in vec2 uv, const in float zReceiver) {\n\t\t\t\t\t// This uses similar triangles to compute what\n\t\t\t\t\t// area of the shadow map we should search\n    float searchRadius = LIGHT_SIZE_UV * (zReceiver - NEAR_PLANE) / zReceiver;\n    float blockerDepthSum = 0.0;\n    int numBlockers = 0;\n\n    for(int i = 0; i < BLOCKER_SEARCH_NUM_SAMPLES; i++) {\n        float shadowMapDepth = unpackRGBAToDepth(texture2D(shadowMap, uv + poissonDisk[i] * searchRadius));\n        if(shadowMapDepth < zReceiver) {\n            blockerDepthSum += shadowMapDepth;\n            numBlockers++;\n        }\n    }\n\n    if(numBlockers == 0)\n        return -1.0;\n\n    return blockerDepthSum / float(numBlockers);\n}\n\nfloat PCF_Filter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius) {\n    float sum = 0.0;\n    float depth;\n\t\t\t\t\t#pragma unroll_loop_start\n    for(int i = 0; i < 17; i++) {\n        depth = unpackRGBAToDepth(texture2D(shadowMap, uv + poissonDisk[i] * filterRadius));\n        if(zReceiver <= depth)\n            sum += 1.0;\n    }\n\t\t\t\t\t#pragma unroll_loop_end\n\t\t\t\t\t#pragma unroll_loop_start\n    for(int i = 0; i < 17; i++) {\n        depth = unpackRGBAToDepth(texture2D(shadowMap, uv + -poissonDisk[i].yx * filterRadius));\n        if(zReceiver <= depth)\n            sum += 1.0;\n    }\n\t\t\t\t\t#pragma unroll_loop_end\n    return sum / (2.0 * float(17));\n}\n\nfloat PCSS(sampler2D shadowMap, vec4 coords) {\n    vec2 uv = coords.xy;\n    float zReceiver = coords.z; // Assumed to be eye-space z in this code\n\n    initPoissonSamples(uv);\n\t\t\t\t\t// STEP 1: blocker search\n    float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver);\n\n\t\t\t\t\t//There are no occluders so early out (this saves filtering)\n    if(avgBlockerDepth == -1.0)\n        return 1.0;\n\n\t\t\t\t\t// STEP 2: penumbra size\n    float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);\n    float filterRadius = penumbraRatio * LIGHT_SIZE_UV * NEAR_PLANE / zReceiver;\n\n\t\t\t\t\t// STEP 3: filtering\n\t\t\t\t\t//return avgBlockerDepth;\n    return PCF_Filter(shadowMap, uv, zReceiver, filterRadius);\n}",
        "pcss_get_shadow_glsl": "return PCSS( shadowMap, shadowCoord );"
    }
}


if (IS_WEB) {
    window.IS_MACOS = false
    window.IS_LINUX = false
    window.EXTENSIONS = [
        "fbx",
        "glb",
        "gltf",
        "fbx",
        "obj",
        "hdr"
    ]
    window.IS_MAIN_WINDOW = true
    window.PACKAGE_INFO = {

    }
    window.ASSETS = ASSETS
    window.process = {
        env: {
            get file_parameter() {
                return undefined
            }
        }
    }
    window.OS_TOOLS = {
        fs: {
            existsSync(src) {
                return true
            }
        }
    }
    window.IS_WINDOW_FOCUSED = true
}