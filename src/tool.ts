export function jsToJSON(code: string) {
    code = delJSDeclare(code)
    code = singleQuoteToDouble(code)
    
    const reg = /(?<=\{|\}|,|\n)\s*([a-zA-Z0-9_$-]+)\s*:(?!["'])/g
    return code.replace(reg, (_match, g1) => {
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
