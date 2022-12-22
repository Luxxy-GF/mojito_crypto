import { ServerUtils } from '@project-error/pe-utils';

function getDistanceBetweenCoords(coords1: Vector3, coords2: Vector3, useZ: boolean) {
  const x = coords2.x - coords1.x;
  const y = coords2.y - coords1.y;
  const z = coords2.z - coords1.z;

  if (useZ) {
    return Math.sqrt(x * x + y * y + z * z);
  }

  return Math.sqrt(x * x + y * y);
}

export const Utils = new ServerUtils();
