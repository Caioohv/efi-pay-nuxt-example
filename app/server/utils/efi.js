const client_id = process.env.EFI_CLIENT_ID
const client_secret = process.env.EFI_CLIENT_SECRET
const url = process.env.EFI_URL

const basicToken = btoa(`${client_id}:${client_secret}`)

let credential = ''
let expire_at = 0

export default async function getToken() {
  const now = Date.now()

  if (now >= expire_at) {
    console.log('\nRenovando token...')

    const res = await $fetch(`${url}/v1/authorize`, {
      method: 'POST',
      body: { grant_type: 'client_credentials' },
      headers: { Authorization: `Basic ${basicToken}` }
    })

    credential = res.access_token
    expire_at = parseInt(res.expire_at)
  }

  return {
    access_token: credential,
    expire_at
  }
}