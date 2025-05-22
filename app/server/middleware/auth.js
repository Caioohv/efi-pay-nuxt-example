import { eventHandler, createError } from 'h3';

export default eventHandler(async (event, origin = false) => {
  console.log('\n','----------->origin: ', (origin))
  if(!origin) return;
  const { user } = await requireUserSession(event)

  return true;
});
