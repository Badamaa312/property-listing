import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { generatMonth } from "../util/generateMonth";
import data from "../../mock/data.json";
import { PropertyList } from "../search/PropertyList";

export default PropertyOnMap = () => {
  // const router = useRouter();
  // const idUpdate = router.query.id;

  // const [article, setArticles] = useState({});
  // const publishedDate = new Date(article.published_at);

  // const fetchData = () => {
  //   fetch(`https://dev.to/api/articles/${idUpdate}`)
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [idUpdate]);

  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="h-[80px] font-bold">{data.properties?.long}</h1>
          {filteredProperty.map((property) => {
            return <PropertyList property={property} />;
          })}
        </div>
      </div>
    </main>
  );
};
