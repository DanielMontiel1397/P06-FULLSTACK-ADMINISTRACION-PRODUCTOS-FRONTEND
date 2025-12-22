import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import type { ProductoCreateType } from '../types';
import { Form } from 'react-router-dom';

type ConfirmarDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    producto: ProductoCreateType;
}

export default function ConfirmarDialog({ open, onOpenChange, producto }: ConfirmarDialogProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md bg-white rounded-lg shadow-2xl
                                            -translate-x-1/2 -translate-y-1/2
                                            data-[state=open]:animate-in data-[state=closed]:animate-out 
                                            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
                                            data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
                                            focus:outline-none">
                    
   
                    <Dialog.Close asChild>
                        <button
                            aria-label="Cerrar"
                            className="hover:cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                            onClick={() => onOpenChange(false)}
                        >
                            <Cross2Icon className="w-5 h-5" />
                        </button>
                    </Dialog.Close>

           
                    <div className="flex justify-center pt-6 pb-4">
                        <div className="bg-red-100 rounded-full p-3">
                            <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
                        </div>
                    </div>

          
                    <div className="px-6 pb-6">
                        <Dialog.Title className="text-xl font-bold text-gray-900 text-center mb-3">
                            Confirmar eliminación
                        </Dialog.Title>
                        
                        <Dialog.Description className="text-gray-600 text-center mb-6 leading-relaxed">
                            ¿Estás seguro que quieres eliminar el producto{' '}
                            <span className="font-semibold text-gray-900">"{producto.name}"</span>?
                            <br />
                            <span className="text-sm text-red-600 mt-2 block">Esta acción no se puede deshacer.</span>
                        </Dialog.Description>

          
                        <div className="flex gap-3">
                            <button
                                onClick={() => onOpenChange(false)}
                                className="hover:cursor-pointer flex-1 px-4 py-2.5 font-semibold rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Cancelar
                            </button>
                            
                            <Form method="DELETE" action={`productos/${producto.id}/eliminar`} className="flex-1">
                                <button
                                    type="submit"
                                    className="hover:cursor-pointer w-full px-4 py-2.5 font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Eliminar
                                </button>
                            </Form>
                        </div>
                    </div>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}