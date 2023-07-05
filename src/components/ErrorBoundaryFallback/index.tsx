import { ApplicationPageLayout } from "../ApplicationPageLayout";
import { Button } from "../Button";
import { Spacer } from "../Spacer";

export const ErrorBoundaryFallback = () => {
  return (
    <ApplicationPageLayout pageTitle="Oops">
      <p>Something went wrong. Please try again.</p>

      <Spacer />

      <Button onClick={() => window.location.reload()} type="button">
        Try again
      </Button>
    </ApplicationPageLayout>
  );
};
