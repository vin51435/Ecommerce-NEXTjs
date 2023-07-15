// Home page of our app
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

const RootPage = () => {
  return (
    <div className="p-4">
      This is a protected route!
      <UserButton afterSignOutUrl='/'/>
    </div>
  );
};
export default RootPage;
