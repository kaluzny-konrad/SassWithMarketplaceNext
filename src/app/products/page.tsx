import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";

type Param = string | string[] | undefined;

type Props = {
  searchParams: {
    [key: string]: Param;
  };
};

const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};

export default function page({ searchParams }: Props) {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);

  return (
    <MaxWidthWrapper>
      <ProductReel
        title={"High-quality Products"}
        query={{
          limit: 40,
          sort: sort === "desc" || sort === "asc" ? sort : undefined,
        }}
      />
    </MaxWidthWrapper>
  );
}
