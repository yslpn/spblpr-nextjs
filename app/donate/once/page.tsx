import Link from 'next/link'
import { DonateList } from '../../../components/DonateList'
import { paymentData } from '../../../paymentData'

export default function OnceDonatePage() {
  const onceList = Object.entries(paymentData).filter(
    ([_, value]) => value.isRecurrent === false && value.isCrypto === false
  )
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <DonateList
        donateList={onceList}
        className="flex flex-col gap-2 items-center justify-center"
        header="Разовое пожертвование"
      />
      <Link
        className="my-2 flex items-center justify-center w-[252px] bg-customGold h-[42px] text-customBlack text-sm hover:bg-customBlack hover:text-customGold transition-all duration-300"
        href="/donate/crypto"
      >
        Криптовалюты
      </Link>
    </div>
  )
}
