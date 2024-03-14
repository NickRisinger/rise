import {
  Button,
  Dialog,
  DialogTrigger,
  DialogTriggerProps,
  Heading,
  Modal,
  ModalOverlay,
} from 'react-aria-components';

export const Confirm = ({
  onConfirm,
  ...props
}: Omit<DialogTriggerProps, 'children'> & { onConfirm: () => void }) => {
  return (
    <DialogTrigger {...props}>
      <ModalOverlay
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-20 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? 'animate-in fade-in duration-300 ease-out' : ''}
          ${isExiting ? 'animate-out fade-out duration-200 ease-in' : ''}
        `}
      >
        <Modal
          className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl
            ${isEntering ? 'animate-in zoom-in-95 ease-out duration-300' : ''}
            ${isExiting ? 'animate-out zoom-out-95 ease-in duration-200' : ''}
          `}
        >
          <Dialog role="alertdialog" className="outline-none relative">
            {({ close }) => (
              <>
                <Heading
                  slot="title"
                  className="text-lg font-bold my-0 text-[#282B2E]"
                >
                  Взять объект из парсера
                </Heading>
                <p className="mt-3 text-slate-500">
                  Вы уверены что хотите назначить объект № на себя?
                </p>
                <div className="mt-6 flex justify-end gap-2">
                  <DialogButton
                    className="bg-slate-200 text-slate-800 hover:border-slate-300 pressed:bg-slate-300"
                    onPress={close}
                  >
                    Cancel
                  </DialogButton>
                  <DialogButton
                    className="bg-red-500 text-white hover:border-red-600 pressed:bg-red-600"
                    onPress={() => {
                      close();
                      onConfirm();
                    }}
                  >
                    Delete
                  </DialogButton>
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

function DialogButton({ className, ...props }: any) {
  return (
    <Button
      {...props}
      className={`inline-flex justify-center rounded-md border border-solid border-transparent px-5 py-2 font-semibold font-[inherit] text-base transition-colors cursor-default outline-none focus-visible:ring-2 ring-blue-500 ring-offset-2 ${className}`}
    />
  );
}
