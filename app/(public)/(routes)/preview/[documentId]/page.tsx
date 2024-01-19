"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import Toolbar from "@/components/toorbar";
import CoverImage from "@/components/coverImage";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    []
  );
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  if (document === undefined) {
    return (
      <>
        <CoverImage.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="h-14 w-[50%]" />
          <div className="h-4 w-[80%]" />
          <div className="h-4 w-[40%]" />
          <div className="h-4 w-[60%]" />
        </div>
      </>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content: content,
    });
  };

  return (
    <div className="pb-40 dark:bg-[#1F1F1F]">
      <CoverImage preview url={document?.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
        <Toolbar preview initialData={document} />
        <Editor
          editable={false}
          onChange={onChange}
          initialContent={document.content}
        />
      </div>
    </div>
  );
};

export default DocumentIdPage;
