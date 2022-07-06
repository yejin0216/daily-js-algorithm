/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  if (votes.length === 1) return votes[0];
  const score = new Map(
    votes[0].split("").map((c) => [c, new Array(votes[0].length).fill(0)])
  );

  for (s of votes) {
    for (let i = 0; i < s.length; i++) {
      score.get(s[i])[i]++;
    }
  }

  const result = Array.from(score.entries()).sort((a, b) => {
    for (let i = 0; i < a[1].length; i++) {
      if (a[1][i] > b[1][i]) return -1;
      else if (a[1][i] < b[1][i]) return 1;
    }
    return a[0].localeCompare(b[0]);
  });

  return result.map((item) => item[0]).join("");
};

// console.log(rankTeams(["ABC", "ACB", "BCA", "BAC"]));
console.log(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]));
console.log(rankTeams(["WXYZ", "XYZW"]));
// console.log(rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]));

// console.log(
//     rankTeams([
//         "FVSHJIEMNGYPTQOURLWCZKAX",
//         "AITFQORCEHPVJMXGKSLNZWUY",
//         "OTERVXFZUMHNIYSCQAWGPKJL",
//         "VMSERIJYLZNWCPQTOKFUHAXG",
//         "VNHOZWKQCEFYPSGLAMXJIUTR",
//         "ANPHQIJMXCWOSKTYGULFVERZ",
//         "RFYUXJEWCKQOMGATHZVILNSP",
//         "SCPYUMQJTVEXKRNLIOWGHAFZ",
//         "VIKTSJCEYQGLOMPZWAHFXURN",
//         "SVJICLXKHQZTFWNPYRGMEUAO",
//         "JRCTHYKIGSXPOZLUQAVNEWFM",
//         "NGMSWJITREHFZVQCUKXYAPOL",
//         "WUXJOQKGNSYLHEZAFIPMRCVT",
//         "PKYQIOLXFCRGHZNAMJVUTWES",
//         "FERSGNMJVZXWAYLIKCPUQHTO",
//         "HPLRIUQMTSGYJVAXWNOCZEKF",
//         "JUVWPTEGCOFYSKXNRMHQALIZ",
//         "MWPIAZCNSLEYRTHFKQXUOVGJ",
//         "EZXLUNFVCMORSIWKTYHJAQPG",
//         "HRQNLTKJFIEGMCSXAZPYOVUW",
//         "LOHXVYGWRIJMCPSQENUAKTZF",
//         "XKUTWPRGHOAQFLVYMJSNEIZC",
//         "WTCRQMVKPHOSLGAXZUEFYNJI",
//     ]) === "VWFHSJARNPEMOXLTUKICZGYQ"
// );
