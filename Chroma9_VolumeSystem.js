/*:
* @target MZ
* @plugindesc [RPG Maker MZ] [v1.0.0] A simple plugin to fix and set default audios.
* @author Chroma9
* @url https://twitter.com/OfficialChroma9
*
* @--------------------------------------------------------------------------
*
* @param bgmVolume
* @text BGM Volume
* @desc The volume for the Background Music.
* @type number
* @min 0
* @max 100
* @default 40
*
* @param bgsVolume
* @text BGS Volume
* @desc The volume for the Background Sounds.
* @type number
* @min 0
* @max 100
* @default 40
*
* @param meVolume
* @text ME Volume
* @desc The volume for the Music Effects.
* @type number
* @min 0
* @max 100
* @default 40
*
* @param seVolume
* @text SE Volume
* @desc The volume for the Sound Effects.
* @type number
* @min 0
* @max 100
* @default 40
*
* @help
* --------------------------------------------------------------------------
* A very simple method to set default volume settings in the game.
*
* Credit to "yjchess" on Discord for this idea!
* --------------------------------------------------------------------------
*/
var Chroma9 = Chroma9 || {};
Chroma9.VolumeSystem = Chroma9.VolumeSystem || {};
Chroma9.VolumeSystem.name = String(`Chroma9_VolumeSystem`);
Chroma9.VolumeSystem.parameters = PluginManager.parameters(Chroma9.VolumeSystem.name);

var Imported = Imported || {};
Imported[Chroma9.VolumeSystem.name] = true;

(function() {
    const params            = Chroma9.VolumeSystem.parameters;

    AudioManager._bgmVolume = +params['bgmVolume'];
    AudioManager._bgsVolume = +params['bgsVolume'];
    AudioManager._meVolume  = +params['meVolume'];
    AudioManager._seVolume  = +params['seVolume'];
})();
