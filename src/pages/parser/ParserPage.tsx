import { useState } from 'react';
import { Button } from 'react-aria-components';

import { Confirm } from './Confirm';

export const ParserPage = () => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [objectId, setObjectId] = useState(null);

  const onConfirm = () => {
    setObjectId(null);
    alert('test');
  };

  return (
    <main className="px-6 py-8">
      <div className=""></div>
      <div className="">
        <div className="bg-white flex items-center justify-between">
          <span>test</span>

          <Button
            onPress={() => setIsOpenConfirm(true)}
            className="inline-flex items-center justify-center rounded-md bg-black bg-opacity-20 bg-clip-padding border border-white/20 px-3.5 py-2 font-medium font-[inherit] text-base text-white hover:bg-opacity-30 pressed:bg-opacity-40 transition-colors cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Delete…
          </Button>
        </div>
      </div>
      <Confirm
        isOpen={isOpenConfirm}
        onOpenChange={setIsOpenConfirm}
        onConfirm={onConfirm}
      />
    </main>
  );
};
