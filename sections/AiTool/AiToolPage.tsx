/**
 * AiToolPage Component
 *
 * This server-side rendered component displays a paginated list of AI tools with filtering options. 
 * It fetches the tools from an external API based on search and favorite filters, along with pagination details.
 * If no tools are found or an error occurs during the fetch, a "NotFound" component is displayed.
 *
 * @component
 *
 * @example
 * <AiToolPage searchParams={{ search: "chatgpt", isFav: "true", page: "1" }} />
 *
 * @param {Object} props - Component props.
 * @param {Object} props.searchParams - Query parameters from the URL.
 * @param {string} [props.searchParams.search] - Search term for filtering tools.
 * @param {string} [props.searchParams.isFav] - Filter flag for favorites (`"true"` or `"false"`).
 * @param {string} [props.searchParams.page] - Current page number.
 *
 * @returns {React.ReactElement}
 * Renders a grid of AI tools along with pagination or a "NotFound" component if no tools are available.
 *
 * Features:
 * - **Dynamic Fetching**: Retrieves tools from an API endpoint with filtering and pagination support.
 * - **Search and Filter**: Allows filtering tools by a search term and favorite status.
 * - **Responsive Grid Layout**: Displays tools in a responsive grid, adapting to various screen sizes.
 * - **Pagination**: Includes a `Pagination` component to navigate between pages.
 * - **Error Handling**: Displays a "NotFound" component in case of an error or no results.
 *
 * Functions:
 * - **fetchAiTools**: Fetches AI tools from the API using the provided search, favorites, and pagination parameters.
 *   - @param {string} search - Search term for filtering.
 *   - @param {boolean} isFav - Flag indicating whether to filter by favorites.
 *   - @param {number} page - Current page number.
 *   - @returns {Promise<Object>} The fetched data from the API.
 *   - @throws Will throw an error if the fetch request fails.
 *
 * State and Props:
 * - `searchParams`: URL query parameters including:
 *   - `search`: Search term for filtering tools.
 *   - `isFav`: Flag for favorite tools (`"true"` or `"false"`).
 *   - `page`: Current page number.
 *
 * Dependencies:
 * - **Chakra UI**: For layout and styling (`Box`, `SimpleGrid`).
 * - **Custom Components**:
 *   - `AiToolCard`: Card component for displaying individual AI tools.
 *   - `Pagination`: Component for navigating between pages.
 *   - `NotFound`: Component for handling empty or error states.
 *
 * API Integration:
 * - Fetches data from the `NEXT_PUBLIC_API_ENDPOINT` environment variable.
 * - Uses `page`, `page_size`, `search`, and `isFav` as query parameters.
 */

import { SimpleGrid, Box } from "@chakra-ui/react";
import AiToolCard from "./AiToolCard";
import Pagination from "../../Components/Pagination/Pagination";
import NotFound from "../../Components/NotFound/NotFound";
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
              aiImage={undefined} 
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
