let langs = [
  { name: "JavaScript", year: 1995 },
  { name: "Python", year: 1991 },
  { name: "Java", year: 1995 },
  { name: "C++", year: 1989 },
];

function compareYears(lang1, lang2) {
  if (lang1.year < lang2.year) return -1;
  if (lang1.year > lang2.year) return 1;

  // at this point, both lang1.year and lang2.year are the same
  // so the comparison shifts to the name property
  if (lang1.name < lang2.name) return -1;
  if (lang1.name > lang2.name) return 1;
  return 0;
}

langs.sort(compareYears);
console.log(langs);
