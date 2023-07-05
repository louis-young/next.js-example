import { ApplicationPageLayout } from "@/components/ApplicationPageLayout";
import { AsynchronousComponent } from "@/components/AsynchronousComponent";
import { BookDetails } from "@/components/BookDetails";
import { ContentLoadingSkeleton } from "@/components/ContentLoadingSkeleton";
import { useBookQuery } from "@/hooks/queries/book";
import { useRouter } from "next/router";

const BookPage = () => {
  const router = useRouter();

  const { bookData, hasBookError, isLoadingBook } = useBookQuery({
    id: router.query.id as string | undefined,
  });

  return (
    <ApplicationPageLayout pageTitle="Book">
      <div className="max-w-3xl">
        <AsynchronousComponent
          data={bookData?.book}
          fallback={<ContentLoadingSkeleton />}
          hasError={hasBookError}
          isLoading={isLoadingBook}
        >
          {({ author, coverImageUrl, description, title }) => (
            <BookDetails
              author={author}
              coverImageUrl={coverImageUrl}
              description={description}
              title={title}
            />
          )}
        </AsynchronousComponent>
      </div>
    </ApplicationPageLayout>
  );
};

export const generateBookPagePath = (id: string) => {
  return `/books/${id}`;
};

export default BookPage;
