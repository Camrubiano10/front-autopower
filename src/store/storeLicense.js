import { create } from "zustand";

const initialState = {
  license_plate: "",
  name: "",
  lastname: "",
  document_number: "",
  document_type: "",
  country: "",
  phone: "",
  email: "",
  car_type: "",
  service: "",
  created_at: "",
};

export const useClientStore = create((set) => ({
  data: initialState,
  setData: (newData) => set((state) => ({ data: newData })),
}));
