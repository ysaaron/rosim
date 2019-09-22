import {
  FIRST,
  HIGH_WIZARD,
  MAGE,
  SECOND,
  THIRD,
  TRANSCENDENT_SECOND,
  WARLOCK,
  WIZARD,
} from '../classNames';

import repeatNonSkillObjects from './repeatNonSkillObjects';
import { FULL_THROTTLE, NON_SKILL } from './commonSkills';

// 1st mage class
export const INCREASE_SPIRITUAL_POWER = {
  id: 'INCREASE_SPIRITUAL_POWER',
  name: '禪心',
  max: 10,
  group: FIRST,
  requirements: [],
};
export const NAPALM_BEAT = {
  id: 'NAPALM_BEAT',
  name: '心靈爆破',
  max: 10,
  group: FIRST,
  requirements: [],
};
export const SOUL_STRIKE = {
  id: 'SOUL_STRIKE',
  name: '聖靈召喚',
  max: 10,
  group: FIRST,
  requirements: [],
};
export const SAFETY_WALL = {
  id: 'SAFETY_WALL',
  name: '暗之障壁',
  max: 10,
  group: FIRST,
  requirements: [],
};
export const SIGHT = {
  id: 'SIGHT',
  name: '火狩',
  max: 1,
  group: FIRST,
  requirements: [],
};
export const FIRE_BOLT = {
  id: 'FIRE_BOLT',
  name: '火箭術',
  max: 10,
  group: FIRST,
  requirements: [],
};
export const FIRE_BALL = {
  id: 'FIRE_BALL',
  name: '火球術',
  max: 10,
  group: FIRST,
  requirements: [{ skill: FIRE_BOLT, minLv: 4 }],
};
export const FIRE_WALL = {
  id: 'FIRE_WALL',
  name: '火焰之壁',
  max: 10,
  group: FIRST,
  requirements: [{ skill: FIRE_BALL, minLv: 5 }, { skill: SIGHT, minLv: 3 }],
};
export const LIGHTNING_BOLT = {
  id: 'LIGHTNING_BOLT',
  name: '雷擊術',
  max: 10,
  group: FIRST,
  requirements: [],
};
export const THUNDER_STORM = {
  id: 'THUNDER_STORM',
  name: '雷爆術',
  max: 10,
  group: FIRST,
  requirements: [{ skill: LIGHTNING_BOLT, minLv: 4 }],
};
export const COLD_BOLT = {
  id: 'COLD_BOLT',
  name: '冰箭術',
  max: 10,
  group: FIRST,
  requirements: [],
};
export const FROST_DIVER = {
  id: 'FROST_DIVER',
  name: '冰凍術',
  max: 10,
  group: FIRST,
  requirements: [{ skill: COLD_BOLT, minLv: 5 }],
};
export const STONE_CURSE = {
  id: 'STONE_CURSE',
  name: '石化術',
  max: 10,
  group: FIRST,
  requirements: [],
};

// 2nd wizard class
export const MONSTER_PROPERTY = {
  id: 'MONSTER_PROPERTY',
  name: '怪物情報',
  max: 1,
  group: SECOND,
  requirements: [],
};
export const FIRE_PILLAR = {
  id: 'FIRE_PILLAR',
  name: '火柱攻擊',
  max: 10,
  group: SECOND,
  requirements: [{ skill: FIRE_WALL, minLv: 1 }],
};
export const SIGHTTRASHER = {
  id: 'SIGHTTRASHER',
  name: '火之獵殺',
  max: 10,
  group: SECOND,
  requirements: [
    { skill: SIGHT, minLv: 1 },
    { skill: LIGHTNING_BOLT, minLv: 1 },
  ],
};
export const METEOR_STORM = {
  id: 'METEOR_STORM',
  name: '隕石術',
  max: 10,
  group: SECOND,
  requirements: [
    { skill: SIGHTTRASHER, minLv: 2 },
    { skill: LIGHTNING_BOLT, minLv: 1 },
  ],
};
export const JUPITEL_THUNDER = {
  id: 'JUPITEL_THUNDER',
  name: '雷鳴術',
  max: 10,
  group: SECOND,
  requirements: [
    { skill: SOUL_STRIKE, minLv: 1 },
    { skill: LIGHTNING_BOLT, minLv: 1 },
  ],
};
export const LORD_OF_VERLIMION = {
  id: 'LORD_OF_VERLIMION',
  name: '怒雷強擊',
  max: 10,
  group: SECOND,
  requirements: [
    { skill: JUPITEL_THUNDER, minLv: 5 },
    { skill: THUNDER_STORM, minLv: 1 },
  ],
};
export const WATERBALL = {
  id: 'WATERBALL',
  name: '水球術',
  max: 10,
  group: SECOND,
  requirements: [
    { skill: COLD_BOLT, minLv: 1 },
    { skill: LIGHTNING_BOLT, minLv: 1 },
  ],
};
export const ICE_WALL = {
  id: 'ICE_WALL',
  name: '冰刃之牆',
  max: 10,
  group: SECOND,
  requirements: [{ skill: FROST_DIVER, minLv: 1 }],
};
export const FROST_NOVA = {
  id: 'FROST_NOVA',
  name: '霜凍之術',
  max: 10,
  group: SECOND,
  requirements: [{ skill: ICE_WALL, minLv: 1 }],
};
export const STROM_GUST = {
  id: 'STROM_GUST',
  name: '暴風雪',
  max: 10,
  group: SECOND,
  requirements: [
    { skill: FROST_DIVER, minLv: 1 },
    { skill: JUPITEL_THUNDER, minLv: 3 },
  ],
};
export const EARTH_SPIKE = {
  id: 'EARTH_SPIKE',
  name: '地震術',
  max: 5,
  group: SECOND,
  requirements: [{ skill: STONE_CURSE, minLv: 1 }],
};
export const HEAVENS_DRIVE = {
  id: 'HEAVENS_DRIVE',
  name: '崩裂術',
  max: 5,
  group: SECOND,
  requirements: [{ skill: EARTH_SPIKE, minLv: 3 }],
};
export const QUAGMIRE = {
  id: 'QUAGMIRE',
  name: '泥沼地',
  max: 5,
  group: SECOND,
  requirements: [{ skill: HEAVENS_DRIVE, minLv: 1 }],
};
export const MAGIC_CRASHER = {
  id: 'MAGIC_CRASHER',
  name: '魔擊術',
  max: 1,
  group: TRANSCENDENT_SECOND,
  requirements: [
    { skill: INCREASE_SPIRITUAL_POWER, minLv: 1 },
    { skill: SOUL_STRIKE, minLv: 5 },
  ],
};
export const NAPALM_VACUN = {
  id: 'MAGIC_CRASHER',
  name: '念力連擊',
  max: 5,
  group: TRANSCENDENT_SECOND,
  requirements: [
    { skill: INCREASE_SPIRITUAL_POWER, minLv: 5 },
    { skill: SOUL_STRIKE, minLv: 5 },
  ],
};
export const SOUL_DRAIN = {
  id: 'SOUL_DRAIN',
  name: '吸魂術',
  max: 10,
  group: TRANSCENDENT_SECOND,
  requirements: [
    { skill: INCREASE_SPIRITUAL_POWER, minLv: 5 },
    { skill: SOUL_STRIKE, minLv: 7 },
  ],
};
export const MAGIC_POWER = {
  id: 'MAGIC_POWER',
  name: '魔力增幅',
  max: 10,
  group: TRANSCENDENT_SECOND,
  requirements: [],
};
export const GRAVIATION_FIELD = {
  id: 'GRAVIATION_FIELD',
  name: '重力原野',
  max: 10,
  group: TRANSCENDENT_SECOND,
  requirements: [
    { skill: QUAGMIRE, minLv: 1 },
    { skill: MAGIC_POWER, minLv: 10 },
  ],
};
export const GARBANTEIN = {
  id: 'GARBANTEIN',
  name: '咖班塔音',
  max: 1,
  group: TRANSCENDENT_SECOND,
  requirements: [{ skill: MONSTER_PROPERTY, minLv: 1 }],
};

// 3rd warlock class
export const READING_SPELL_BOOK = {
  id: 'READING_SPELL_BOOK',
  name: '閱讀魔法書',
  max: 1,
  group: THIRD,
  requirements: [],
};
export const RADIUS = {
  id: 'RADIUS',
  name: '半徑擴大',
  max: 3,
  group: THIRD,
  requirements: [],
};
export const FREEZING_SPELL = {
  id: 'FREEZING_SPELL',
  name: '魔法保存',
  max: 10,
  group: THIRD,
  requirements: [],
};
export const RELEASE = {
  id: 'RELEASE',
  name: '釋放',
  max: 2,
  group: THIRD,
  requirements: [],
};
export const DRAIN_LIFE = {
  id: 'DRAIN_LIFE',
  name: '吸星大法',
  max: 5,
  group: THIRD,
  requirements: [{ skill: RADIUS, minLv: 1 }],
};
export const SOUL_EXAPNSION = {
  id: 'SOUL_EXAPNSION',
  name: '靈魂爆炸',
  max: 5,
  group: THIRD,
  requirements: [{ skill: DRAIN_LIFE, minLv: 1 }],
};
export const WHITE_IMPRISON = {
  id: 'WHITE_IMPRISON',
  name: '白色監獄',
  max: 5,
  group: THIRD,
  requirements: [{ skill: SOUL_EXAPNSION, minLv: 3 }],
};
export const TELEINESIS_INTENSE = {
  id: 'TELEINESIS_INTENSE',
  name: '終極念力',
  max: 5,
  group: THIRD,
  requirements: [{ skill: SOUL_EXAPNSION, minLv: 5 }],
};
export const STASIS = {
  id: 'STASIS',
  name: '魔力凍結',
  max: 5,
  group: THIRD,
  requirements: [{ skill: DRAIN_LIFE, minLv: 1 }],
};
export const RECOGNIZED_SPELL = {
  id: 'RECOGNIZED_SPELL',
  name: '魔法醒悟',
  max: 5,
  group: THIRD,
  requirements: [
    { skill: RELEASE, minLv: 2 },
    { skill: STASIS, minLv: 1 },
    { skill: WHITE_IMPRISON, minLv: 1 },
  ],
};
export const SUMMON_FIRE_BALL = {
  id: 'SUMMON_FIRE_BALL',
  name: '召喚火焰球',
  max: 5,
  group: THIRD,
  requirements: [{ skill: METEOR_STORM, minLv: 1 }],
};
export const SUMMON_BALL_LIGHTNING = {
  id: 'SUMMON_BALL_LIGHTNING',
  name: '召喚雷電球',
  max: 5,
  group: THIRD,
  requirements: [{ skill: LORD_OF_VERLIMION, minLv: 1 }],
};
export const SUMMON_WATER_BALL = {
  id: 'SUMMON_WATER_BALL',
  name: '召喚水球',
  max: 5,
  group: THIRD,
  requirements: [{ skill: METEOR_STORM, minLv: 1 }],
};
export const SUMMON_STONE = {
  id: 'SUMMON_STONE',
  name: '召喚石塊',
  max: 5,
  group: THIRD,
  requirements: [{ skill: HEAVENS_DRIVE, minLv: 1 }],
};
export const CRIMSON_ROCK = {
  id: 'CRIMSON_ROCK',
  name: '碧血隕石',
  max: 5,
  group: THIRD,
  requirements: [{ skill: SUMMON_FIRE_BALL, minLv: 1 }],
};
export const HELL_INFERNO = {
  id: 'HELL_INFERNO',
  name: '地獄火焰',
  max: 5,
  group: THIRD,
  requirements: [{ skill: CRIMSON_ROCK, minLv: 2 }],
};
export const COMET = {
  id: 'COMET',
  name: '毀滅彗星',
  max: 5,
  group: THIRD,
  requirements: [{ skill: HELL_INFERNO, minLv: 3 }],
};
export const CHAIN_LIGHTNING = {
  id: 'CHAIN_LIGHTNING',
  name: '連鎖電擊',
  max: 5,
  group: THIRD,
  requirements: [{ skill: SUMMON_BALL_LIGHTNING, minLv: 1 }],
};
export const FROST_MISTY = {
  id: 'FROST_MISTY',
  name: '寒冰濃霧',
  max: 5,
  group: THIRD,
  requirements: [{ skill: SUMMON_WATER_BALL, minLv: 1 }],
};
export const JACK_FROST = {
  id: 'JACK_FROST',
  name: '凍僵術',
  max: 5,
  group: THIRD,
  requirements: [{ skill: FROST_MISTY, minLv: 2 }],
};
export const SIENNA_EXECRATE = {
  id: 'SIENNA_EXECRATE',
  name: '石化詛咒',
  max: 5,
  group: THIRD,
  requirements: [{ skill: SUMMON_STONE, minLv: 1 }],
};
export const EARTH_STRAIN = {
  id: 'EARTH_SPIKE',
  name: '地牛翻身',
  max: 5,
  group: THIRD,
  requirements: [{ skill: SIENNA_EXECRATE, minLv: 2 }],
};
export const TETRA_VORTEX = {
  id: 'TETRA_VORTEX',
  name: '屬性漩渦',
  max: 10,
  group: THIRD,
  requirements: [
    { skill: HELL_INFERNO, minLv: 5 },
    { skill: JACK_FROST, minLv: 5 },
    { skill: CHAIN_LIGHTNING, minLv: 5 },
    { skill: EARTH_STRAIN, minLv: 5 },
  ],
};
export const MARSHOFABYSS = {
  id: 'MARSHOFABYSS',
  name: '深淵泥沼',
  max: 5,
  group: THIRD,
  requirements: [{ skill: QUAGMIRE, minLv: 1 }],
};

export const WARLOCK_SKILL_TREE = {
  [MAGE]: [
    NON_SKILL,
    STONE_CURSE,
    COLD_BOLT,
    LIGHTNING_BOLT,
    NAPALM_BEAT,
    FIRE_BOLT,
    SIGHT,
    NON_SKILL,
    INCREASE_SPIRITUAL_POWER,
    FROST_DIVER,
    THUNDER_STORM,
    SOUL_STRIKE,
    FIRE_BALL,
    ...repeatNonSkillObjects(5),
    FIRE_WALL,
    SAFETY_WALL,
    ...repeatNonSkillObjects(22),
  ],
  [WIZARD]: [
    MONSTER_PROPERTY,
    ICE_WALL,
    JUPITEL_THUNDER,
    EARTH_SPIKE,
    SIGHTTRASHER,
    FIRE_PILLAR,
    NON_SKILL,
    GARBANTEIN,
    FROST_NOVA,
    LORD_OF_VERLIMION,
    HEAVENS_DRIVE,
    METEOR_STORM,
    ...repeatNonSkillObjects(3),
    WATERBALL,
    NON_SKILL,
    QUAGMIRE,
    ...repeatNonSkillObjects(4),
    STROM_GUST,
    ...repeatNonSkillObjects(19),
  ],
  [HIGH_WIZARD]: [
    MONSTER_PROPERTY,
    ICE_WALL,
    JUPITEL_THUNDER,
    EARTH_SPIKE,
    SIGHTTRASHER,
    FIRE_PILLAR,
    NON_SKILL,
    GARBANTEIN,
    FROST_NOVA,
    LORD_OF_VERLIMION,
    HEAVENS_DRIVE,
    METEOR_STORM,
    MAGIC_CRASHER,
    SOUL_DRAIN,
    NON_SKILL,
    WATERBALL,
    NON_SKILL,
    QUAGMIRE,
    GRAVIATION_FIELD,
    NON_SKILL,
    NAPALM_VACUN,
    MAGIC_POWER,
    NON_SKILL,
    STROM_GUST,
    NON_SKILL,
    GRAVIATION_FIELD,
    ...repeatNonSkillObjects(17),
  ],
  [WARLOCK]: [
    MARSHOFABYSS,
    RADIUS,
    RELEASE,
    SUMMON_FIRE_BALL,
    SUMMON_WATER_BALL,
    SUMMON_BALL_LIGHTNING,
    SUMMON_STONE,
    FREEZING_SPELL,
    DRAIN_LIFE,
    READING_SPELL_BOOK,
    CRIMSON_ROCK,
    FROST_MISTY,
    CHAIN_LIGHTNING,
    SIENNA_EXECRATE,
    SOUL_EXAPNSION,
    STASIS,
    NON_SKILL,
    HELL_INFERNO,
    JACK_FROST,
    NON_SKILL,
    EARTH_STRAIN,
    WHITE_IMPRISON,
    ...repeatNonSkillObjects(3),
    COMET,
    ...repeatNonSkillObjects(2),
    TELEINESIS_INTENSE,
    NON_SKILL,
    RECOGNIZED_SPELL,
    NON_SKILL,
    TETRA_VORTEX,
    ...repeatNonSkillObjects(2),
    ...repeatNonSkillObjects(6),
    FULL_THROTTLE,
  ],
};
