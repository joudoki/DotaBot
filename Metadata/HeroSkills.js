const Skill = require('../Models/Skill');

let HeroSkills = {
    "npc_dota_hero_witch_doctor": [
        new Skill({
            name: "Paralyzing Cask",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/dd/Paralyzing_Cask_icon.png?version=86c507955672ae485c41792a267c330a",
            link: "http://dota2.gamepedia.com/Witch_Doctor#Paralyzing_Cask"
        }),
        new Skill({
            name: "Voodoo Restoration",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/11/Voodoo_Restoration_icon.png?version=025efdc8db20837efc6128ee92814b07",
            link: "http://dota2.gamepedia.com/Witch_Doctor#Voodoo_Restoration"
        }),
        new Skill({
            name: "Maledict",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/42/Maledict_icon.png?version=ec120aedb0a342091d9e15ccbe2ca0f6",
            link: "http://dota2.gamepedia.com/Witch_Doctor#Maledict"
        }),
        new Skill({
            name: "Death Ward",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/cf/Death_Ward_icon.png?version=76c978406d5ce8f492e1ee4ba5b48342",
            link: "http://dota2.gamepedia.com/Witch_Doctor#Death_Ward"
        })
    ]
}

module.exports = HeroSkills;
