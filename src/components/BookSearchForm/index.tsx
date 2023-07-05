import { type FormEvent, useState } from "react";

import { Button } from "../Button";
import { LabelledTextInput } from "../LabelledTextInput";
import { Spacer } from "../Spacer";

type BookSearchFormValues = {
  searchQuery: string;
};

interface BookSearchFormProps {
  isSubmitting: boolean;
  onSubmit: (values: BookSearchFormValues) => void;
}

export const BookSearchForm = ({
  isSubmitting,
  onSubmit,
}: BookSearchFormProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ searchQuery });
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelledTextInput
        isDisabled={isSubmitting}
        isRequired
        label="Search Query"
        onValueChange={setSearchQuery}
        type="search"
        value={searchQuery}
      />

      <Spacer />

      <Button isDisabled={isSubmitting} type="submit">
        Search
      </Button>
    </form>
  );
};
