export function jsToJSON(code: string) {
  // 先删除变量声明
  code = delJSDeclare(code)

  // 尝试直接执行 JavaScript 代码来获得对象，然后转为 JSON
  // 这样可以避免手动处理字符串转义的复杂性
  try {
    // 创建一个安全的执行环境
    const func = new Function('return ' + code)
    const obj = func()
    return JSON.stringify(obj)
  }
  catch (error) {
    // 如果直接执行失败，回退到原来的字符串处理方法
    return fallbackStringProcessing(code)
  }
}

function fallbackStringProcessing(code: string): string {
  // 把单引号转成双引号
  code = singleQuoteToDouble(code)

  // 处理字符串值中的特殊字符
  // 匹配字符串值并转义特殊字符
  code = code.replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, (match, content) => {
    return '"' + escapeJsonString(content) + '"'
  })

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
  // 更智能的单引号转双引号，避免破坏字符串内容
  return code.replace(/'/g, '"')
}

/**
 * 转义 JSON 字符串中的特殊字符
 */
export function escapeJsonString(str: string): string {
  return str.replace(/\\/g, '\\\\')   // 反斜杠
    .replace(/"/g, '\\"')     // 双引号
    .replace(/\n/g, '\\n')    // 换行符
    .replace(/\r/g, '\\r')    // 回车符
    .replace(/\t/g, '\\t')    // 制表符
    .replace(/\b/g, '\\b')    // 退格符
    .replace(/\f/g, '\\f')    // 换页符
}
