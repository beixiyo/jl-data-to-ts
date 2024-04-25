export function isJSObj(code: string) {
    const reg = /(?<!:)(\w+)\s*:/g
    return code.match(reg) ? true : false
}

export function jsToJSON(code: string) {
    code = delJSDeclare(code)
    code = singleQuoteToDouble(code)
    
    const reg = /(?<!:)(\w+)\s*:/g
    return code.replace(reg, (match, g1) => {
        return `"${g1.trim()}":`
    })
}

export function delJSDeclare(code: string) {
    const reg = /(?:(const|var|let)?\s?.*?=)\s*/g
    return code.replace(reg, '')
}

export function delSemicolons(code: string) {
    return code.replace(/;/g, '')
}

export function singleQuoteToDouble(code: string) {
    return code.replace(/'/g, '"')
}
