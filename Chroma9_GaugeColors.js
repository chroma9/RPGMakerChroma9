/*:
* @target MZ
* @plugindesc [RPG Maker MZ] [v1.0.0] A simple way to customize your stat gauge colors.
* @author Chroma9
* @url https://twitter.com/OfficialChroma9
*
* @--------------------------------------------------------------------------
*
* @param ===== HP Gauge Colors =====
* @default
*
* @param hpLightColor
* @text HP Lighter Color
* @desc The lighter part of the HP Gauge Gradient.
* @type string
* @default 3
*
* @param hpDarkColor
* @text HP Darker Color
* @desc The darker part of the HP Gauge Gradient.
* @type string
* @default 11
*
* @param ===== MP Gauge Colors =====
* @default
*
* @param mpLightColor
* @text MP Lighter Color
* @desc The lighter part of the MP Gauge Gradient.
* @type string
* @default 4
*
* @param mpDarkColor
* @text MP Darker Color
* @desc The darker part of the MP Gauge Gradient.
* @type string
* @default 12
*
* @param ===== TP Gauge Colors =====
* @default
*
* @param tpLightColor
* @text TP Lighter Color
* @desc The lighter part of the TP Gauge Gradient.
* @type string
* @default 2
*
* @param tpDarkColor
* @text TP Darker Color
* @desc The darker part of the TP Gauge Gradient.
* @type string
* @default 10
*
* @help
* --------------------------------------------------------------------------
* This plugin allows you to freely customize the colors of the stat gauges
* in the engine to whatever the user desires.
*
* Colors are permitted in Text Color code or Hex Code format.
*
* eg Text Colors: 0 - 31
* eg Hex Color: #abc123
*
* Thank you to Aesica for helping me learn to create plugins!
* --------------------------------------------------------------------------
*/
var Chroma9 = Chroma9 || {};
Chroma9.GaugeColors = Chroma9.GaugeColors || {};
Chroma9.GaugeColors.name = String(`Chroma9_GaugeColors`);
Chroma9.GaugeColors.parameters = PluginManager.parameters(Chroma9.GaugeColors.name);

var Imported = Imported || {};
Imported[Chroma9.GaugeColors.name] = true;

(function() {
    const params        = Chroma9.GaugeColors.parameters;

    const hexCheck      = /^#(?:[0-9a-f]{3}){1,2}$/i;

    let hpLightValue    = params['hpLightColor'];
    let hpDarkValue     = params['hpDarkColor'];
    let mpLightValue    = params['mpLightColor'];
    let mpDarkValue     = params['mpDarkColor'];
    let tpLightValue    = params['tpLightColor'];
    let tpDarkValue     = params['tpDarkColor'];

    let isValidHex      = (v) => hexCheck.test(v);
    let isValidRange    = (v) => (v <= 31 && v >= 0);

    ColorManager.hpGaugeColor1 = function() {
        if(isValidHex(hpLightValue.toLowerCase())) {
            return hpLightValue;
        } else {
            if(!isNaN(hpLightValue) && isValidRange(+hpLightValue)) {
                return this.textColor(+hpLightValue);
            } else {
                throw new Error(`HP Light Color has an Invalid Parameter.`);
            }
        }
    }
    ColorManager.hpGaugeColor2 = function() {
        if(isValidHex(hpDarkValue.toLowerCase())) {
            return hpDarkValue;
        } else {
            if(!isNaN(hpLightValue) && isValidRange(+hpDarkValue)) {
                return this.textColor(+hpDarkValue);
            } else {
                throw new Error(`HP Dark Color has an Invalid Parameter.`);
            }
        }
    }
    ColorManager.mpGaugeColor1 = function() {
        if(isValidHex(mpLightValue.toLowerCase())) {
            return mpLightValue;
        } else {
            if(!isNaN(mpLightValue) && isValidRange(+mpLightValue)) {
                return this.textColor(+mpLightValue);
            } else {
                throw new Error(`MP Light Color has an Invalid Parameter.`);
            }
        }
    }
    ColorManager.mpGaugeColor2 = function() {
        if(isValidHex(mpDarkValue.toLowerCase())) {
            return mpDarkValue;
        } else {
            if(!isNaN(mpDarkValue) && isValidRange(+mpDarkValue)) {
                return this.textColor(+mpDarkValue);
            } else {
                throw new Error(`MP Dark Color has an Invalid Parameter.`);
            }
        }
    }
    ColorManager.tpGaugeColor1 = function() {
        if(isValidHex(tpLightValue.toLowerCase())) {
            return tpLightValue;
        } else {
            if(!isNaN(tpLightValue) && isValidRange(+tpLightValue)) {
                return this.textColor(+tpLightValue);
            } else {
                throw new Error(`TP Light Color has an Invalid Parameter.`);
            }
        }
    }
    ColorManager.tpGaugeColor2 = function() {
        if(isValidHex(tpDarkValue.toLowerCase())) {
            return tpDarkValue;
        } else {
            if(!isNaN(tpDarkValue) && isValidRange(+tpDarkValue)) {
                return this.textColor(+tpDarkValue);
            } else {
                throw new Error(`TP Dark Color has an Invalid Parameter.`);
            }
        }
    }
})();
