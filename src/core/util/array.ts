/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

export function flattenArray<T>(array: (T | T[])[], dst?: T[]): T[] {
  // Yes this function is just Array.flat, but we need to run on old versions of Node.
  if (!dst) dst = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      flattenArray(item, dst);
    } else {
      dst.push(item);
    }
  }
  return dst;
}

export function equalArray(a: any[], b: any[]): boolean {
  if (Array.isArray(a) && Array.isArray(b) && a.length == b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  return false;
}
