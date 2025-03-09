import { notFound } from "next/navigation";
import QRCode from "qrcode";
import { CopyButton } from "../../../components/CopyButton";
import Layout from "../../../components/Layout";
import { paymentData } from "../../../paymentData";

export default async function Load({
  params,
}: {
  params: Promise<{ slug: keyof typeof paymentData }>;
}) {
  const newParams = await params;
  const isValidSlug = Object.keys(paymentData).includes(newParams.slug);
  const data = paymentData[newParams.slug];
  const qr = await QRCode.toString(data.details, {
    type: "svg",
  });

  if (!isValidSlug) {
    return notFound();
  }

  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <h1 className="text-customText mb-5 text-2xl font-bold">
          {paymentData[newParams.slug].title}
        </h1>
        <div className="flex items-center gap-2 text-xs">
          <div>{paymentData[newParams.slug].details}</div>
          <CopyButton text={paymentData[newParams.slug].details} />
        </div>

        {paymentData[newParams.slug].isCrypto && (
          <span
            dangerouslySetInnerHTML={{ __html: qr }}
            className="h-[256px] w-[256px]"
          ></span>
        )}
      </div>
    </Layout>
  );
}
