import { notFound } from 'next/navigation'
import { paymentData } from '../../../paymentData'
import { CopyButton } from '../../../components/CopyButton'
import QRCode from 'qrcode'

export default async function load({
  params,
}: {
  params: Promise<{ slug: keyof typeof paymentData }>
}) {
  const newParams = await params
  const isValidSlug = Object.keys(paymentData).includes(newParams.slug)
  const data = paymentData[newParams.slug]
  const qr = await QRCode.toString(data.details, {
    type: 'svg',
  })

  if (isValidSlug) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-full">
        <h1 className="text-customText font-bold text-2xl mb-5">
          {paymentData[newParams.slug].title}
        </h1>
        <div className="flex gap-2 items-center text-xs">
          <div>{paymentData[newParams.slug].details}</div>
          <CopyButton text={paymentData[newParams.slug].details} />
        </div>

        {paymentData[newParams.slug].isCrypto && (
          <span
            dangerouslySetInnerHTML={{ __html: qr }}
            className="w-[256px] h-[256px]"
          ></span>
        )}
      </div>
    )
  }
  return notFound()
}
