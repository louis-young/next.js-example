import type { BookPreview as BookPreviewType } from "@/api/books";

import { generateBookPagePath } from "@/pages/books/[id]";
import Image from "next/image";
import Link from "next/link";

import { AsynchronousComponent } from "../AsynchronousComponent";
import { Card } from "../Card";
import { ContentLoadingSkeleton } from "../ContentLoadingSkeleton";
import { Heading } from "../Heading";
import { Spacer } from "../Spacer";

type BookPreviewProps = BookPreviewType;

const BookPreview = ({
  author,
  coverImageUrl,
  id,
  title,
}: BookPreviewProps) => {
  return (
    <li>
      <Link
        className="transition-opacity hover:opacity-80"
        href={generateBookPagePath(id)}
      >
        <Card className="h-full">
          <figure>
            <Image
              alt={title}
              className="h-80 w-full rounded-md object-cover"
              height={350}
              src={coverImageUrl}
              width={250}
            />

            <Spacer size="small" />

            <figcaption>
              <Heading headingLevel="h3">{title}</Heading>
            </figcaption>
          </figure>

          <Heading headingLevel="h5">{author}</Heading>
        </Card>
      </Link>
    </li>
  );
};

interface BookGridProps {
  books: BookPreviewType[] | undefined;
  hasBooksError: boolean;
  isLoadingBooks: boolean;
}

export const BookGrid = ({
  books,
  hasBooksError,
  isLoadingBooks,
}: BookGridProps) => {
  const gridClassNames =
    "grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4";

  return (
    <AsynchronousComponent
      fallback={
        <div className={gridClassNames}>
          {Array.from({ length: 8 }, (_, index) => (
            <ContentLoadingSkeleton key={index} />
          ))}
        </div>
      }
      data={books}
      hasError={hasBooksError}
      isLoading={isLoadingBooks}
    >
      {(books) => (
        <ul className={gridClassNames}>
          {books.map(({ author, coverImageUrl, id, title }) => (
            <BookPreview
              author={author}
              coverImageUrl={coverImageUrl}
              id={id}
              key={id}
              title={title}
            />
          ))}
        </ul>
      )}
    </AsynchronousComponent>
  );
};
