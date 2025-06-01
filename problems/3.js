/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 if (!s) return 0;
  
  let currentSub = "";
  let maxSub = "";

  for (let i = 0; i < s.length; i++) {
    if (!currentSub.includes(s[i])) {
      currentSub += s[i];
    } else {
      // If repeat, move currentSub to start after the repeated character
      const repeatIndex = currentSub.indexOf(s[i]);
      currentSub = currentSub.slice(repeatIndex + 1) + s[i];
    }

    if (currentSub.length > maxSub.length) {
      maxSub = currentSub;
    }
  }

  return maxSub.length;
};