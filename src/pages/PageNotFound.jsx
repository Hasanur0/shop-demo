import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-grey-50 dark:bg-grey-900 flex items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="bg-grey-0 dark:bg-grey-800 border border-grey-100 dark:border-grey-700 rounded-md p-6 sm:p-8 md:p-12 flex-[0_1_96rem] w-full max-w-[90vw] text-center [&_h1]:mb-6 sm:[&_h1]:mb-8">
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <Button onClick={moveBack} size="large">
          &larr; Go back
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;
