export default async (payment_token) => {
  let options = {
    method: "post",
    body: JSON.stringify({
      payment_token: payment_token
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }
  console.log('\n','----------->options: ', (options))
  let res = await fetch("/api/charges/cardonestep", options);

  let body = await res.json();
  return JSON.stringify(body.data, null, 2)
}