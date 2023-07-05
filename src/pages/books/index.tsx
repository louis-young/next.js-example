import { ApplicationPageLayout } from "@/components/ApplicationPageLayout";
import { BookGrid } from "@/components/BookGrid";
import { BookSearchForm } from "@/components/BookSearchForm";
import { Spacer } from "@/components/Spacer";
import { useSearchBooksQuery } from "@/hooks/queries/search-books";
import { useState } from "react";

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { booksData, hasBooksError, isLoadingBooks } = useSearchBooksQuery({
    searchQuery,
  });

  return (
    <ApplicationPageLayout pageTitle="Books">
      <div className="max-w-lg">
        <BookSearchForm
          onSubmit={({ searchQuery: newSearchQuery }) =>
            setSearchQuery(newSearchQuery)
          }
          isSubmitting={isLoadingBooks}
        />
      </div>

      <Spacer />

      <BookGrid
        books={booksData?.books}
        hasBooksError={hasBooksError}
        isLoadingBooks={isLoadingBooks}
      />
    </ApplicationPageLayout>
  );
};

export const generateBooksPagePath = () => {
  return "/books";
};

export default BooksPage;
