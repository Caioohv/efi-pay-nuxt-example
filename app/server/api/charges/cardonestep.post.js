import getToken from '@/server/utils/efi'

export default defineEventHandler(async (event) => {
  const credential = await getToken();
  const url = process.env.EFI_URL

  const reqBody = await readBody(event);
  

  const body = {
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1
      }
    ],
    "payment": {
      "credit_card": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "birth": "1990-08-29",
          "phone_number": "5144916523"
        },
        "installments": 1,
        "payment_token": reqBody.payment_token,
        "billing_address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "neighborhood": "Bauxita",
          "zipcode": "35400000",
          "city": "Ouro Preto",
          "complement": "",
          "state": "MG"
        }
      }
    }
  }


  console.log('\n','----------->body: ', (body))
  const options = {
    method: 'POST',
    body: body,
    headers: {
      Authorization: `Bearer ${credential.access_token}`,
      'Content-Type': 'application/json'
    },
  }

  const res = await $fetch(`${url}/v1/charge/one-step`, options)

  return res
})
