// Home page of our app
'use client';

import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

const RootPage = () => {
  return (
    <div className="p-4">
      <Modal
        title="Test"
        description="Test Desc"
        isOpen={true}
        onClose={() => {}}
      >
        Children
      </Modal>
    </div>
  );
};
export default RootPage;

{
  /* <UserButton afterSignOutUrl='/'/> */
}
