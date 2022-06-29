const alerts = document.querySelector("#alert")

console.log(alerts)

alerts.addEventListener("click", () => {
    alert("Click en el botón 'Aceptar'.")
})

$(() => {
    $("#jq").click(()=>{
        console.log("Hola, estoy usando jQuery!")
    })
    $("#jq").mouseenter((element)=>{
        element.target.style.color = "purple"
    })
    $("#jq").mouseleave((element)=>{
        element.target.style.color = "black"
    })
})