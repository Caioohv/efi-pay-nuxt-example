import getToken from '@/server/utils/efi'

export default defineEventHandler(async (event) => {
  const credentials = await getToken();

})
