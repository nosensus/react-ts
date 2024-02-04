// контекст - отдельная логика ЧТобы в любом компоненте получить доступ до этого состоянию
// у контекста есть два поля Provider and Consumer
// provider - какие данные мы хотим предоставить для внутренних компонентов
//

import { createContext, useState } from "react";

interface IModalContext {
  modal: boolean; // видно или не видно модальное окно
  open: () => void;
  close: () => void;
}

// называем с большой буквы ModalContext
export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
});
// children: React.ReactNode - это тип у {children}
export const ModalState = ({ children }: { children: React.ReactNode }) => {
  // то что есть в ModalState
  const [modal, setModal] = useState(false);
  const open = () => setModal(true);
  const close = () => setModal(false);

  // <ModalContext.Provider> - получает доступ все что есть в ModalState
  return (
    // value - предоставляет данные из ModalState для внутренних компонентов этого контекста
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
