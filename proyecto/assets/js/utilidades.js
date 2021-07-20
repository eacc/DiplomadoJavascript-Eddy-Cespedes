function guardarGastos(gasto) {
    let listadoGastos = obtenerListadoGastos()
    listadoGastos.push(gasto)
    actulizarLista(listadoGastos)
}

function obtenerListadoGastos() {
    let listadoGastos = JSON.parse(localStorage.getItem("listado_gastos"))
    if (listadoGastos == null) {
        listadoGastos = [];
        actulizarLista(listadoGastos)
    }
    return listadoGastos;
}

function actulizarLista(listadoGastos) {
    localStorage.setItem("listado_gastos", JSON.stringify(listadoGastos))
}

function setInvalid(input, mensaje) {
    input.focus()
    input.classList.add("is-invalid");
    input.nextElementSibling.classList.add('invalid-feedback')
    input.nextElementSibling.classList.remove('valid-feedback')
    input.nextElementSibling.innerHTML = mensaje;
}

function removeInvalid(input) {
    input.classList.remove("is-invalid");
    input.nextElementSibling.innerHTML = '';
}

function setValid(input, mensaje) {
    input.focus()

    input.classList.add("is-valid");


    input.nextElementSibling.classList.remove('invalid-feedback')


    input.nextElementSibling.classList.add('valid-feedback')
}

function guardarCategoria(categoria) {
    let categorias = obtenerCategoria();
    console.log(categorias)
    categorias.push(categoria)
    actulizarCategoria(categorias)

}

function obtenerCategoria() {
    let listadoCategoria = JSON.parse(localStorage.getItem("categorias"))

    if (listadoCategoria == null) {
        listadoCategoria = [];
        actulizarCategoria(listadoCategoria)
    }
    return listadoCategoria;
}

function actulizarCategoria(listadoCategoria) {
    localStorage.setItem("categorias", JSON.stringify(listadoCategoria))
}

const createOptionElement = (categoria) => {
    let selectCategorias = document.getElementById('categorias')
    let elementoOption = document.createElement('option');
    elementoOption.value = categoria;
    elementoOption.text = categoria;
    selectCategorias.append(elementoOption)
}

const renderizarCategorias = () => {
    let categorias = [];
    categorias = JSON.parse(localStorage.getItem('categorias'));
    let cat = []

    for (let cate in categorias) {
        cat[cate] = (categorias[cate].categoria)
    }

    cat.forEach(createOptionElement)
}

function eliminar() {

}