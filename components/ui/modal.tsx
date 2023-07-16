// This modal will standardize the use of shadcn dialog component
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

//?typescript
interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  //? means optional
  // ?React.ReactNode type means the children can hold any number(array) of react elements
}
// https://dev.to/elhamnajeebullah/react-typescript-what-is-reactnode-and-when-to-use-it-3660

// ? React.FC allows you to specify the props that a function component will accept.
// https://dev.to/elhamnajeebullah/react-typescript-what-is-reactfc-and-why-should-i-use-it-4029
export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div>{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
