import getToken from '@/server/utils/efi'

export default defineEventHandler(async (event) => {
  const credential = await getToken();
  const url = process.env.EFI_URL
  const body = {
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1
      }
    ]
  }
  const options = {
    method: 'POST',
    body: body,
    headers: {
      Authorization: `Bearer ${credential.access_token}`,
      'Content-Type': 'application/json'
    },
  }

  const res = await $fetch(`${url}/v1/charge`, options)

  return res
})
