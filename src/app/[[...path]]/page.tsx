export async function generateStaticParams() {
  return [{ path: ["blog"] }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const path = "/" + ((await params)?.path ?? []).join("/");

  return (
    <div className="mx-auto flex w-full justify-center px-4 py-8">
      <h1 className="mt-24 text-6xl font-bold">Catch-all route {path}</h1>
    </div>
  );
}
