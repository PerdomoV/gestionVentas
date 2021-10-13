const { Schema , model } = require( 'mongoose' )

const ventaSchema = new Schema({
                                usuario: {
                                    ref: "Usuario",
                                    type: Schema.Types.ObjectId,
                                    required: true
                                }, 
                                cliente: {
                                    ref: "Usuario",
                                    type: Schema.Types.ObjectId,
                                    required: true
                                }, 
                                producto:{
                                    type: String,
                                    required: true
                                },        

                                cantidad: {
                                    type: Number,
                                    required: true
                                },

                                valor:{
                                    type: Number,
                                    required: true
                                },
                                estado:{
                                    type: String,
                                    required: true
                                },
                                fecha_de_pago:{
                                    type: Date,
                                    required: true
                                }
                                },
                            {
                              timestamps: true,
                              versionKey: false 
                              //no almacena el atributo :_v
                              // que es innecesario debido a que ya hay timestamps
                            }
                            );

module.exports = model( 'Venta', ventaSchema )
