import FormWindow from '../FormWindow';
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';

initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, {locale: 'es-PE'})


export default function ContainerData({setActiveStep}) {

    const planSeleccionado = JSON.parse(
        localStorage.getItem("plan_seleccionado")
    );

    const initialization = {
        amount: planSeleccionado.precio,
    }

    const handleFormSubmit = async(formData) => {
       
        setActiveStep(3);
    };

    return (
    <FormWindow>
        <h2 className="text-3xl font-bold text-center text-cyan-800 tracking-wide  mt-6 mb-3 border-b-2 border-cyan-100 uppercase ">confirmacion de compra</h2>
    <div className="overflow-auto">
        <CardPayment initialization={initialization} onSubmit={handleFormSubmit}
        customization={{
            paymentMethods:{
                maxInstallments: 1,
            },
            visual:{
                hideFormTitle: true,
                // hidePaymentButton: true,
                style:{
                    theme: 'bootstrap',
                    customVariables:{
                        textPrimaryColor: '#0E7490',
                        formPadding: '1px',
                        fontSizeExtraSmall: "1px",
                        fontSizeSmall: "7px",
                        fontSizeMedium: '10px',
                        fontSizeLarge: '10px',
                        fontSizeExtraLarge: "",
                        
                    }
                }
            }
        }}
        />
    </div>
    </FormWindow>
    );
}