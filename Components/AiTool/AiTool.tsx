import { SimpleGrid, Box } from "@chakra-ui/react";
import AiToolCard from "./AiToolCard";
import Pagination from "../Pagination/Pagination";
import NotFound from "../NotFound/NotFound";
interface Tool {
  imageURL?: string;
  title: string;
  functionality: string;
  description: string;
  tags: string;
  isFav: boolean;
}
async function fetchAiTools(search: string, isFav: boolean, page: number) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/aitools`;
  const url = `${baseUrl}?page=${page}&page_size=8&search=${search || ""}${
    isFav ? "&isFav=true" : ""
  }`;

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) throw new Error(`Failed to fetch AI tools`);

  const data = await response.json();
  return data;
}


export default async function AiToolPage({
  searchParams,
}: {
  searchParams: { search?: string; isFav?: string; page?: string };
}) {
  const search = searchParams.search || "";
  const isFav = searchParams.isFav === "true";
  const page = Number(searchParams.page || 1);

  try {
    const data = await fetchAiTools(search, isFav, page);

    if (!data || data.data.length === 0) {
      
      return (
        <Box marginTop="50px" marginInline="auto" maxW="1650px" paddingInline="20px">
          <NotFound />
        </Box>
      );
    }

    return (
      <Box marginTop="50px" marginInline="auto" maxW="1650px" paddingInline="20px">
     
        <SimpleGrid py="40px" columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="20px">
          {data.data.map((tool:Tool, index: number) => (
            <AiToolCard
              key={index}
              aiName={tool.title}
              description={tool.description}
              functionality={tool.description}
              aiImage={tool.imageURL || "/default-image.png"} 
              tag={tool.tags?.[0] || "No Tag"}
              isFav={tool.isFav}
            />
          ))}
        </SimpleGrid>

        
        <Pagination
          totalItems={data.total_items}
          itemsPerPage={data.page_size}
          currentPageNum={page}
        />
      </Box>
    );
  } catch (error) {
  
    console.error("Error fetching AI tools:", error);
    return (
      <Box marginTop="50px" marginInline="auto" maxW="1650px" paddingInline="20px">
        <NotFound />
      </Box>
    );
  }
}
