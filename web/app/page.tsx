import HalideLanding from "@/components/ui/halide-landing";
import { CompanyProfile } from "@/components/ui/company-profile";
import { GlobalNetwork } from "@/components/ui/global-network";
import { Exhibitions } from "@/components/ui/exhibitions";

export default function Home() {
  return (
    <>
      <HalideLanding />
      <CompanyProfile />
      <GlobalNetwork />
      <Exhibitions />
    </>
  );
}
