
//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs: string[]): string {
    var prefix: string = "";
    var j: number = 0;
    var loop: boolean = true;
    while (loop) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] != strs[0][j]) {
                loop = false;
                break;
            }
        }
        if (loop) {
            prefix = prefix + strs[0][j];
            j = j + 1;
        }
    }
    return prefix
};

