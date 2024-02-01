import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

// export const useGetAllFestivals = routeLoader$(async () => {
//   const res = await performRequest<IGetAllFestivals>({
//     query: GET_ALL_FESTIVALS,
//   });
//   return res.allFestivals;
// });

export default component$(() => {
  // const { value } = useGetAllFestivals();

  return (
    <>Test</>
    // <ul>
    //   {value.map((festival) => (
    //     <li key={festival.id}>
    //       <a href={`/festival/${festival.slug}`}>{festival.title}</a>
    //     </li>
    //   ))}
    // </ul>
  );
});

export const head: DocumentHead = {
  title: "Trippavisor | Il portale definitivo per le sagre",
  meta: [
    {
      name: "description",
      content: "Il portale definitivo per le sagre",
    },
    {
      property: "og:title",
      content: "Trippavisor | Il portale definitivo per le sagre",
    },
    {
      property: "og:description",
      content: "Il portale definitivo per le sagre",
    },
  ],
};
