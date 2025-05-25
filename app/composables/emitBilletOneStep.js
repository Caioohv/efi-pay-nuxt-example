export default async () => {
  let res = await fetch("/api/charges/billetonestep", {
    method: "post",
  });

  let body = await res.json();
  let qrcode = body.data.pix.qrcode_image;
  body.data.pix.qrcode_image = 'data:image/png;base64 - diminuindo para exibição';
  return {
    qrcode: qrcode,
    content: JSON.stringify(body.data, null, 2)
  };
}