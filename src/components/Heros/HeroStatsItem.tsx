import React, { FC } from "react";
import { IHero } from "../../models/IHero";

interface HeroStatsItemPropsType {
  hero: IHero;
}

export const HeroStatsItem: FC<HeroStatsItemPropsType> = ({ hero }) => {
  return (
    <div>
      <p>{hero.localized_name}</p>
    </div>
  );
};
