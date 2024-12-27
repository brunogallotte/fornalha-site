import { ContentWrapper } from "@/components/ContentWrapper";
import { getUserSessionFromCookies } from "@/lib/authenticate/lib";
import { Chart } from "./_pageResources/sections/Chart/Chart";
import { Welcome } from "./_pageResources/components/Welcome/Welcome";

export default async function Admin() {
  const user = await getUserSessionFromCookies();

  return (
    <ContentWrapper className="pt-10">
      <Welcome user={user} />

      <Chart />
    </ContentWrapper>
  );
}
