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
      <h1 className="text-customText font-bold text-2xl mb-5">
        {props.header}
      </h1>
      {props.donateList.map(([key, value]) => (
        <ButtonLink
          key={key}
          children={value.title}
          href={key === "telegram" ? `${value.details}` : `/donate/${key}`}
        />
      ))}
    </div>
  );
};
