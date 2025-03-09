import { IPaymentItem } from "../app/donate/long/page";
import { ButtonLink } from "./ButtonLink";

type DonateListProps = {
  donateList: [string, IPaymentItem][];
  className?: string;
  header: string;
};

export const DonateRouteInfo = (props: DonateListProps) => {
  return (
    <div className={props.className}>
      <h1 className="text-customText mb-5 text-2xl font-bold">
        {props.header}
      </h1>
      {props.donateList.map(([key, value]) => (
        <ButtonLink
          key={key}
          href={key === "telegram" ? `${value.details}` : `/donate/${key}`}
        >
          {value.title}
        </ButtonLink>
      ))}
    </div>
  );
};
