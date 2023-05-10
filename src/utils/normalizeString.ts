export function normalizeString(str: string): string {
  const strNormalized = str
    .replaceAll(/[áàâã]/gi, "a")
    .replaceAll(/[éèê]/gi, "e")
    .replaceAll(/[íìî]/gi, "i")
    .replaceAll(/[óòôõ]/gi, "o")
    .replaceAll(/[úùû]/gi, "u")
    .replaceAll(/[ç]/gi, "c")
    .replaceAll(" ", "_");

  return strNormalized;
}
