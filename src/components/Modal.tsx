interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void; // callback который ничего не возвращает, чтобы закрывать модалку на клик по черному бекграунду
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div
        className="fixed bg-black/35 top-0 left-0 left-0 bottom-0"
        onClick={onClose}
      >
        <div className="w-[500px]">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
}
