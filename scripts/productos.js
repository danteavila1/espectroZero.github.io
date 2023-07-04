//const URL = "http://127.0.0.1:5000/"
const URL = "https://angelakrw.pythonanywhere.com/"

// Realizamos la solicitud GET al servidor para obtener todos los productos
fetch(URL + 'productos')
    .then(function (response) {
        if (response.ok) {
            return response.json(); // Parseamos la respuesta JSON
        } else {
            // Si hubo un error, lanzar explícitamente una excepción
            // para ser "catcheada" más adelante
            throw new Error('Error al obtener los productos.');
        }
    })
    .then(function (data) {
        var tablaProductos = document.getElementById('tablaProductos');

        // Iteramos sobre los productos y agregamos filas a la tabla
        data.forEach(function (producto) {
            var fila = document.createElement('tr');
            fila.innerHTML = '<td>' + producto.codigo + '</td>' +
                '<td>' + producto.descripcion + '</td>' +
                '<td align="right">' + producto.cantidad + '</td>' +
                '<td align="right">&nbsp; &nbsp;&nbsp; &nbsp;' + producto.precio + '</td>';
            tablaProductos.appendChild(fila);
        });
    })
    .catch(function (error) {
        // Código para manejar errores
        alert('Error al obtener los productos.');
    });

///////////////////////////
////    Modificar productos
///////////////////////////

const app = Vue.createApp({
    data() {
        return {
            mostrarPanel: false,
            codigo: '',
            mostrarDatosProducto: false,
            descripcion: '',
            cantidad: '',
            precio: '',
            productos: [],
            mostrarCarrito: false,
            carrito: [],
        }
    },
    created() {
        this.obtenerProductos()
    },
    methods: {
        obtenerProductos() {
            fetch(URL + 'productos')
              .then(response => response.json())
              .then(data => {
                this.productos = data
              })
              .catch(error => {
                console.error(URL + 'productos', error)
                alert('Error al obtener los productos.')
              })
          },
          agregarAlCarrito(producto) {
            fetch(URL + 'carrito', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                codigo: producto.codigo,
                cantidad: 1, // Agregamos una unidad al carrito
              }),
            })
              .then(response => response.json())
              .then(data => {
                alert(data.message)
              })
              .catch(error => {
                console.error('Error al agregar el producto al carrito:', error)
                alert('Error al agregar el producto al carrito.')
              })
          },
          restarDelCarrito(producto) {
            fetch(URL + 'carrito', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                codigo: producto.codigo,
                cantidad: 1, // Restamos una unidad del carrito
              }),
            })
              .then(response => response.json())
              .then(data => {
                alert(data.message)
              })
              .catch(error => {
                console.error('Error al restar el producto del carrito:', error)
                alert('Error al restar el producto del carrito.')
              })
          },
          obtenerCarrito() {
            fetch(URL + 'carrito')
              .then(response => response.json())
              .then(data => {
                this.carrito = data
                this.mostrarCarrito = true
              })
              .catch(error => {
                console.error('Error al obtener el carrito:', error)
                alert('Error al obtener el carrito.')
              })
          },
        obtenerProducto() {
            fetch(URL + 'productos/' + this.codigo)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw new Error('Error al obtener los datos del producto.')
                    }
                })
                .then(data => {
                    this.descripcion = data.descripcion
                    this.cantidad = data.cantidad
                    this.precio = data.precio
                    this.mostrarDatosProducto = true
                })
                .catch(error => {
                    alert('Error al obtener los datos del producto.')
                })
        },
        guardarCambios() {
            const producto = {
                codigo: this.codigo,
                descripcion: this.descripcion,
                cantidad: this.cantidad,
                precio: this.precio
            }

            fetch(URL + 'productos/' + this.codigo, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw new Error('Error al guardar los cambios del producto.')
                    }
                })
                .then(data => {
                    alert('Cambios guardados correctamente.')
                    location.reload()
                })
                .catch(error => {
                    alert('Error al guardar los cambios del producto.')
                })
        },
        eliminarProducto() {
            // Eliminamos el producto de la fila seleccionada
            fetch(URL + 'productos/' + this.codigo)
                .then(response => {
                    if (response.ok) {
                        // Eliminar el producto de la lista después de eliminarlo en el servidor
                        this.productos = this.productos.filter(producto => producto.codigo !== codigo);
                        console.log('Producto eliminado correctamente.');
                    } else {
                        // Si hubo un error, lanzar explícitamente una excepción
                        // para ser "catcheada" más adelante
                        throw new Error('Error al eliminar el producto.');
                    }
                })
                .catch(error => {
                    // Código para manejar errores
                    alert('Error al eliminar el producto.');
                });
        }
    }
})

app.mount('#app')

