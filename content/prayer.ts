// The school prayer, as painted on the sign at the school.
// Each line is split into parts so the page can set the "dark" word
// apart from the word that answers it.
export type PrayerPart = string | { dark: string } | { light: string };

export const schoolPrayer: PrayerPart[][] = [
  ["Oh God, make me an instrument of your ", { light: "peace" }],
  ["Where there is ", { dark: "hatred" }, ", let me sow ", { light: "love" }],
  ["Where there is ", { dark: "injury" }, ", ", { light: "pardon" }],
  ["Where there is ", { dark: "doubt" }, ", ", { light: "faith" }],
  ["Where there is ", { dark: "despair" }, ", ", { light: "hope" }],
  ["Where there is ", { dark: "darkness" }, ", ", { light: "light" }],
  ["Where there is ", { dark: "sadness" }, ", ", { light: "joy" }],
];
