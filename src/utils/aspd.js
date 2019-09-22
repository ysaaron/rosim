import { find, floor, last } from 'lodash';

import aspdTable from '../constants/aspdTable';
import { additionalEquipModTable } from '../constants/aspdAdditional';

export const getAspdFrequency = aspd => floor(50 / (200 - Number(aspd)), 2);

const getLefthandBaseAspd = (lefthandId, lefthand, shieldAspd) => {
  if (lefthandId === 100) {
    return 0;
  }
  if (lefthandId === 101) {
    return shieldAspd;
  }
  return find(lefthand, ['id', lefthandId]).baseAspd;
};

const getAgiModifier = (hasLefthandWeapon, weaponId) => {
  if (hasLefthandWeapon) {
    return 10.01;
  }
  if (weaponId === 10) {
    return 10;
  }
  return 1120 / 111;
};

const getAspdPenalty = (hasLefthandWeapon, baseAspd) => {
  if (hasLefthandWeapon) {
    return 1.04518;
  }
  if (baseAspd >= 145) {
    return 1 - (baseAspd - 144) / 50;
  }
  return 1;
};

export default (job, agi, dex, aspd) => {
  const {
    weaponId,
    lefthandId,
    equipMod,
    equipFixed,
    skillMod,
    potionMod,
    additionalMod,
  } = aspd;
  const { weapons, shieldAspd, lefthand = [] } = find(aspdTable, [
    'job',
    last(job),
  ]);
  const { baseAspd } = find(weapons, ['id', weaponId]);

  const lefthandBaseAspd = getLefthandBaseAspd(
    lefthandId,
    lefthand,
    shieldAspd
  );
  const aspdModifier = potionMod + skillMod;
  const hasLefthandWeapon = lefthandBaseAspd > 0;
  const lefthandPenalty = hasLefthandWeapon
    ? (lefthandBaseAspd - 194) / 4
    : lefthandBaseAspd;
  const agiModifier = getAgiModifier(hasLefthandWeapon, weaponId);
  const aspdPenalty = getAspdPenalty(hasLefthandWeapon, baseAspd);
  const additionalEquipMod = additionalMod.reduce(
    (acc, curr) => acc + additionalEquipModTable[curr],
    0
  );

  const aspdA =
    baseAspd +
    lefthandPenalty +
    Math.sqrt(agi * agiModifier + (dex * 11) / 60) * aspdPenalty;

  const aspdB = 200 - (200 - aspdA) * (1 - aspdModifier / 100);

  const finalAspd =
    195 -
    (195 - aspdB) * (1 - (equipMod + additionalEquipMod) / 100) +
    equipFixed;

  return floor(finalAspd, 2);
};
