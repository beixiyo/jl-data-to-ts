import { dataToTs } from '../dist/index.js'


let passCount = 1
const allCount = 8

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

const js8 = `const resp = {
  candidates: [
    {
      content: {
        parts: [
          {
            text: "我擅长的事情有很多，主要可以归纳为以下几个方面：\\n\\n**1. 信息处理与生成：**\\n\\n*   **理解和生成文本:** 我可以理解各种类型的文本，包括新闻报道、故事、代码、脚本、音乐作品、电子邮件、信件等。同时，我也可以根据你的指示生成各种类型的文本。\\n*   **翻译语言:** 我可以流畅地在不同语言之间进行翻译。\\n*   **总结文本:** 我可以快速阅读并提炼文本的关键信息，生成简洁的摘要。\\n*   **回答问题:** 我可以根据已知信息回答你的问题，即使问题很复杂或开放性很强。\\n*   **生成创意文本:** 我可以生成诗歌、代码、剧本、音乐作品、电子邮件、信件等。\\n\\n**2. 知识获取与应用：**\\n\\n*   **获取广泛的知识:** 我接受过海量数据的训练，拥有广泛的知识储备。\\n*   **检索和整合信息:** 我可以从互联网上检索信息，并将其整合在一起，形成对某一主题的全面理解。\\n*   **学习和适应:** 我可以不断学习新的信息，并根据新的数据改进我的性能。\\n\\n**3. 编程和技术：**\\n\\n*   **生成代码:** 我可以生成各种编程语言的代码，例如 Python, JavaScript, C++ 等。\\n*   **理解代码:** 我可以理解代码的逻辑和功能。\\n*   **调试代码:** 我可以帮助你查找代码中的错误。\\n\\n**4. 特定任务：**\\n\\n*   **对话:** 我可以进行自然流畅的对话，模拟人类的交流方式。\\n*   **写作辅助:** 我可以帮助你进行写作，例如提供思路、润色文笔、检查语法错误等。\\n*   **头脑风暴:** 我可以帮助你进行头脑风暴，生成新的想法和概念。\\n*   **日程安排:** 我可以帮助你安排日程，提醒你重要的事项。\\n\\n**总而言之，我是一个多功能的人工智能助手，可以帮助你完成各种各样的任务。**\\n\\n**我还在不断学习和进步，我的能力也在不断提升。**\\n\\n为了更好地帮助你，请告诉我你想让我做什么。 你越具体，我能提供的帮助就越有效。\\n",
          },
        ],
        role: "model",
      },
      finishReason: "STOP",
      avgLogprobs: -0.3780810169337951,
    },
  ],
  usageMetadata: {
    promptTokenCount: 3,
    candidatesTokenCount: 485,
    totalTokenCount: 488,
    promptTokensDetails: [
      {
        modality: "TEXT",
        tokenCount: 3,
      },
    ],
    candidatesTokensDetails: [
      {
        modality: "TEXT",
        tokenCount: 485,
      },
    ],
  },
  modelVersion: "gemini-2.0-flash",
  responseId: "MN-SaO-aFNmQ7dcPnIeluAM",
}`
console.log(dataToTs(js8).join('\n'))
pass(true)


function pass(done) {
  console.log(`\ntest success：${++passCount}`, '-'.repeat(20))
  done && console.log(`all test success：${passCount === allCount ? '✅' : '❌'}`)
}