import DonateLogo from "../../assets/donate-logo.svg";
import { ButtonLink } from "../../components/ButtonLink";
import Layout from "../../components/Layout";

export default function DonatePage() {
  return (
    <Layout>
      <div className="text-customText mb-5 flex h-full flex-col items-center justify-center gap-5 text-center text-2xl font-bold">
        <h1>Поддержите свободу в Санкт-Петербурге!</h1>
        <DonateLogo />
        <p className="text-xs font-normal">
          Пополните казну регионального отделения Либертарианской партии России.
        </p>
        <ButtonLink href="./once">Разовое пожертвование</ButtonLink>
        <ButtonLink href="./long">Регулярное пожертвование</ButtonLink>
      </div>
    </Layout>
  );
}
