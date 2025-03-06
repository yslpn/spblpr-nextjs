import { DonateList } from '../../../components/DonateList'
import { paymentData } from '../../../paymentData'

export default function CryptoPage() {
  const cryptoList = Object.entries(paymentData).filter(
    ([_, value]) => value.isRecurrent === false && value.isCrypto == true
  )

  return (
      <DonateList
        donateList={cryptoList}
        className="flex flex-col gap-2 items-center justify-center h-full"
        header="Криптовалюты"
      />
  )
}
