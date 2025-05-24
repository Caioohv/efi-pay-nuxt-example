export default emitBillet = async () => {
  let res = await fetch("/api/charges/billetonestep", {
    method: "post",
  });

  let body = await res.json();
  return JSON.stringify(body.data, null, 2)
}