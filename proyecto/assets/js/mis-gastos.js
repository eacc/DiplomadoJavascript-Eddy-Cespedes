window.addEventListener('load', event => {

    const formularioGastos = document.getElementById("formulario-gastos")

    formularioGastos.addEventListener('submit', event => {
        event.preventDefault()

        let descripcion = event.target.elements['descripcion'].value;
        let monto = event.target.elements['monto'].value;

        if (descripcion.length === 0 && monto.length === 0) {
            setInvalid(
                event.target.elements['descripcion'],
                "Este campo es obligatorio"
            )
            return;
        }

        if (monto.length === 0) {
            setInvalid(
                event.target.elements['monto'],
                "Este campo es obligatorio"
            )
            return;
        }

        removeInvalid(event.target.elements['descripcion'])
        removeInvalid(event.target.elements['monto'])

        let gasto = {
            descripcion: event.target.elements['descripcion'].value,
            categoria: event.target.elements['categorias'].value,
            fecha: event.target.elements['fecha'].value,
            monto: event.target.elements['monto'].value,
            moneda: event.target.elements['moneda'].value,

        };

        guardarGastos(gasto)
        event.target.reset()
    })

    document.getElementById("descripcion")
        .addEventListener('keydown', event => {
            // Remove el mensaje de error
            removeInvalid(event.target)

            setValid(event.target, 'Validacion correcta')
        })

    console.log(renderizarCategorias())

})