let status = false
const parent = document.querySelector("nav")

function handleModal(elt) {

    if (status) {
        parent.classList.add("modal")
    } else {
        parent.classList.remove("modal")

    }
    status = !status

}