window.addEventListener('load', event => {


    const listado = document.getElementById('listado-gastos');
    const misGastos = obtenerListadoGastos();
    const renderizarGasto = gasto => {
        listado.innerHTML = listado.innerHTML +
            `
            <div class="col-4 col-md-4 col-lg-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                    <h5 class="card-title">${gasto.categoria}</h5>
                    <p class="card-text">${gasto.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">${gasto.moneda} ${gasto.monto}</small>
                    </div>
                    </div>
                </div>
            </div>
        `
    }

    for (let index = 0; misGastos.length > index; index = index + 1) {
        let gasto = misGastos[index]
        renderizarGasto(gasto)
    }

    renderizarCategorias()

    // Eventos para filtrar la lista de gastos

    document
        .getElementById('monto')
        .addEventListener('change', event => {
            let filtroMonto = event.target.value
            let misGastos = obtenerListadoGastos();

            let misGastosFiltrados = misGastos.filter((gasto) => {

                if (gasto.monto == filtroMonto) {
                    return true
                } else {
                    return false
                }
            })
            listado.innerHTML = ''
            misGastosFiltrados.forEach(renderizarGasto)
        })

    document
        .getElementById('categorias')
        .addEventListener('change', event => {
            let filtroCategoria = event.target.value
            let misGastos = obtenerListadoGastos();

            let misGastosFiltrados = misGastos.filter((gasto) => {

                if (gasto.categoria == filtroCategoria) {
                    return true
                } else {
                    return false
                }
            })
            listado.innerHTML = ''
            misGastosFiltrados.forEach(renderizarGasto)
        })
})

