import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General info</span>
      <div className="flex flex-wrap p-2 items-center justify-center gap-2">
        <SimpleWidget />
      </div>
    </div>
  );
}
