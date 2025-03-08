import { DonateRouteInfo } from '../../../components/DonateRouteInfo'
import { paymentData } from '../../../paymentData'
import { ButtonLink } from '../../../components/ButtonLink'
import Layout from '../../../components/Layout'

export default function OnceDonatePage() {
  const onceList = Object.entries(paymentData).filter(
    ([_, value]) => value.isRecurrent === false && value.isCrypto === false
  )
  return (
    <Layout>
      <div className="flex flex-col items-center h-full justify-center">
        <DonateRouteInfo
          donateList={onceList}
          className="flex flex-col gap-2 items-center justify-center mb-2"
          header="Разовое пожертвование"
        />
        <ButtonLink children="Криптовалюты" href="/donate/crypto" />
      </div>
    </Layout>
  )
}
