import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const Home = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase.from("content").select("*");
      if (error) console.error(error);
      else setContent(data);
    };
    fetchContent();
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      {content.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          {item.image_url && <img src={item.image_url} alt={item.title} />}
        </div>
      ))}
    </div>
  );
};

export default Home;
