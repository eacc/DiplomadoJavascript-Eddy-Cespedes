window.addEventListener('load', event => {



    const formcategoria = document.getElementById('formcategoria')

    formcategoria.addEventListener('submit', event => {
        event.preventDefault()

        let categoria = event.target.elements['categoria'].value;

        if (categoria.length === 0) {
            setInvalid(
                event.target.elements['categoria'],
                "Este campo es obligatorio"
            )
            return;
        }

        removeInvalid(event.target.elements['categoria'])

        let categorialist = {
            categoria: event.target.elements['categoria'].value,
        }
        guardarCategoria(categorialist)
        event.target.reset()

    })

    renderizarCategorias()

    document.getElementById("categoria")
        .addEventListener('keydown', event => {
            removeInvalid(event.target)

            setValid(event.target, 'Validacion correcta')
        })
})