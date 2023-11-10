import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const apps = [
  {
    name: "Test App",
    tag: "Test Tag",
    url: "/test-app",
  },
  {
    name: "App numero dos",
    tag: "Tag de 2",
    url: "/test-app-2",
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
      {filteredApps.map(({ name, tag, url }) => (
        <Card key={url}>
          <CardHeader>
            <CardDescription>{tag}</CardDescription>
            <CardTitle>{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href={url} className="cursor-pointer">
              <div className="bg-gray-200 h-40 relative flex items-center justify-center">
                <p className="text-2xl">Placeholder</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
