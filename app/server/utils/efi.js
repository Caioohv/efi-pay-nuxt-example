
import EfiPay from 'sdk-node-apis-efi'

const options = {
  clientId: process.env.EFI_CLIENT_ID,
  clientSecret: process.env.EFI_CLIENT_SECRET,
  environment: process.env.EFI_SANDBOX,
  certificate: '../../../certs/Dev.p12'
}

console.log('\n','----------->options: ', (options))
const efipay = new EfiPay(options)

export default efipay
