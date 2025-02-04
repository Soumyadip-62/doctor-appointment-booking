import MainLayout from "@/components/Layout/MainLayout";
import SearchComponent from "@/components/SearchComponent";

export default function Home() {
  return <MainLayout header="Dashboard">
    <div className="flex items-center">
      <SearchComponent/>
    </div>

    

  </MainLayout>;
}
