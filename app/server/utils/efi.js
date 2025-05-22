
import EfiPay from 'sdk-node-apis-efi'
import path from 'path'
import fs from 'fs'

const certPath = path.resolve(__dirname, 'certs/Dev.p12')
console.log('\n','----------->certPath: ', (certPath))
const certificate = fs.readFileSync(certPath)
console.log('\n','----------->certificate: ', (certificate))

const options = {
  clientId: process.env.EFI_CLIENT_ID,
  clientSecret: process.env.EFI_CLIENT_SECRET,
  sandbox: true,
  certificate: certificate
}

console.log('\n','----------->options: ', (options))
let efipay = {};
try{
  efipay = new EfiPay(options)
}catch(err){
  console.log('\n','----------->err: ', (err))
}

export default { efipay }
