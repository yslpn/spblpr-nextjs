import { ButtonLink } from "../../../components/ButtonLink";
import { DonateRouteInfo } from "../../../components/DonateRouteInfo";
import Layout from "../../../components/Layout";
import { paymentData } from "../../../paymentData";

export default function OnceDonatePage() {
  const onceList = Object.entries(paymentData).filter(
    ([_, value]) => value.isRecurrent === false && value.isCrypto === false,
  );
  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-center">
        <DonateRouteInfo
          donateList={onceList}
          className="mb-2 flex flex-col items-center justify-center gap-2"
          header="Разовое пожертвование"
        />
        <ButtonLink href="/donate/crypto">Криптовалюты</ButtonLink>
      </div>
    </Layout>
  );
}
