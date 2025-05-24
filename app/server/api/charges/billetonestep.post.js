import getToken from '@/server/utils/efi'

export default defineEventHandler(async (event) => {
  const credential = await getToken();
  const url = process.env.EFI_URL

  const body = {
    items: [
      {
        name: "Curso Node.js",
        value: 10000, // em centavos
        amount: 1
      }
    ],
    payment: {
      banking_billet: {
        expire_at: "2025-06-20",
        customer: {
          name: "João da Silva",
          email: "joao.silva@email.com",
          cpf: "12345678909",
          birth: "1980-01-01",
          phone_number: "31988887777"
        }
      }
    }
  }


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
