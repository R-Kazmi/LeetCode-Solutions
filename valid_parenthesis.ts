function isValid(s: string): boolean {
    var stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        let p: string = s[i]
        if (p === '[')
            stack.push(']')
        else if (p === '{')
            stack.push('}')
        else if (p === '(')
            stack.push(')')
        else {
            if (p != stack.pop())
                return false
        }
    }
    return stack.length === 0
};