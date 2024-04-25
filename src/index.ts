import jtt from 'json-to-ts'
import { delSemicolons, jsToJSON } from './tool'


export function dataToTs(code: string, config?: JTTOpts) {
    const _code = jsToJSON(code)
    const _config = {
        ...{
            enableExport: true,
            useTypeAlias: true,
            needSemicolons: false,
        } as JTTOpts,
        ...config
    }

    const { enableExport, needSemicolons, ...jttOpts } = _config
    let typeArr = jtt(JSON.parse(_code), jttOpts)

    if (enableExport) {
        typeArr = typeArr.map((t) => `export ${t}`)
    }
    if (!needSemicolons) {
        typeArr = typeArr.map((t) => delSemicolons(t))
    }

    return typeArr
}


export type JTTOpts = {
    /** 需要导出吗，默认导出 */
    enableExport?: boolean
    /** 需要分号吗，默认不需要分号 */
    needSemicolons?: boolean
    useTypeAlias?: boolean
    rootName?: string
}