import { dataToTs } from '../dist/index.js'


let passCount = 0
const allCount = 5

const json = `{
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
console.log(dataToTs(json, {
    enableExport: false,
    useTypeAlias: false,
    rootName: 'Test',
    needSemicolons: true
}).join('\n'))
pass()


const js1 = `const data = {
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
console.log(dataToTs(js1).join('\n'))
pass()


const js2 = `var data = {
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
console.log(dataToTs(js2).join('\n'))
pass()


const js3 = `{
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
console.log(dataToTs(js3).join('\n'))
pass()


const js4 = `a = {
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


function pass() {
    console.log(`test success：${++passCount}`, '-'.repeat(20))
    console.log(`all test success：${passCount === allCount ? '✅' : '❌'}`)
}