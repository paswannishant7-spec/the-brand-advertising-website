import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

export function Modal({ open, onOpenChange, title, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/90 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 border border-paper/15 bg-ink-soft p-6 md:p-10 focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95">
          <div className="flex items-start justify-between gap-6">
            <Dialog.Title className="font-display text-2xl font-bold text-paper">{title}</Dialog.Title>
            <Dialog.Close className="shrink-0 text-paper/60 transition-colors hover:text-signal" aria-label="Close">
              <X size={22} />
            </Dialog.Close>
          </div>
          <div className="mt-6 text-paper/75">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
