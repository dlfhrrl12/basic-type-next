interface DetailIdPageProps {
  params: Promise<{ id: string }>;
}

import React from "react";

const DetailIdPage = async ({ params }: DetailIdPageProps) => {
  const { id } = await params;
  console.log("id >> ", id);
  return <div> DetailIdPage</div>;
};

export default DetailIdPage;
