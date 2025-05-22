import { efipay } from '@/server/utils/efi'

export default defineEventHandler(async (event) => {

  const purchaseCart = {
    items: [
      {
        name: 'Product 1',
        value: 1000,
        amount: 2,
      },
    ],
    shippings: [
      {
        name: 'entrega',
        value: 100,
      },
    ],
  }

  console.log('\n','----------->purchaseCart: ', (purchaseCart))
  let charge;
  try {
    charge = await efipay.createCharge({}, purchaseCart)
    console.log('\n','----------->charge: ', (charge))
  }catch(error){
    console.log('\n','----------->error: ', (error))
    
  }

  return charge
})
