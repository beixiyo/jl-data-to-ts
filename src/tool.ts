export function jsToJSON(code: string) {
    // 先删除变量声明
    code = delJSDeclare(code)
    // 把单引号转成双引号
    code = singleQuoteToDouble(code)

    // 匹配对象键，并确保不会误匹配嵌套对象
    const reg = /(?<=\{|\}|,|\n)\s*([a-zA-Z0-9_$-]+)\s*:(?!["'{])/g
    return code.replace(reg, (_match, g1) => {
        return `"${g1.trim()}":`
    })
}

export function delJSDeclare(code: string) {
    // 只删除行首的变量声明，避免误删内容
    const reg = /^\s*(const|var|let)?\s*[a-zA-Z0-9_$]+\s*=\s*/gm
    return code.replace(reg, '')
}

export function delSemicolons(code: string) {
    return code.replace(/;/g, '')
}

export function singleQuoteToDouble(code: string) {
    return code.replace(/'/g, '"')
}
