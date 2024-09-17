import { dataToTs } from '@/index'


const json = `{
    "id": "616684050718918322",
    "createUserString": null,
    "createTime": "2024-08-21 17:22:15",
    "name": "8470b61b-7248-47aa-838f-2a13cf75f61d.png",
    "path": "http://chengguo-public.oss-cn-shanghai.aliyuncs.com/photo-g-admin/8470b61b-7248-47aa-838f-2a13cf75f61d.png?Expires=1726552528&OSSAccessKeyId=LTAI5t8z8UKEHkjikYXYwXZb&Signature=EA1bTJtneFtV3UtdTGyfgakdMd4%3D"
}`


const data = dataToTs(json)
console.log(data)