
//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    var prefix = "";
    var j = 0;
    var loop = true;
    if (strs.length <= 1) {
        return strs[0]
    }
    while (loop) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].length < j || strs[i].length < 1) {
                return prefix
            }
            if (strs[i][j] != strs[0][j]) {
                return prefix
            }
        }
        prefix = prefix + strs[0][j];
        j = j + 1;
        if (strs[0].length <= j) {
            return prefix
        }
    }
};

