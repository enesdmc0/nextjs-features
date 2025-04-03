import { Suspense } from "react";
import { JotaiFetch } from "@/components/jotai-fetch";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Fallback...</div>}>
        <JotaiFetch />
      </Suspense>
    </div>
  );
};

export default Page;
