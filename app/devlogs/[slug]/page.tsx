import { loadProject } from "@/lib/load";
import NotionService from "@/services/notion-service";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const page = async ({ params }: any) => {
  const { slug } = params;
  const post = await loadProject(slug);

  return (
    <>
      <main className="container mx-auto">
        <h2 className="text-center text-5xl font-bold">
          {slug.replace("-", " ")}
        </h2>
        <article className="prose mx-auto">
          <ReactMarkdown>{post.markdown}</ReactMarkdown>
        </article>
      </main>
    </>
  );
};

export default page;
