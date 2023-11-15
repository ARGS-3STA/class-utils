import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    name: "Gruppe generator",
    tag: "Verktøy",
    url: "/gruppe-generator",
    imageURL: "/app-images/empty.png",
  },
  {
    name: "ARGS Timeplan",
    tag: "Timeplan",
    url: "https://argstimeplan.pythonanywhere.com/",
    imageURL: "/app-images/timetable.png",
  },
];

type AppListProps = {
  filterQuery: string;
};

export function AppList({ filterQuery }: AppListProps) {
  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 xl:grid xl:grid-cols-4">
      {filteredApps.map(({ name, tag, url, imageURL }) => (
        <Card key={url}>
          <CardHeader>
            <CardDescription>{tag}</CardDescription>
            <CardTitle>{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href={url} className="cursor-pointer">
              <Image src={imageURL} width={316} height={160} alt="Image" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
