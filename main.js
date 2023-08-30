const qr = qrcode(0, "L");

const input = document.querySelector("input");
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
//capruta la data
  const url = input.value

  //agregar la data
  qr.addData(url)

//crear codigo qr
  qr.make()


  //generar la imagen del qr
  const imgenQR = qr.createDataURL()

document.querySelector("img").src=imgenQR;





})

























