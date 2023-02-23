import { light } from "@mui/material/styles/createPalette";
import NewsCard from "./NewsCard";

function List({ data }: any) {
  return (
    <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {data.map(({ content, title, urlToImage }: any) => (
        <li key={title}>
          <NewsCard title={title} content={content} img={urlToImage} />
        </li>
      ))}
    </ul>
  );
}
export default List;
