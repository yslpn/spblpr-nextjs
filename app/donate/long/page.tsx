import { DonateList } from '../../../components/DonateList'
import { paymentData } from '../../../paymentData'

export type IPaymentData = Record<string, IPaymentItem>

export type IPaymentItem = {
  details: string
  title: string
  isRecurrent: boolean
  isCrypto: boolean
}

const recurrentList = Object.entries(paymentData).filter(
  ([_, value]) => value.isRecurrent === true
)

export default function LongDonatePage() {
  return (
    <DonateList
      donateList={recurrentList}
      header="Регулярное пожертвование"
      className="flex flex-col gap-2 items-center justify-center h-full"
    />
  )
}
