import React from "react";
import Success from "../svg/Success";
import Error from "../svg/Error";
import Warning from "../svg/Warning";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  type?: "success" | "error" | "warning";
}

const renderIcon = (type: string) => {
  if (type == "success") return <Success />;

  if (type == "error") return <Error />;

  if (type == "warning") return <Warning />;
};

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  type,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed h-dvh inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className="modal-content w-full max-w-[80dvw] md:max-w-[700px] rounded-2xl bg-[#212121] p-6 shadow-lg transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex-center gap-[10px]">
            {type && renderIcon(type)}
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
          </div>
          <button
            onClick={onClose}
            className="text-white cursor-pointer active:scale-95 hover:text-gray-700 transition rounded-full bg-[#000000] aspect-square w-[30px] h-auto"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalComponent;
