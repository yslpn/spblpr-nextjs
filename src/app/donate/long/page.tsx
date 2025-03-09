import { DonateRouteInfo } from "../../../components/DonateRouteInfo";
import Layout from "../../../components/Layout";
import { paymentData } from "../../../paymentData";

export type IPaymentItem = {
  details: string;
  title: string;
  isRecurrent: boolean;
  isCrypto: boolean;
};

const recurrentList = Object.entries(paymentData).filter(
  ([_, value]) => value.isRecurrent === true,
);

export default function LongDonatePage() {
  return (
    <Layout>
      <DonateRouteInfo
        donateList={recurrentList}
        header="Регулярное пожертвование"
        className="flex h-full flex-col items-center justify-center gap-2"
      />
    </Layout>
  );
}
