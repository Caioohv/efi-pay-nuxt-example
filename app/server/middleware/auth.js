import { eventHandler, createError } from 'h3';

export default eventHandler(async (event, origin = false) => {
  if(!origin) return;
  const { user } = await requireUserSession(event)

  return true;
});
