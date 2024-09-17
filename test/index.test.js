import { dataToTs } from '../dist/index.js'


let passCount = 0
const allCount = 7

const js1 = `{
    "lease": {
        "term": "36 months",
        "monthlyPayment": "$199",
        "dueAtSigning": "$3,000"
    },
    "purchase": {
        "price": "$21,570",
        "downPayment": "$2,500"
    }
}`
console.log(dataToTs(js1, {
    enableExport: false,
    useTypeAlias: false,
    rootName: 'Test',
    needSemicolons: true
}).join('\n'))
pass()


const js2 = `const data = {
    lease: {
        term: '36 months',
        monthlyPayment: '$199',
        dueAtSigning: '$3,000'
    },
    purchase: {
        price: '$21,570',
        downPayment: '$2,500'
    }
}`
console.log(dataToTs(js2).join('\n'))
pass()


const js3 = `var data = {
    "lease": {
        term: '36 months',
        monthlyPayment: '$199',
        dueAtSigning: '$3,000'
    },
    'purchase': {
        price: '$21,570',
        downPayment: '$2,500'
    }
}`
console.log(dataToTs(js3).join('\n'))
pass()


const js4 = `{
    lease: {
        term: '36 months',
        monthlyPayment: '$199',
        dueAtSigning: '$3,000'
    },
    purchase: {
        price: '$21,570',
        downPayment: '$2,500'
    }
}`
console.log(dataToTs(js4).join('\n'))
pass()


const js5 = `a = {
    lease: {
        term: '36 months',
        monthlyPayment: '$199',
        dueAtSigning: '$3,000'
    },
    purchase: {
        price: '$21,570',
        downPayment: '$2,500'
    }
}`
console.log(dataToTs(js5).join('\n'))
pass()


const js6 = `{
    jobName: "",
    "createdTime": "2024-04-28 14:24:54",
    "createdBy": ""
}`
console.log(dataToTs(js6).join('\n'))
pass()


const js7 = `{
    "id": "616684050718918322",
    "createUserString": null,
    "createTime": "2024-08-21 17:22:15",
    "name": "8470b61b-7248-47aa-838f-2a13cf75f61d.png",
    "path": "http://chengguo-public.oss-cn-shanghai.aliyuncs.com/photo-g-admin/8470b61b-7248-47aa-838f-2a13cf75f61d.png?Expires=1726552528&OSSAccessKeyId=LTAI5t8z8UKEHkjikYXYwXZb&Signature=EA1bTJtneFtV3UtdTGyfgakdMd4%3D"
}`
console.log(dataToTs(js7).join('\n'))
pass(true)


function pass(done) {
    console.log(`\ntest success：${++passCount}`, '-'.repeat(20))
    done && console.log(`all test success：${passCount === allCount ? '✅' : '❌'}`)
}