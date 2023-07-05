import type { BookDetails as BookDetailsType } from "@/api/books";

import Image from "next/image";

import { Card } from "../Card";
import { Heading } from "../Heading";
import { Spacer } from "../Spacer";

type BookDetailsProps = Omit<BookDetailsType, "id">;

export const BookDetails = ({
  author,
  coverImageUrl,
  description,
  title,
}: BookDetailsProps) => {
  return (
    <Card>
      <article>
        <figure className="max-w-[17rem]">
          <Image
            alt={title}
            className="h-80 w-full rounded-md object-cover"
            height={350}
            src={coverImageUrl}
            width={250}
          />

          <Spacer size="small" />

          <figcaption>
            <Heading headingLevel="h2">{title}</Heading>
          </figcaption>
        </figure>

        <Heading headingLevel="h3">{author}</Heading>

        <Spacer size="small" />

        <p>{description}</p>
      </article>
    </Card>
  );
};
