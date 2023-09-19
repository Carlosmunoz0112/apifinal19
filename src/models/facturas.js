const mongoose = require('mongoose');

const facturaSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'El campo id es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio']
    },
    producto: {
        type: String,
        required: [true, 'El campo Productos es obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'El campo Ventas es obligatorio']
    },
    precio: {
        type: Number,
        required: [true, 'El campo Compras es obligatorio']
    },
    total: {
        type: Number,
        required: [true, 'El campo Proveedores es obligatorio']
    }
});

module.exports = mongoose.model('factura', facturaSchema); // Cambio de "roles" a "factura"
