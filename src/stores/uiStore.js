import { create } from 'zustand'

let toastId = 0

export const useUiStore = create((set, get) => ({
  activeModal: null,
  modalProps: {},
  toasts: [],

  openModal: (modalName, props = {}) => {
    set({ activeModal: modalName, modalProps: props })
  },

  closeModal: () => {
    set({ activeModal: null, modalProps: {} })
  },

  addToast: (message, type = 'info', duration = 3000) => {
    const id = ++toastId
    const toast = { id, message, type, duration }

    set(state => ({
      toasts: [...state.toasts, toast],
    }))

    if (duration > 0) {
      setTimeout(() => {
        get().removeToast(id)
      }, duration)
    }

    return id
  },

  removeToast: (id) => {
    set(state => ({
      toasts: state.toasts.filter(t => t.id !== id),
    }))
  },

  clearToasts: () => {
    set({ toasts: [] })
  },
}))
