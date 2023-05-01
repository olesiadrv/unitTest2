function searchPlateLicense(codeWord, numbers) {
  if (!codeWord || !numbers) {
    return null;
  }
  const codePoints = [...codeWord].map((char) => char.codePointAt(0));
  const licensePlateDigits = [];

  for (let codePoint of codePoints) {
    const index = codePoint % 4;
    licensePlateDigits.push(numbers.charAt(index));
  }

  return licensePlateDigits.join("");
}
const codeWord = "Kyiv";
const numbers = "235486723675948752357345908723467852594680397456834765490357345734256972569395743725435894395734290876299963975573675429718807756844849082364587324693042875430965347208098768565342576786868958496738768549832563420563409657432756689326805783409567237650221751124875243561403910987457823678572306523085324805728904657834265234057341652807659065801";
const licensePlateNumber = searchPlateLicense(codeWord, numbers);
console.log(`Valid car number: ${licensePlateNumber}`);
module.exports = searchPlateLicense;
