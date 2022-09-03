export interface IFormData {
    plate: string;
    chassis: string;
    renavam: string;
    model: string;
    brand: string;
    year: number;
}

export interface ModalProps {
    open: boolean;
    closeModal: () => void;
    reload: () => void;
    editVehicle: IVehicle;
    isEdit: boolean;
}